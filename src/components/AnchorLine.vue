<template>
    <div class="anchor-line">
        <span></span>
        <h4>{{ AnchorText }}</h4>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps(['AnchorText']);
</script>

<style>
  .anchor-line {
    display: flex;
	  align-items: center;
  }

  .anchor-line span {
    content: '';
    display: flex;
    border-bottom: 1.5px solid #000;
    width: 20px;
    margin-right: 10px;
    border-color: var(--accentBlue);
  }

</style>