<template>
  <div v-if="aray.length > 0" class="container">
    <Doughnut :data="data" :options="options" />
    <button @click="console.log(aray)">work?</button>
    <form @submit.prevent="submitted">
      <input v-model="variable" type="number" min="0" placeholder="Type index number here" />
      <button type="submit">Submit</button>
    </form>
    <h1>{{ link }}</h1>
    <h3>{{ variable }}</h3>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
let variable = ref(0)

let aray = ref('')

let link = 'https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=1&$offset=0'
async function s() {
  let a = await fetch(link)
  let b = await a.json()
  aray.value = b
}
onMounted(() => {
  s()
})

function submitted() {
  link = `https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=1&$offset=${variable.value}`
  s()
}

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

if (aray.length > 0) {
  aray.forEach((element) => {
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
}

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
  maintainAspectRatio: true,
})
</script>

<style scoped>
.container {
  height: 75vh;
  width: 50%;
}
</style>
