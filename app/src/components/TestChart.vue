<template>
  <div>
    <Line :data="chartData" :options="chartOptions" />
    <button @click="console.log(props.date)">{{ array }}</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue' // Import the ref function
import { Line } from 'vue-chartjs' // Import the Line chart component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
// Register required components of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, // Register PointElement
  Title,
  Tooltip,
  Legend,
)

// const props = defineProps({
//   array: Object,
//   date: String,
//   a_families: String,
//   a_c_families: String,
//   c_families: String,
//   families_c: String,
//   i_in_families: String,
//   s_m_adult: String,
//   s_f_adult: String,
//   total_a: String,
//   total_c: String,
//   total_i: String,
//   total_s_a: String,
// })
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
console.log(props.items)

// if (Array.isArray(props.items)) {
//   console.log('items is an array')
// } else {
//   console.log('items is not an array')
// }

// let dates = []
// props.items.forEach((e) => dates.push(e.date_of_census))
// console.log(dates)
// Chart data and options are defined as reactive variables
const chartData = reactive({
  labels: 'e',
  datasets: [
    {
      label: 'Data',
      data: props.array,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
})
console.log(props.date)
const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
})
</script>

<style scoped>
/* Style your chart container if necessary */
</style>
