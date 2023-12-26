<template>
  <Sections>
    <div>
      <h1>You're Awesome! Thank you for your submission!</h1>
      <li><router-link :to="{path: '/'}">Back home</router-link></li>
    </div>
  </sections>
  </template>

  <script setup>
  import { RouterLink } from 'vue-router';
  import Sections from '../../components/Sections.vue'
  </script>