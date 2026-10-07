import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import Contact from '../pages/Contact.vue'
import Privacy from '../pages/Privacy.vue'
import Cascroty from '../pages/Cascroty.vue'
import VTina from '../pages/VTina.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', redirect: { path: '/', hash: '#about' } },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/projects/cascroty', name: 'Cascroty', component: Cascroty },
  { path: '/projects/vtina', name: 'VTina', component: VTina },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
