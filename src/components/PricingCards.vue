<template>
    <li class="pricing" v-for="(pricingItem, index) in pricing" :key="index">
        <h3 style="margin-bottom: var(--gapSmall);">{{ pricingItem.name }}</h3>
        <p>{{ pricingItem.description }}</p>
        <h2 class="price">{{ pricingItem.price }}</h2>
        <h3 class="hosting-price">{{ pricingItem.hostingPrice }}</h3>
        <div class="features">
            <p class="features_heading">Top Features</p>
            <ul class="features_list" >
                <li v-for="topFeatures in pricingItem.topFeatures" :key="topFeatures">
                    <component :is="topFeatures.icon" class="icon"></component> {{ topFeatures.text }}
                </li>
            </ul>
            <p class="features_heading" style="margin-top: var(--gapLarge);">Site Features</p>
            <ul class="features_list" >
                <li v-for="siteFeatures in pricingItem.siteFeatures" :key="siteFeatures">
                    <component :is="siteFeatures.icon" class="icon"></component> {{ siteFeatures.text }}
                </li>
            </ul>
            <p class="features_heading" style="margin-top: var(--gapLarge);">Hosting Features</p>
            <ul class="features_list" >
                <li v-for="hostingFeatures in pricingItem.hostingFeatures" :key="hostingFeatures">
                    <component :is="hostingFeatures.icon" class="icon"></component> {{ hostingFeatures.text }}
                </li>
            </ul>
        </div>
        <p style="font-size: var(--fontSizeSmall); text-align: left;">*monthly fee for hosting and support. If self hosted then this can be adjusted.</p>
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
    background: var(--background-light);
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
    font-size: var(--fontSizeSmall);
    font-weight: var(--font400);
    padding-inline: var(--columnPaddingInline);
    border-radius: var(--border-radius-buttons);
}

@media (min-width: 767px){
.pricing:hover {
  box-shadow: var(--box-shadow);
  scale: 1.01;
}
}

.pricing {
    & h2 {
        margin: 20px 0 0 0;
    }

    & p, li {
        font-size: var(--fontSizeSmall);
        line-height: 1;
    }

    & li {
        text-align: left;
    }

    & .price::before {
        content: 'from ';
        font-size: var(--fontSizeSmall);
        font-weight: var(--font300);
    }

    & .hosting-price {
        color: var(--accentBlue);
    }

    & .hosting-price::after {
        content: ' /mo* ';
        font-size: var(--fontSizeSmall);
        font-weight: var(--font300);
    }
}

.features {
    margin-block: var(--gapLarge);
}

.features_heading {
    font-weight: var(--font600);
    margin-bottom: var(--gapSmall);
    text-align: left;
}

.features_list li {
    display: flex;
    list-style: none;
    align-items: center;

    & .icon {
        height: 20px;
        width: 20px;
    }
}

</style>