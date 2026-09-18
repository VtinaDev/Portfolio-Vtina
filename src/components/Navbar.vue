<template>
  <nav class="navbar" :class="{ 'navbar--hero': ['Home', 'Cascroty'].includes(route.name), 'navbar--clean-cover': route.name === 'Cascroty' }">
    <!-- Logo -->
    <router-link to="/" class="logo-container">
      <img :src="logo" alt="Vtina Dev" class="logo" />
    </router-link>

    <button class="menu-toggle" type="button" :aria-expanded="isOpen" aria-controls="primary-navigation" aria-label="Abrir menú de navegación" @click="isOpen = !isOpen">☰</button>
    <div id="primary-navigation" class="nav-links" :class="{ 'nav-links--open': isOpen }">
      <router-link to="/" exact @click="isOpen = false">Home</router-link>
      <router-link to="/about" @click="isOpen = false">About</router-link>
      <router-link to="/portfolio" @click="isOpen = false">Projects</router-link>
      <router-link to="/contact" @click="isOpen = false">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'

const isOpen = ref(false)
const route = useRoute()
</script>

<style scoped>
.navbar {
  --nav-tech-orange: #a83a0b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: rgb(97, 97, 97);
}

.navbar--hero {
  position: absolute !important;
  inset: 0 0 auto;
  z-index: 10;
  background: transparent !important;
}

.navbar--clean-cover .nav-links,
.navbar--clean-cover .menu-toggle {
  display: none;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo {
  height: 45px;
  width: auto;
  animation: mascot-float 3.4s ease-in-out infinite;
  transform-origin: center bottom;
}

@keyframes mascot-float {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-.4rem) rotate(2deg); }
}


.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  font-weight: 500;
  color: var(--nav-tech-orange);
  background: none;
  -webkit-text-fill-color: currentColor;
  transition: filter 0.2s ease;
}

.nav-links a.router-link-active {
  border-bottom: 2px solid var(--nav-tech-orange);
}

.nav-links a:hover {
  filter: brightness(0.8);
}

.menu-toggle {
  display: none;
  border: 0;
  color: var(--nav-tech-orange);
  font-size: 1.5rem;
  line-height: 1;
}

@media (max-width: 680px) {
  .navbar { position: relative; padding: .9rem 1.25rem; }
  .menu-toggle { display: block; }
  .nav-links { display: none; position: absolute; top: calc(100% - .2rem); right: 1.25rem; min-width: 10rem; flex-direction: column; gap: .25rem; padding: .65rem; border: 1px solid rgba(45, 23, 36, .12); border-radius: .75rem; background: #fff; box-shadow: 0 .8rem 2rem rgba(45, 23, 36, .14); }
  .nav-links--open { display: flex; }
  .nav-links a { padding: .5rem .65rem; }
}

@media (max-width: 420px) {
  .navbar { padding: .8rem 1rem; }
  .menu-toggle { width: 2.75rem; height: 2.75rem; padding: 0; }
  .nav-links { left: 1rem; right: 1rem; min-width: 0; text-align: center; }
}

@media (prefers-reduced-motion: reduce) {
  .logo { animation: none; }
}
</style>
