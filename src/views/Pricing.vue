<template>
  <ShowcaseSub />
  <Sections>
    <div class ="grid">
		<div class="container">
            <ul class="packages">
              <PricingCards :pricing="pricing" />
            </ul>
        </div>
    </div>
  </Sections>
</template>

<script setup >
  import { ref } from 'vue';

  import Sections from '../components/Sections.vue'
  import ShowcaseSub from '../components/ShowcaseSub.vue'
  import PricingCards from '../components/PricingCards.vue'

    const pricing = ref ([
      { name: 'Basic',
        description: 'Everything you need to create your website',
        price: '$500',
        features: ['5 pages', 'Basic support'],
      },

      { name: 'Standard',
        description: 'Level-up with more power and enhanced features',
        price: '$1500',
        features: ['10 pages', 'Standard support'],
      },

      { name: 'Advance',
        description: 'Enjoy optimized performance & dedicated resources',
        price: '$2500',
        features: [ 'Unlimited pages',
                    'Priority support',
                    'Ecommerce'
                  ],
      },
  ]);

  pricing.value.forEach((tier, index) => {
  if (index > 0) {
    const previousFeatures = pricing.value.slice(0, index).flatMap((t) => t.features);
    tier.features.push(...previousFeatures);
  }
});

</script>

<style scoped>
.packages {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	list-style: none;	
	text-align: center;
	gap: var(--gapLarge);
}
</style>