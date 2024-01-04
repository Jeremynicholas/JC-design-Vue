<template>
    <div class="form-style">

      <form v-if="!successMessage" class="contact-form"
              name="contact-form"
              method="post" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit">  

          <div class="form-field">
            <label>Clinic or business Name</label>
            <input v-model="form.businessName" type="text" name="business-name" placeholder="Clinic or business name">
          </div>

          <div class="form-field">
            <label>Name</label>
            <input v-model="form.name" type="text" name="name" placeholder="Name" required>
          </div>

          <div class="form-field">
            <label>Email</label>
            <input v-model="form.email" type="email" name="email" placeholder="Email Address" required>
          </div>

          <div class="form-field">		
            <label>Existing Website</label>	
            <input v-model="form.existingWebsite" type="text" name="existing-website" placeholder="Do you have an existing website? If so please enter the address.">
          </div>

          <div class="form-field">
            <label>Message</label>
            <textarea v-model="form.message" name="message" placeholder="What are you enquiring about?"></textarea>
          </div>

          <div>	
            <button class="submit_btn" type="submit" name="submit">Enquire Now</button>
            </div>
        </form>	
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
</template>

<script setup>
import { ref } from 'vue';
const formContainer = document.querySelector('.contact-form')
const form = ref({
  'business-name': '',
  name: '',
  email: '',
  'existing-website': '',
  message: '',
});

const successMessage = ref('');
const errorMessage = ref('');

const handleSubmit = async () => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'contact-form',
        ...form.value,
      }).toString(),
    });

    if (response.ok) {
      successMessage.value = 'Thank you for your submission';
    } else {
      successMessage.value = '';
      errorMessage.value = 'Error submitting form. Please try again.';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    successMessage.value = '';
    errorMessage.value = 'Error submitting form. Please try again.';
  }
};
</script>


<style scoped>
.form-style {
	position: relative;
    width: 100%;
	text-align: left;
}		

.form-field	{
	padding:10px 0px 10px 0px;
}


.form-field label	{
	display: none;
	border: none;
	width: 100%;
}		

.form-field input	{
	background: var(--background-light);
	border-width: 0px 0px 2px 0px;
	border-color: var(--font-color-placeholder);
	color: var(--font-color);
	font: var(--bodyFont);
	padding: 10px 0px 0px 0px;
	width: 100%;
}	

::-webkit-input-placeholder	{
	color: var(--font-color-placeholder);
}

.form-field textarea	{
	background: var(--background-light);
	border-width: 0px 0px 2px 0px;
	border-color: var(--font-color-placeholder);
	font: var(--bodyFont);
	color: var(--font-color);
	width: 100%;
	outline: none;
  resize: none;
}	


.form-field input:focus-visible {
	outline: none;
}	

.submit_btn {
        margin-top: 20px;
        background: var(--btn);
        color: var(--light);
        font-size: var(--fontSizeButtons);
        padding: 10px 15px;
        border: none;
        border-radius: var(--border-radius-buttons);
        box-shadow: var(--box-shadow);
        text-decoration: none;
        cursor: pointer;
        transition: var(--timingAll);
    }

    .submit_btn:hover {
        background: var(--btn-hover);  
    }

    .success-message, .error-message {
      margin-top: var(--gap);
      color: var(--light);
      padding: 5px 15px;
      border-radius: var(--border-radius);

    }
    .success-message {
      background: green;
    }
    .error-message {
      background: rgb(128, 0, 0);
    }

</style>