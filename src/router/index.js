import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from "@/views/LogInView.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/auth/log-in',
    name: 'LogIn',
    component: LogInView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
