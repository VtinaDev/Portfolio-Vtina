<template>
    <Navbar v-if="$route.name !== 'About' && $route.name !== 'Contact'" />
    <router-view />
    <Footer />
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
  background-color: #f5f5f5; /* Color de fondo claro */
  color: #333; /* Color de texto oscuro para buen contraste */
}
a {
  color: #42b983; /* Color de enlace distintivo */
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

</style>
