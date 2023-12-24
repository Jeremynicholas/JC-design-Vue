<template>
    <section class ="section">
        <gridLines />
        <div class ="section_container">
            <div class="section_container_width">
                <slot />
            </div>
        </div>
    </section>
</template>

<script setup>
 import gridLines from '../components/gridLines.vue'
</script>