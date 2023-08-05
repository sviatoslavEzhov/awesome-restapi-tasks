import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from "@/views/LogInView.vue"
import ProfileView from "@/views/ProfileView.vue";
import TodoView from "@/views/TodoView.vue";

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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/profile/todo',
    name: 'Todo',
    component: TodoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
