<template>
  <ul class="sites grid_3_columns">
    <ClientCards :sites="sites" />
  </ul>
</template>

<script setup>
import ClientCards from "../clients/ClientCards.vue";
import { ref } from "vue";

const sites = ref([
  {
    name: "African Wildlife Safaris",
    url: "https://africanwildlifesafaris.com/",
    image: "/images/websites/africanwildlifesafaris-cover.png",
  },
  {
    name: "Natural Focus",
    url: "https://naturalfocusaustralia.com.au/",
    image: "/images/websites/naturalfocusaustralia-cover.jpg",
  },
  {
    name: "Paediatric People",
    url: "https://paediatricpeople.com.au/",
    image: "/images/websites/paediatricpeople-cover.jpg",
  },
  { 
    name: "The Daisy Clinic",
    url: "https://thedaisyclinic.com.au/",
    image: "/images/websites/thedaisyclinic-cover.jpg",

  },
  { 
    name: "Grillet Familly Practice",
    url: "https://grillettfamilypractice.com.au/",
    image: "/images/websites/grilletfamilypractice-cover.jpg",

  },
  {
    name: "Eastern Suburbs Psychiatry",
    url: "https://www.easternsuburbspsychiatry.com.au/",
    image: "/images/websites/easternsuburbspsychiatry-cover.jpg",
  },
  {
    name: "Aspect Eye Surgeons",
    url: "https://aspecteye.com.au/",
    image: "/images/websites/aspecteye-cover.jpg",
  },
  {
    name: "Northside Eye Specialists",
    url: "https://www.northsideeyespecialists.com/",
    image: "/images/websites/northsideeyespecialists-cover.jpg",

  },
  { 
    name: "Diamond Creek Medical Centre",
    url: "https://dcmc.com.au/",
    image: "/images/websites/diamondcreekmedicalcentre-cover.jpg",
  },
  { 
    name: "Daintree Health",
    url: "https://www.daintreehealth.com.au/",
    image: "/images/websites/daintreehealth-cover.jpg",
  },
  { 
    name: "Drysdale Clinic",
    url: "https://www.drysdaleclinic.com.au/",
    image: "/images/websites/drysdaleclinic-cover.jpg",

  },
  { 
    name: "Elite Medical Toorak",
    url: "https://elitemedicaltoorak.com.au/",
    image: "/images/websites/elitemedicaltoorak-cover.jpg",
  },
  {
    name: "Lifeline Medical Centre",
    url: "https://www.lifelinemedicalcentre.com.au/",
    image: "/images/websites/lifelinemedicalcentre-cover.jpg",
  },
  { name: "My Green Doctors",
    url: "https://mygreendoctors.com.au/",
    image: "/images/websites/mygreendoctors-cover.jpg",
  },
  {
    name: "Patricia Clancy Counselling",
    url: "https://patriciaclancy.com.au/",
    image: "/images/websites/patriciaclancy-cover.jpg",
  },
  { 
    name: "John Flynn Cardiology",
    url: "https://johnflynncardiology.com.au/",
    image: "/images/websites/johnflynncardiology-cover.jpg",
  },
  { 
    name: "Hartwood Hub",
    url: "https://hartwoodhub.com.au/",
    image: "/images/websites/hartwoodhub-cover.jpg",
  },
  { 
    name: "Dyvest Health Care",
    url: "https://www.dyvesthealthcare.com.au/",
    image: "/images/websites/dyvesthealthcare-cover.jpg",
},
  { 
    name: "OnCare Health",
    url: "https://oncarehealth.com.au/",
    image: "/images/websites/oncarehealth-cover.jpg",
  },
  { 
    name: "I-Medical Australia",
    url: "https://i-medicalaustralia.com/",
    image: "/images/websites/imedicalaustralia-cover.jpg",
  },
  { 
    name: "Script2U",
    url: "https://script2u.com.au/",
    image: "/images/websites/script2u-cover.jpg",
},
  {
    name: "Hampstead Drive Medical Centre",
    url: "https://www.hampsteaddrivemc.com.au/",
    image: "/images/websites/hampsteaddrivemedicalcentre-cover.jpg",
  },
]);
</script>

<style></style>
