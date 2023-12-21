<template>
    <section class ="section">
        <div class ="section_container">
            <div class="section_container_width">
                <div class="flex-container">
                    <div class="home-container">
                        <h1>{{ pageTitle }}</h1>
                    </div>	
                </div>
            </div>
        </div>
    </section>  
</template>

<script setup >
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const pageTitle = ref('');
const route = useRoute();

watch(() => route.name, (newName) => {
    pageTitle.value = newName
});

onMounted(() => {
  pageTitle.value = route.meta.pageTitle
});

</script>

<style scoped>
    .home-container {
        width: 600px;
    }
    
</style>


