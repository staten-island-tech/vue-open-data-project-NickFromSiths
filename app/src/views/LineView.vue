<template>
  <div v-if="items.length > 0">
    <LineChart :items="items"></LineChart>
  </div>
</template>

<script setup>
import LineChart from '../components/LineChart.vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
console.log('rendered')
</script>

<style scoped></style>
