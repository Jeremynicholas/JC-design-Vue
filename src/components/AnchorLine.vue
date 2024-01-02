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
    margin-bottom: var(--gapLarge);
  }

  .anchor-line span {
    content: '';
    display: flex;
    border-left: 1.5px solid #000;
    width: 1px;
    margin-right: 10px;
    border-color: var(--accentBlue);
    height: 20px;
    margin-left: -16px;
  }

  @media (max-width: 1024px) {
    .anchor-line span {
      margin-left: -16px;
    }
  }

</style>