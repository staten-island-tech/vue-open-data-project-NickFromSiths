<template>
  <div v-if="items.length > 0">
    <BubbleGraph :items="items"></BubbleGraph>
  </div>
</template>

<script setup>
import BubbleGraph from '../components/BubbleGraph.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
