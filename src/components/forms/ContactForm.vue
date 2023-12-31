<template>
    <div class="form-style">

        <form class ="contact-form"
              name="contact-form"
              method="post" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit">  

          <div class="form-field">
            <label>Name</label>
            <input v-model="form.name" type="text" name="name" placeholder="Name" required>
            </div>
          <div class="form-field">
            <label>Email</label>
            <input v-model="form.email" type="email" name="email" placeholder="Email Address" required>
            </div>

          <div class="form-field">
            <label>Message</label>
            <textarea v-model="form.message" name="message" rows="3" placeholder="message (optional)"></textarea>
            </div>
          
          <div class="form-field">		
            <label>Budget</label>	
            <textarea v-model="form.budget" name="budget" rows="0" placeholder="budget (optional)"></textarea>
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
const handleSubmit = async () => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'contact-form',
        'name': form.name,
        'email': form.email,
        'message': form.message,
        'budget': form.budget,
      }).toString(),
    });

    if (response.ok) {
      successMessage.value = 'Thank you for your submission';
    } else {
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
	background: var(--background);
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
	background: var(--background);
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
        color: white;
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

    .success-message {
      background: green;
      padding: 5px 15px;
      border-radius: var(--border-radius);
    }

</style>