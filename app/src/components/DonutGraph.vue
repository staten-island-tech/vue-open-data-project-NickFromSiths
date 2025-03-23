<template>
  <div v-if="aray.length > 0" class="container">
    <Doughnut :data="data" :options="options" />
    <button @click="console.log('')">work?</button>
    <form @submit.prevent="submitted()">
      <input v-model="variable" type="number" min="0" placeholder="Type index number here" />
      <button type="submit">Submit</button>
    </form>
    <h1>{{ link }}</h1>
    <h3>{{ variable }}</h3>
    <h6>{{ dateData }}</h6>
    <h6>{{ tiisData }}</h6>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
let variable = ref(0)

let aray = ref('')

let link = 'https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=1&$offset=0'
let previouslink = ''
async function s() {
  let a = await fetch(link)
  let b = await a.json()
  // console.log(b.length, 'b length')
  if (b.length === 0) {
    link = previouslink
    a = await fetch(link)
    b = await a.json()
    aray.value = b
    logic()
    console.log('Error, does not exist. Showing result for the last working entry.')
  } else {
    console.log('Valid entry.')
    aray.value = b
    logic()
  }
}

onMounted(() => {
  s()
})

function submitted() {
  previouslink = link
  link = `https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=1&$offset=${variable.value}`
  s()
  // console.log(link, previouslink)
}

let dateData = ref('')
let tiisData = ref(null)
let taisData = ref(null)
let tcisData = ref(null)
let smisData = ref(null)
let swisData = ref(null)
let tsaisData = ref(null)
let fwcData = ref(null)
let aifwcData = ref(null)
let cifwcData = ref(null)
let tiifwcData = ref(null)
let afisData = ref(null)
let iiafData = ref(null)
function logic() {
  // console.log(aray.value[0], 'CHECKPOINT')
  if (aray.value.length > 0) {
    let element = aray.value[0]
    // console.log(element)
    dateData.value = element.date_of_census.slice(0, 10)
    tiisData.value = element.total_individuals_in_shelter
    taisData.value = element.total_adults_in_shelter
    tcisData.value = element.total_children_in_shelter
    smisData.value = element.single_adult_men_in_shelter
    swisData.value = element.single_adult_women_in_shelter
    tsaisData.value = element.total_single_adults_in_shelter
    fwcData.value = element.families_with_children_in_shelter
    aifwcData.value = element.adults_in_families_with_children_in_shelter
    cifwcData.value = element.children_in_families_with_children_in_shelter
    tiifwcData.value = element.total_individuals_in_families_with_children_in_shelter_
    afisData.value = element.adult_families_in_shelter
    iiafData.value = element.individuals_in_adult_families_in_shelter
  }
}

import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

const data = reactive({
  labels: ['Total', 'Men', 'Women', 'Children', 'Adult families'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#F2D116'],
      data: [tiisData, smisData, swisData, tcisData, afisData],
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
