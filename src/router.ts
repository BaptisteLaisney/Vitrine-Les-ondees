import {createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProgrammationView from './views/ProgrammationView.vue'
import PartnersView from './views/PartnersView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/partenaires', component: PartnersView },
  { path: '/programmation', component: ProgrammationView },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router