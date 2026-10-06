<template>
  <nav class="navbar" :class="{ 'navbar--hero': ['Home', 'Cascroty'].includes(route.name), 'navbar--clean-cover': route.name === 'Cascroty' }">
    <!-- Logo -->
    <router-link to="/" class="logo-container">
      <img :src="logo" alt="Vtina Dev" class="logo" />
    </router-link>

    <div id="primary-navigation" class="nav-links">
      <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
      <router-link :to="{ path: '/', hash: '#tools' }">Tools</router-link>
      <router-link to="/portfolio">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import logo from '../assets/mascot/logo.png'
const route = useRoute()
</script>

<style scoped>
.navbar {
  --nav-tech-orange: var(--brand-wine);
  --menu-surface: rgba(255, 255, 255, .84);
  --menu-ink: var(--brand-wine);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: rgb(97, 97, 97);
}

.navbar--hero {
  --nav-tech-orange: #fff;
  --menu-surface: rgba(255, 255, 255, .16);
  --menu-ink: #fff;
  position: absolute !important;
  inset: 0 0 auto;
  z-index: 10;
  background: transparent !important;
}

.navbar--clean-cover .nav-links {
  display: none;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo { width: 2.9rem; height: auto; border-radius: 0; object-fit: contain; box-shadow: none; }


.nav-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: .35rem;
}

.nav-links a {
  border-radius: 999px;
  padding: .5rem .72rem;
  text-decoration: none;
  font-size: .96rem;
  font-weight: 700;
  color: var(--menu-ink);
  background: none;
  -webkit-text-fill-color: currentColor;
  transition: background .2s ease, color .2s ease;
}

.nav-links a.router-link-active {
  border-bottom: 0;
  background: rgba(255, 255, 255, .24);
  color: var(--menu-ink);
}

.nav-links a:hover {
  background: rgba(255, 255, 255, .16);
}

.nav-links a:focus-visible { outline: 3px solid var(--brand-magenta); outline-offset: 3px; }

@media (max-width: 680px) {
  .navbar { position: relative; align-items: flex-start; gap: .75rem; padding: .9rem 1.25rem; }
  .nav-links { justify-content: flex-end; gap: .15rem; }
  .nav-links a { padding: .4rem .52rem; font-size: .84rem; }
}

@media (max-width: 420px) {
  .navbar { padding: .8rem 1rem; }
  .logo { width: 2.4rem; }
  .nav-links { max-width: 15rem; }
  .nav-links a { padding: .35rem .42rem; font-size: .78rem; }
}

@media (prefers-reduced-motion: reduce) {
  .logo { transition: none; }
}
</style>
