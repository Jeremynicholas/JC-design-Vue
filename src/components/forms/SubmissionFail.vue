<template>
   <Sections>
      <div>
        <h1>Oops, looks like something went wrong!</h1>
        <li><router-link :to="{path: '/'}">Back home</router-link></li>
      </div>
  </Sections>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  import Sections from '../../components/Sections.vue'

  </script>