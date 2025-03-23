import { createRouter, createWebHistory } from 'vue-router'
import LineView from '../views/LineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/line',
      name: 'line',
      component: LineView,
    },
    {
      path: '/bubble',
      name: 'bubble',
      component: () => import('../views/BubbleView.vue'),
    },
    {
      path: '/donut',
      name: 'donut',
      component: () => import('../views/DonutView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
  ],
})

export default router
