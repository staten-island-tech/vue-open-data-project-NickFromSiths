<template>
  <div>
    <!-- Pass the data and options as props to the LineChart -->
    <LineChart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
// Import Line from vue-chart-3
import { Line } from 'vue-chart-3'

// Import necessary chart.js components and register them
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

export default defineComponent({
  name: 'TestChart',
  components: {
    LineChart: Line, // Use the Line component from vue-chart-3
  },
  data() {
    return {
      // Sample chart data
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      // Chart options
      chartOptions: {
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
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
            },
          },
        },
      },
    }
  },
})
</script>
