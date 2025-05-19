import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Thanks from '../views/Thanks.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/thanks', name: 'thanks', component: Thanks },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
