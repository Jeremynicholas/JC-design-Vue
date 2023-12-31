<template>
    <div class="form-style">
      <!-- A little help for the Netlify bots if you're not using a SSG -->
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
  
      <form name="contact" method="post" @submit.prevent="handleSubmit">
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-field">
          <label>Your Name:</label>
          <input v-model="name" type="text" name="name" required />
        </div>
        <div class="form-field">
          <label>Your Email:</label>
          <input v-model="email" type="email" name="email" required />
        </div>
        <div class="form-field">
          <label>Message:</label>
          <textarea v-model="message" name="message" rows="3" required></textarea>
        </div>
        <div class="form-field">
          <button type="submit">Send</button>
        </div>
      </form>
  
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </template>
  
<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
  budget: '',
});


const successMessage = ref('');
const errorMessage = ref('');

  const handleSubmit = async () => {
  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...toRefs(form)
      }).toString(),
    });

      if (response.ok) {
        successMessage.value = 'Thank you for your submission';
        errorMessage.value = '';
      } else {
        successMessage.value = '';
        errorMessage.value = 'Error submitting form. Please try again.';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      successMessage.value = '';
      errorMessage.value = 'Error submitting form. Please try again.';
    }
  }
</script>
  