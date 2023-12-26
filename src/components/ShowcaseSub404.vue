<template>
    <section class ="section">
       <div class ="section_container">
           <div class="showcase_gradient">                
           <div class="section_container_width">
               <div class="section_container_layout">
                   <div class="flex-row">
                       <div class="home-container">
                           <h1>{{ pageTitle }}</h1>
                           <p>{{ description }}</p>
                           <Button text="Go back" url="/"/>
                       </div>	
                   </div>
               </div>
           </div>
       </div>
       </div>
   </section>
       
</template>

<script setup >
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Button from '../components/Button.vue';

const pageTitle = ref('');
const description = ref('');
const route = useRoute();

watch(() => route.name, (newName, newDescription) => {
   pageTitle.value = newName
   description.value = newDescription
});

onMounted(() => {
 pageTitle.value = route.meta.pageTitle
 description.value = route.meta.description
});

</script>

<style scoped>
body.dark .showcase_gradient {
   --gradientColorOne: #482964;
   --gradientColorTwo: #414f93;
}

.showcase_gradient {
       --gradientColorOne: #844eb4;
       --gradientColorTwo: #6c80e6;
       
       position: relative;
       top: 0;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 300px;
       transform-origin: -60px 100%;
       overflow: clip;
       z-index: -1;
       border: none;   
   }

   .canvas {
       position: relative;
       display: block;
       width: inherit;
       height: 100%;
   }
   .showcase_gradient::after {
       content: "";
       z-index: -1;
       position: absolute;
       top: 0;
       left: 50%;
       transform: translateX(-50%);
       min-width: 1000px;
       width: 100%;
       height: 100%;
       background: -webkit-linear-gradient(90deg, var(--gradientColorOne) 3%, var(--gradientColorTwo) 38%);
       background: linear-gradient(-130deg, var(--gradientColorOne) 0%, var(--gradientColorTwo) 100%);
       background-size: cover;
       background-attachment: fixed;
   }
   .home-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--gap);
        width: 600px;
   }

   .home-container h1 {
    mix-blend-mode: soft-light;
   }
   
</style>


