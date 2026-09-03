<template>
  <footer class="footer">
    <p>© {{ currentYear }} Valentina Angulo. Todos los derechos reservados.</p>
    <div class="social-links">
      <router-link to="/privacy">Privacidad</router-link>
      <a href="https://www.linkedin.com/in/vtinadev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/VtinaDev" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({ currentYear: new Date().getFullYear() })
};
</script>

<style scoped>

.footer {
  text-align: center;
  padding: 2rem 1rem;
  color: rgb(97, 97, 97);
  margin-top: 2rem;
  max-width: 100%;
}

.footer p {
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-links a {
  color: #f39c12;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s;
}

.social-links a:hover {
  transform: scale(1.1);
}
</style>
