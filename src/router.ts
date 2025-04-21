import {createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProgrammationView from './views/ProgrammationView.vue'
import PartnersView from './views/PartnersView.vue'
// import AProposView from './views/AProposView.vue'
// import ContactsView from './views/ContactsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/partenaires', component: PartnersView },
  { path: '/programmation', component: ProgrammationView },
  // { path: '/a-propos', component: AProposView },
  // { path: '/a-propos', component: ContactsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router