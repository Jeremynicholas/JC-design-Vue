<template>
        <div class="payment_card">
            <div>
                <h4>{{ pageTitle }}</h4>
            </div>
            <div>
                <div class="payment_card_title">
                    <h2>{{ packagePrice }}</h2>
                    <span v-if="perMonth">per<br>month</span>
                </div>
            </div>
            <div>
                <p style="font-size: var(--fontSizeSmall);">Supported payment methods:</p>
                <div class="payment_methods">
                    <img src="/images/payment-methods/amex.svg">
                    <img src="/images/payment-methods/mastercard.svg">
                    <img src="/images/payment-methods/visa.svg">
                    <img src="/images/payment-methods/google_pay.svg">
                </div>
            </div>
                
            <Buttons :text="`Purchase ${pageTitle}`" :url="buttonUrl" />
        </div>
</template>

<script setup >
    import Buttons from '../components/Button.vue'

    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const pageTitle = ref('');
    const packagePrice = ref('');
    const buttonUrl = ref('');
    const perMonth = ref(false);
    const route = useRoute();

    watch(() => route.name, (newMeta) => {
        pageTitle.value = newMeta.pageTitle
        packagePrice.value = newMeta.packagePrice
        buttonUrl.value = newMeta.buttonUrl
        perMonth.value = newMeta.perMonth || false;

    });

    onMounted(() => {
        pageTitle.value = route.meta.pageTitle
        packagePrice.value = route.meta.packagePrice
        buttonUrl.value = route.meta.buttonUrl
        perMonth.value = route.meta.perMonth || false;

    });
</script>

<style scoped>
    .payment_card {
        display: grid;
        justify-items: center;
        gap: var(--gap);
        max-width: 300px;
        margin: auto;
        padding: var(--paddingLarge);
        background: var(--background-white-dark);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);

        .payment_card_title {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            gap: 5px;
        }

        h2 {
            margin: 0;
        }

        span {
           font-size: var(--fontSizeTiny); 
        }

        .payment_methods {
            display: flex;
            justify-content: center;
            gap: 5px;
        }
    }
</style>