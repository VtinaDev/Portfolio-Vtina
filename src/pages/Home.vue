<template>
  <LayoutBase class="home-layout">
    <div class="intro-container">
      <h1 class="fade-in">¡Hola! Soy <strong>Vtina Dev</strong></h1>
      <h2 class="fade-in delay-1">Creative Frontend Developer & UX/UI Designer</h2>
      <router-link to="/portfolio" class="btn-portfolio fade-in delay-2">Ver Portfolio</router-link>
    </div>
  </LayoutBase>
</template>

<script>
import LayoutBase from '../components/LayoutBase.vue'

export default {
  name: 'Home',
  components: { LayoutBase }
}
</script>

<style scoped>
:deep(.home-layout) {
  background: linear-gradient(105deg, #8b270e 0%, #931b3d 48%, #79044d 100%);
}

:global(body:has(.home-layout) .navbar .nav-links a) {
  background: transparent;
  color: #a30059;
}

:global(body:has(.home-layout) .navbar .nav-links a:hover) {
  color: #79044d;
}

:global(body:has(.home-layout) .navbar .nav-links a.router-link-active) {
  border-bottom-color: #a30059;
}

.intro-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; /* ocupa la mayor parte de la pantalla */
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", sans-serif;
}

/* Animación fade-in */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

.fade-in.delay-1 {
  animation-delay: 0.5s;
}

.fade-in.delay-2 {
  animation-delay: 1s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro-container h1 {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff6b00, #a30059);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

.intro-container h2 {
  font-size: 1.5rem;
  font-weight: 500;
  background: linear-gradient(90deg, #ff6b00, #a30059);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-top: 1rem;
}

.btn-portfolio {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.45rem;
  font-size: 1rem;
  font-weight: 800;
  text-decoration: none;
  color: white;
  border: 1px solid transparent;
  background: linear-gradient(90deg, #a83b00, #a30059);
  border-radius: 999px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.btn-portfolio:hover {
  transform: translateY(-0.2rem);
  box-shadow: 0 0.65rem 1.25rem rgba(122, 11, 60, 0.22);
}

/* Responsivo */
@media (max-width: 768px) {
  :global(#app:has(.home-layout)) {
    max-width: none;
    padding: 0;
  }

  :deep(.home-layout main) {
    padding: 0;
  }

  .intro-container h1 {
    font-size: 2.2rem;
  }

  .intro-container h2 {
    font-size: 1.2rem;
  }

  .btn-portfolio {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
