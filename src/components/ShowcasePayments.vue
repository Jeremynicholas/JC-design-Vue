<template>
     <section :id="$route.name" class ="section">
        <div class ="section_container">          
            <div class="section_container_width">
                <div class="section_container_layout">
                        <div class="grid_columns">
                            <div class="columns">
                                <h1>{{ pageTitle }}</h1>
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

const pageTitle = ref('');
const description = ref('');
const route = useRoute();

watch(() => route.name, (newMeta) => {
    pageTitle.value = newMeta.pageTitle
    description.value = newMeta.description
});

onMounted(() => {
  pageTitle.value = route.meta.pageTitle
  description.value = route.meta.description
});

</script>

<style scoped>
    
</style>


