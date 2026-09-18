import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contact from '../pages/Contact.vue'
import Privacy from '../pages/Privacy.vue'
import Cascroty from '../pages/Cascroty.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/projects/cascroty', name: 'Cascroty', component: Cascroty },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

