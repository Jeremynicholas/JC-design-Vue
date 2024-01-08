<template>
  <ShowcaseSub />
  <Sections id="to_next" style="z-index: 2">
    <div class ="grid">
      <div style="text-align: center; margin-bottom: var(--gapLarge);">
          <h2>Choose the right package for you.</h2>
          <p>Everything you need to to create your website and online presence. Custom pricing options available for taking on the management of your existing website.</p>
      </div>
      <div class="container">
          <ul class="packages">
              <PricingCards :pricing="pricing" />
          </ul>
      </div>
      <div style="text-align: center; margin-bottom: var(--gapLarge);">
        <Button text="Get in touch" @click="openContactForm"/>
        <div v-if="showContactForm" class="contact-form-container">
          <div class="contact-form-popup">
            <i class="fas fa-times" @click="closeContactForm"></i>
            <h3>Get in touch</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </Sections>
</template>

<script setup >
  import { ref, markRaw } from 'vue';

  import Sections from '../components/Sections.vue'
  import ShowcaseSub from '../components/ShowcaseSub.vue'
  import PricingCards from '../components/PricingCards.vue'
  import Button from '../components/Button.vue'
  import ContactForm from '../components/forms/ContactForm.vue'
  import Tick from '../components/icons/Tick.vue'
  import TickYellow from '../components/icons/TickYellow.vue'
  import Cross from '../components/icons/Cross.vue'
  

    const pricing = ref ([
      { name: 'Basic',
        description: 'Everything you need to begin your online presence',
        price: '$800',
        hostingPrice: '+$30',
        topFeatures: [
          { icon: markRaw(TickYellow), text: '5 pages' },
          { icon: markRaw(TickYellow), text: 'Basic support'},
          { icon: markRaw(Tick), text: 'Mobile Responcive'},
          { icon: markRaw(Cross), text: 'No eCommerce'},
          { icon: markRaw(Tick), text: '1 Form'},
          { icon: markRaw(TickYellow), text: 'Basic Menu'},
        ],
        siteFeatures: [
          { icon: markRaw(Tick), text: 'SSL security certificates'},
          { icon: markRaw(Tick), text: 'SEO Ready'},
        ],
        hostingFeatures: [
          { icon: markRaw(Tick), text: 'Standard Performance'},
          { icon: markRaw(Tick), text: 'Theme & Plugin updates'},
          { icon: markRaw(Cross), text: 'No free changes'},
          { icon: markRaw(Tick), text: 'Additional changes charged at $150/ph'},
        ],
      },



      { name: 'Standard',
        description: 'Level-up with more power and enhanced features',
        price: '$1850',
        hostingPrice: '+$40',
        topFeatures: [
          { icon: markRaw(Tick), text: '10 pages' },
          { icon: markRaw(Tick), text: 'Standard support'},
          { icon: markRaw(Tick), text: 'Mobile Responcive'},
          { icon: markRaw(Tick), text: 'Basic eCommerce'},
          { icon: markRaw(Tick), text: '3 Forms'},
          { icon: markRaw(Tick), text: 'Standard Menu'},
        ],
        siteFeatures: [
          { icon: markRaw(Tick), text: 'SSL security certificates'},
          { icon: markRaw(Tick), text: 'SEO Ready'},
        ],
        hostingFeatures: [
          { icon: markRaw(Tick), text: 'Increased Performance'},
          { icon: markRaw(Tick), text: 'Theme & Plugin updates'},
          { icon: markRaw(Tick), text: '1 hour free changes /mo'},
          { icon: markRaw(Tick), text: 'Additional changes charged at $150/ph'},
        ],
      },



      { name: 'Advance',
        description: 'Enjoy optimized performance & dedicated resources',
        price: '$2850',
        hostingPrice: '+$50',
        topFeatures: [
          { icon: markRaw(Tick), text: '20+ pages' },
          { icon: markRaw(Tick), text: 'Standard support'},
          { icon: markRaw(Tick), text: 'Mobile Responcive'},
          { icon: markRaw(Tick), text: 'Advanced eCommerce'},
          { icon: markRaw(Tick), text: 'Custom Forms'},
          { icon: markRaw(Tick), text: 'Custom Menu'},
        ],
        siteFeatures: [
          { icon: markRaw(Tick), text: 'SSL security certificates'},
          { icon: markRaw(Tick), text: 'SEO Ready'},
        ],
        hostingFeatures: [
          { icon: markRaw(Tick), text: 'Maximum Performance'},
          { icon: markRaw(Tick), text: 'Theme & Plugin updates'},
          { icon: markRaw(Tick), text: '1 hour free changes /mo'},
          { icon: markRaw(Tick), text: 'Additional changes charged at $150/ph'},
        ],
      },
  ]);

  const showContactForm = ref(false);

  const openContactForm = () => {
    showContactForm.value = true;
    document.body.style.overflow = 'hidden';
  };

  const closeContactForm = () => {
    showContactForm.value = false;
    document.body.style.overflow = '';

  };

</script>

<style scoped>
.contact-form-container {
  position: fixed;
  top: auto;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: calc(100% - (var(--columnPaddingNormal) *2));
  padding-inline: var(--columnPaddingNormal);
  margin: auto;
  background: rgba(0,0,0,0.3);
  transition: var(--timingAll);
}
.contact-form-popup {
  position: relative;
  background: var(--background-light);
  padding: var(--columnPaddingNormal);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-large);
  transform: translateY(25%);
  max-width: 600px;
  margin: auto;
}

.contact-form-popup i {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.packages {
	display: grid;
	grid-template-columns: repeat(3, auto);
	list-style: none;	
	text-align: center;
	gap: var(--gapLarge);
}


@media (max-width: 1024px){
  .contact-form-container {
    height: 100%;
  }
}

@media (max-width: 767px){
  .packages {
    grid-template-columns: auto;
  }
}
</style>