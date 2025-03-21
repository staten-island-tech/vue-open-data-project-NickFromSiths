<template>
  <div><button @click="e()">IUGHOIWYRGWRHG</button></div>
  <Bubble :data="chartData" :options="options" />
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
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [
        {
          x: 20,
          y: 25,
          r: 5,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
        {
          x: 30,
          y: 22,
          r: 30,
        },
      ],
    },
  ],
})
function e() {
  // for (let i = 0; i < dateData.length; i++) {
  //   console.log(i)
  // }
  for (let i = 0; i < dateData.length; i++) {
    console.log(i)
    const d = { x: '', y: '', r: '' }
    d.x = dateData[i]
    d.y = tiisData[i]
    d.r = tiisData[i] / 1000
    console.log(d)
    chartData.datasets[0].data.push(d)
    console.log('?')
  }
}

const options = ref({
  responsive: true,
  maintainAspectRatio: true,
})
</script>

<style scoped></style>
<!-- // {
    //   label: 'Data Two',
    //   backgroundColor: '#7C8CF8',
    //   data: [
    //     {
    //       x: 10,
    //       y: 30,
    //       r: 15,
    //     },
    //     {
    //       x: 20,
    //       y: 20,
    //       r: 10,
    //     },
    //     {
    //       x: 15,
    //       y: 8,
    //       r: 30,
    //     },
    //   ],
    // }, -->
<!-- The error you're seeing, where it says .push is not a function, suggests that the data property in your chartData.datasets[0] is not actually an array at the time you're trying to push new elements to it.

    To troubleshoot and fix this issue, here are a few things to check:
    
    1. Confirm chartData.datasets[0].data is an Array
    Make sure that the data property inside chartData.datasets[0] is indeed an array before attempting to use .push. You can log it to confirm:
    
    javascript
    Copy
    console.log(Array.isArray(chartData.datasets[0].data)); // This should log true
    If this returns false, then the data property might not be initialized correctly as an array. You could initialize it as an empty array if it’s not already an array:
    
    2. Ensure Initialization of data as an Array
    Here’s how you could initialize the data array properly:
    
    javascript
    Copy
    const chartData = reactive({
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [], // Ensure this is an empty array
        },
      ],
    });
    This ensures that chartData.datasets[0].data is an empty array when you start, and it can accept .push() calls.
    
    3. Update Your e() Function
    Now, with the data property confirmed to be an array, your e() function should work without the .push is not a function error.
    
    Here’s your updated code:
    
    javascript
    Copy
    const chartData = reactive({
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [], // Make sure this is an array
        },
      ],
    });
    
    // Example of dateData and tiisData being defined
    const dateData = [10, 20, 30]; // Example values
    const tiisData = [1000, 2000, 3000]; // Example values
    
    function e() {
      // Ensure chartData.datasets[0].data is an array before pushing
      if (Array.isArray(chartData.datasets[0].data)) {
        for (let i = 0; i < dateData.length; i++) {
          const d = { x: '', y: '', r: '' };
    
          d.x = dateData[i]; // You might want to ensure this is a number
          d.y = tiisData[i]; // You might want to ensure this is a number
          d.r = tiisData[i] / 1000; // Adjust this formula as needed
    
          // Push the new data point into the chart's dataset
          chartData.datasets[0].data.push(d);
        }
      } else {
        console.error('Data is not an array');
      }
    }
    Explanation:
    Array Initialization: I’ve ensured that data in chartData.datasets[0] is always initialized as an empty array (data: []).
    
    Array Check: Before using .push(), we check if data is an array using Array.isArray(). This check can prevent the error if, for some reason, data is not an array.
    
    4. Vue Reactivity
    Since you're using Vue's reactive, when you push new data points into chartData.datasets[0].data, the UI will automatically update, reflecting the changes.
    
    Let me know if that works or if you need any further clarification! -->
