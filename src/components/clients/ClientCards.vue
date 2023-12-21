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
        border-radius: 5px;
        border: 2px solid var(--accent-blue);
        transition: var(--timingAll);
        text-align: center;

        a {
            text-decoration: none;
        }

        & .background {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;;
            height: 130px;
        }

        & .name {
            padding: 30px 30px 5px 30px;
        }
    }

    .site:hover {
        box-shadow: var(--box-shadow);
        transform: scale(1.01);
    }

</style>