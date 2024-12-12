import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router