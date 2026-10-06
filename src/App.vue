<template>
    <Navbar v-if="!['About', 'Contact', 'Cascroty'].includes($route.name)" />
    <router-view />
    <Footer v-if="$route.name !== 'Cascroty'" />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh; /* que el contenido ocupe toda la altura de la ventana */
}
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--brand-cream);
  color: var(--brand-ink);
}
a {
  color: var(--brand-magenta);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

</style>
