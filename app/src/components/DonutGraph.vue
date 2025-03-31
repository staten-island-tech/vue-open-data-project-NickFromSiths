<template>
  <div class="e">
    <Transition>
      <h3 class="e1" v-if="show">Value is too large, try search a smaller value</h3>
    </Transition>
  </div>
  <div v-if="aray.length > 0" class="container">
    <div class="fifty">
      <Doughnut :data="data" :options="options" :key="key" />
    </div>
    <!-- <button @click="console.log('')">work?</button> -->
    <div class="fiftypercent">
      <form @submit.prevent="submitted()">
        <input v-model="variable" type="number" min="0" placeholder="Type index number here" />
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="right">
      <h1 style="font-weight: 500">Data</h1>
      <h3>Showing results for: {{ dateData }}</h3>
      <h3>Total Individuals: {{ tiisData }}</h3>
      <h3>Men: {{ smisData }}</h3>
      <h3>Women: {{ swisData }}</h3>
      <h3>Children: {{ tcisData }}</h3>
      <h3>Adult Families: {{ afisData }}</h3>
    </div>
  </div>
</template>

<style scoped>
/* https://huemint.com/gradient-10/#palette=becace-a5abaf-f4fdff-d2dbe2-a5dae1-009a9a-4b9ea1-4c8e9c-f9728f-a1214e */
/* https://huemint.com/gradient-10/#palette=becace-a5abaf-fff7f6-cde4e4-a5dae1-009a9a-4b9ea1-4c8e9c-22515e-273951 */
/* https://huemint.com/gradient-10/#palette=becace-a5abaf-aca6b5-b3958a-f09dcf-b8a5bd-a18cac-996f88-6e3e67-230e38 */

.container {
  height: 55vh;
  width: 90%;
  display: flex;
  align-items: center;
  background-color: #d2dbe2;
  border-radius: 7px;

  margin: 10vh 5% 0vh 5%;
}
/* .margin {
  margin: 0rem 5rem 0rem 5rem;
  width: 50%;
} */
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 5rem;
  align-items: center;
}
input {
  margin-bottom: 7px;
  padding: 0.2rem 1rem 0.2rem 1rem;
  border: 3px solid transparent;
  border-radius: 7px;
  background-color: #f4fdff;
  outline: none;
  color: #959697;
  transition: border-color 0.3s ease;
}
input:focus {
  border: 3px solid rgba(190, 202, 206, 0.7);
  background-color: #ececec;
  transition: 0.1s;
}
input:active {
  border: 3px solid rgba(190, 202, 206, 0.7);
}
input::placeholder {
  color: #c4c9cb;
}
button {
  padding: 0.2rem 1rem 0.2rem 1rem;
  border: 3px solid transparent;
  border-radius: 7px;
  transition: border 0.3s ease;
  background-color: #f4fdff;
  color: #959697;
}

button:hover {
  border: 3px solid rgba(190, 202, 206, 0.7);
}
button:active {
  background-color: #ececec;
  transition: 0.1s;
}
.height {
  height: 100%;
}
.right {
  height: 60%;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.fifty {
  width: 50%;
  padding: 5rem;
}
.fiftypercent {
  width: 50%;
}
.e {
  position: absolute;
  width: 100%;
  height: 3rem;
  top: 4%;
  left: 0%;
  padding: 0rem 15rem 0rem 15rem;
}
.e1 {
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #ff0061;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 550;
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-90px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-90px);
}
</style>

<script setup>
import { ref, reactive, onMounted } from 'vue'
let variable = ref('')
let key = 0
let aray = ref('')

let link = 'https://data.cityofnewyork.us/resource/k46n-sa2m.json?$limit=1&$offset=0'
let previouslink = ''
let show = ref(false)
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
    show.value = true
    setTimeout(() => {
      show.value = false
    }, 2000)
  } else {
    console.log('Valid entry.')
    aray.value = b
    logic()
    key++
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
  borderColor: 'rgba(0, 0, 0, 0.1)',
  animation: { initial: false },
})
</script>
