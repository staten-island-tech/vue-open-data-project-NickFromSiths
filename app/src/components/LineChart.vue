<template>
  <div>
    <Line :data="chartData" :options="chartOptions" class="positioning" />
    <!-- <button @click="console.log(props.items)">array</button> -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue' // Import the ref function

const dateData = []
const tiisData = []
const taisData = []
const tcisData = []
const smisData = []
const swisData = []
const tsaisData = []
const fwcData = []
const aifwcData = []
const cifwcData = []
const tiifwcData = []
const afisData = []
const iiafData = []

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

props.items.forEach((element) => {
  dateData.push(element.date_of_census.slice(0, 10))
  tiisData.push(element.total_individuals_in_shelter)
  taisData.push(element.total_adults_in_shelter)
  tcisData.push(element.total_children_in_shelter)
  smisData.push(element.single_adult_men_in_shelter)
  swisData.push(element.single_adult_women_in_shelter)
  tsaisData.push(element.total_single_adults_in_shelter)
  fwcData.push(element.families_with_children_in_shelter)
  aifwcData.push(element.adults_in_families_with_children_in_shelter)
  cifwcData.push(element.children_in_families_with_children_in_shelter)
  tiifwcData.push(element.total_individuals_in_families_with_children_in_shelter_)
  afisData.push(element.adult_families_in_shelter)
  iiafData.push(element.individuals_in_adult_families_in_shelter)
})

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

const chartData = reactive({
  labels: dateData.reverse(),
  datasets: [
    {
      label: 'Total Individuals',
      data: tiisData.reverse(),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
    {
      label: 'Total Adults',
      data: taisData.reverse(),
      borderColor: 'rgba(75, 192, 0, 1)',
      backgroundColor: 'rgba(75, 192, 0, 0.2)',
      fill: true,
    },
    {
      label: 'Single Men',
      data: smisData.reverse(),
      borderColor: 'rgba(175, 29, 250, 1)',
      backgroundColor: 'rgba(175, 29, 250, 0.2)',
      fill: true,
    },
    {
      label: 'Single Women',
      data: swisData.reverse(),
      borderColor: 'rgba(175, 192, 70, 1)',
      backgroundColor: 'rgba(175, 192, 70, 0.2)',
      fill: true,
    },
    {
      label: 'Total Children',
      data: tcisData.reverse(),
      borderColor: 'rgba(175, 100, 0, 1)',
      backgroundColor: 'rgba(175, 100, 0, 0.2)',
      fill: true,
    },
    {
      label: 'Total Single Adults',
      data: tsaisData.reverse(),
      borderColor: 'rgba(175, 192, 0, 1)',
      backgroundColor: 'rgba(175, 192, 0, 0.2)',
      fill: true,
    },
    {
      label: 'Families with Children',
      data: fwcData.reverse(),
      borderColor: 'rgba(75, 100, 0, 1)',
      backgroundColor: 'rgba(75, 100, 0, 0.2)',
      fill: true,
    },
    {
      label: 'Adults (in families with children)',
      data: aifwcData.reverse(),
      borderColor: 'rgba(255, 192, 0, 1)',
      backgroundColor: 'rgba(255, 192, 0, 0.2)',
      fill: true,
    },
    // {
    //   label: 'Children (in families)',
    //   data: cifwcData.reverse(),
    //   borderColor: 'rgba(75, 192, 0, 1)',
    //   backgroundColor: 'rgba(75, 192, 0, 0.2)',
    //   fill: true,
    // },
    {
      label: 'Total Individuals (in families with children)',
      data: tiifwcData.reverse(),
      borderColor: 'rgba(180, 80, 107, 1)',
      backgroundColor: 'rgba(180, 80, 107, 0.2)',
      fill: true,
    },
    {
      label: 'Adult Families',
      data: afisData.reverse(),
      borderColor: 'rgba(168, 176, 198, 1)',
      backgroundColor: 'rgba(168, 176, 198, 0.2)',
      fill: true,
    },
    {
      label: 'Individuals (in adult families)',
      data: iiafData.reverse(),
      borderColor: 'rgba(103, 207, 246, 1)',
      backgroundColor: 'rgba(103, 207, 246, 0.2)',
      fill: true,
    },
  ],
})

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
.positioning {
  padding-top: 1rem;
  padding-bottom: 3rem;
}
</style>
