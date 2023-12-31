<template>
    <div class="form-style">
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <div class="form-field">
          <label>Name</label>
          <input v-model="form.name" type="text" name="name" placeholder="Name" required>
        </div>
        <div class="form-field">
          <label>Email</label>
          <input v-model="form.email" type="email" name="email" placeholder="Email Address" required>
        </div>
        <div>
          <button class="submit_btn" type="submit" name="submit">Enquire Now</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
  });
  </script>
  