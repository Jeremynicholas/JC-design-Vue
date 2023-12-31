<template>
  <form class="contact_form"
      name="contact-form-test"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify>
      <input type="hidden" name="contact-form-test" value="contact" />
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</template>

<script setup>
</script>

