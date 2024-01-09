<template>
     <section :id="$route.name" class ="section">
        <div class ="section_container">          
            <div class="section_container_width">
                <div class="section_container_layout">
                    <AnchorLine :AnchorText="anchorText" />
                        <div class="grid_2_columns">
                            <div class="columns">
                                <h1>{{ pageTitle }}</h1>
                                <p v-html="$route.meta.description" class="description"></p>
                                <!-- <Button text="Learn more" url="#to_next" /> -->
                            </div>
                    
                            <div class="columns flip-mob" v-if="$route.meta.imgSrc">			
                                <img :src="$route.meta.imgSrc" :alt="$route.meta.pageTitle"/>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
    </section>
</template>

<script setup >
import AnchorLine from '../components/AnchorLine.vue'
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const pageTitle = ref('');
const description = ref('');
const route = useRoute();

const anchorText = computed(() => {
    return route.name.charAt(0).toUpperCase() + route.name.slice(1);
})

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
    @media (max-width: 767px) {
    .columns.flip-mob img {
        max-width: 40%;
    }
}

/* body.dark .showcase_gradient {
    --gradientColorOne: #4a6028;
    --gradientColorTwo: #2c6175;
}

.showcase_gradient {
        --gradientColorOne: #8bb44e;
        --gradientColorTwo: #90e0ff;
        
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
        width: 600px;
    }

    .home-container h1 {
    mix-blend-mode: soft-light;
   } */
    
</style>


