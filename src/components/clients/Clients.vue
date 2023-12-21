<template>
        <ul class="sites">
            <ClientCards :sites="sites" />
        </ul>
</template>

<script setup >
import ClientCards from '../clients/ClientCards.vue'
import { ref } from 'vue';

const sites = ref ([
    { name: 'Paediatric People', url: 'https://paediatricpeople.com.au/', image: '/images/paediatric-people-cover.JPG'},
    { name: 'The Daisy Clinic', url: '#'},
    { name: 'Grillet Familly Practice', url: '#'},
    { name: 'Eastern Suburbs Psychiatry', url: 'https://www.easternsuburbspsychiatry.com.au/'},
    { name: 'Aspect Eye Surgeons', url: 'https://aspecteye.com.au/'},
    { name: 'Northside Eye Specialists', url: 'https://www.northsideeyespecialists.com/'},
    { name: 'Diamond Creek Medical Centre', url: 'https://dcmc.com.au/'},
    { name: 'Daintree Health', url: 'https://www.daintreehealth.com.au/'},
    { name: 'Drysdale Clinic', url: 'https://www.drysdaleclinic.com.au/'},
    { name: 'Elite Medical Toorak', url: 'https://elitemedicaltoorak.com.au/'},
    { name: 'Lifeline Medical Centre', url: 'https://www.lifelinemedicalcentre.com.au/'},
    { name: 'My Green Doctors', url: 'https://mygreendoctors.com.au/'},
    { name: 'Patricia Clancy Counselling', url: 'https://patriciaclancy.com.au/'},
    { name: 'John Flynn Cardiology', url: 'https://johnflynncardiology.com.au/'},
    { name: 'Hartwood Hub', url: 'https://hartwoodhub.com.au/'},
    { name: 'OnCare Health', url: 'https://oncarehealth.com.au/'},
    { name: 'Dyvest Health Care', url: 'https://www.dyvesthealthcare.com.au/'},
    { name: 'OnCare Health', url: 'https://oncarehealth.com.au/'},
    { name: 'I-Medical Australia', url: 'https://i-medicalaustralia.com/'},
    { name: 'Script2U', url: 'https://script2u.com.au/'},
    { name: 'The Daisy Clinic', url: 'https://thedaisyclinic.com.au/'},
    { name: 'Hampstead Drive Medical Centre', url: 'https://www.hampsteaddrivemc.com.au/'},
])

</script>

<style>
    .sites {
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 30px
    }
</style>