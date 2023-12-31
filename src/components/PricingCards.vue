<template>
    <li class="pricing" v-for="(pricing, index) in pricing" :key="index">
        <h3>{{ pricing.name }}</h3>
        <p>{{ pricing.description }}</p>
        <h2 class="price">{{ pricing.price }}</h2>
        <p style="font-weight: var(--font600);">Top Features</p>
        <ul class="features">
            <li v-for="feature in pricing.features" :key="feature">{{ feature }}</li>
        </ul>
    </li>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps ({
    pricing: {
        type: Array,
        required: true,
    }
})
</script>

<style scoped>
.pricing {
    position: relative;
    background: var(--background);
	border: 1px solid var(--border-color);
	border-radius: 5px;
    padding: var(--columnPaddingNormal);
    transition: var(--timingAll);
}

.pricing:nth-child(2) {
	border: 2px solid var(--accentBlue);
	border-radius: 5px;
	padding: 30px;
}

.pricing:nth-child(2)::before {
    content: 'Recommended';
    position: absolute;
    transform: translate(-50%, -45px);
    background: var(--background-light-blue);
    color: var(--accentBlue);
    padding-inline: var(--columnPaddingInline);
    border-radius: var(--border-radius-buttons);
}

.pricing:hover {
  box-shadow: var(--box-shadow);
  scale: 1.01;
}

.pricing {
    & p, li {
        font-size: var(--fontSizeSmall);
    }
}
</style>