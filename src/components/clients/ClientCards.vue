<template>
        <li class="site" v-for="(site, index) in sites" :key="index">
        <a :href="site.url" target="_blank">
            <div class="background" :style="{ backgroundImage: `url(${site.image})`}" :alt="site.name">
            </div>
            <div class="name">{{ site.name }}
            </div>
        </a>
        </li>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps ({
        sites: {
            type: Array,
            required: true,
        }
    })
</script>

<style scoped>
    .site {
        display: flex;
        flex-direction: column;
        text-align: center;
        
        a {
            text-decoration: none;
        }

        & .background {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top center;;
            height: 330px;
            border-radius: 5px;       
            box-shadow: var(--box-shadow-light);
            transition: var(--timingAll);
        }

        & .name {
            margin-top: 15px;
        }
    }

    .background:hover {
        box-shadow: var(--box-shadow);
        transform: scale(1.01);
    }

</style>