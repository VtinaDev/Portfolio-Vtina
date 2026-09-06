<template>
  <nav class="navbar">
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
import logo from '../assets/logo.png'

const isOpen = ref(false)
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: rgb(97, 97, 97);
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
}


.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #a30059;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a.router-link-active {
  border-bottom: 2px solid #a30059;
}

.nav-links a:hover {
  color: #79044d;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: rgb(54, 54, 54);
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
</style>
