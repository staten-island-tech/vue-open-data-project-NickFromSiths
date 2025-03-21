<template>
  <div>
    <Doughnut :data="data" :options="options" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const data = reactive({
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10],
    },
  ],
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
})
</script>

<style scoped></style>
