<template>
  <div>
    <Bubble :data="chartData" :options="options" class="positioning" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Bubble } from 'vue-chartjs'
import { Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale } from 'chart.js'

ChartJS.register(Tooltip, Legend, PointElement, LinearScale)

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

const chartData = reactive({
  labels: dateData,
  datasets: [
    {
      label: 'Total Individuals',
      backgroundColor: '#6cadf4',
      data: [],
    },
    {
      label: 'Men',
      backgroundColor: '#59a570',
      data: [],
    },
    {
      label: 'Women',
      backgroundColor: '#956c85',
      data: [],
    },
  ],
})

let tnumber = null
for (let i = 0; i < dateData.length; i++) {
  if ((tiisData[i] - 83000) / 370 > 1) {
    tnumber = (tiisData[i] - 83000) / 1000
  } else {
    tnumber = 1
  }
  const d = { x: '', y: '', r: '' }
  d.x = (new Date(dateData[i]) - 1702944000000) / 86400000
  d.y = tiisData[i]
  d.r = tnumber
  chartData.datasets[0].data.push(d)
}

let mnumber = null
for (let i = 0; i < dateData.length; i++) {
  if ((smisData[i] - 15000) / 250 > 1) {
    mnumber = (smisData[i] - 15000) / 250
  } else {
    mnumber = 1
  }
  const e = { x: '', y: '', r: '' }
  e.x = (new Date(dateData[i]) - 1702944000000) / 86400000
  e.y = smisData[i]
  e.r = mnumber
  chartData.datasets[1].data.push(e)
}

let wnumber = null
for (let i = 0; i < dateData.length; i++) {
  if ((swisData[i] - 5000) / 100 > 1) {
    wnumber = (swisData[i] - 5000) / 100
  } else {
    wnumber = 1
  }
  const f = { x: '', y: '', r: '' }
  f.x = (new Date(dateData[i]) - 1702944000000) / 86400000
  f.y = swisData[i]
  f.r = wnumber
  chartData.datasets[2].data.push(f)
}

const options = ref({
  responsive: true,
  maintainAspectRatio: true,
})
</script>

<style scoped>
.positioning {
  padding-top: 1rem;
  padding-bottom: 3rem;
}
</style>
