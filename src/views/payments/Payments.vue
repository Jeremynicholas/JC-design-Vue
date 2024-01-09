<template>
    <ShowcasePayments />
    <Sections id="to_next">
        <ul class="payment-links">
            <RouterLink :to="{ path: '/website-basic' }">
                <img src="/images/rocket-icon.png">Website Basic
            </RouterLink>
            <RouterLink :to="{ path: '/website-standard' }">
                <img src="/images/rocket-icon.png">Website Standard
            </RouterLink>
            <RouterLink :to="{ path: '/website-advance' }">
                <img src="/images/rocket-icon.png">Website Advance
            </RouterLink>
            
            <RouterLink :to="{ path: '/web-hosting-basic' }">
                <img src="/images/hosting-icon.png">Web Hosting Basic
            </RouterLink>
            <RouterLink :to="{ path: '/web-hosting-standard' }">
                <img src="/images/hosting-icon.png">Web Hosting Standard
            </RouterLink>
            <RouterLink :to="{ path: '/web-hosting-advance' }">
                <img src="/images/hosting-icon.png">Web Hosting Advance
            </RouterLink>
        </ul>
        
    </Sections>
</template>

<script setup >
    import Sections from '../../components/Sections.vue'
    import ShowcasePayments from '../../components/ShowcasePayments.vue'

</script>


<style scoped>
    .payment-links {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: var(--gapLarge)
    }

    .payment-links a {
        display: grid;
        justify-content: center;
        gap: var(--gap);
        list-style: none;
        text-align: center;
        background: var(--background-white-dark);
        padding: var(--paddingLarge);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        transition: var(--timingAll);

        img {
            max-width: 60px;
            margin: auto;
        }
    }

    .payment-links a:hover {
        scale: 1.01;
    }
</style>
