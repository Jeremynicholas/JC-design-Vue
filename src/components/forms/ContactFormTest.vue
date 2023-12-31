<template>
<form class ="contact-form" name="contact-form" method="post" 
							data-netlify="true"
							data-netlify-honeypot="bot-field">
						<div class="form-field">
							<label>Name</label>
							<input type="text" name="Name" placeholder="Name" required>
							</div>
						<div class="form-field">
							<label>Email</label>
							<input type="email" name="email" placeholder="Email Address" required>
							</div>

						<div class="form-field">
							<label>Message</label>
							<textarea name="message" rows="3" placeholder="Message (optional)"></textarea>
							</div>
						
						<div class="form-field">		
							<label>Budget</label>	
							<textarea name="budget" rows="0" placeholder="Budget (optional)"></textarea>
							</div>
						<div class="form-submit">	
							<button class="contact-button" type="submit" name="submit" >Enquire Now</button>
							</div>
					</form>	
</template>

<script setup>
</script>

