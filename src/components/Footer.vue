<template>
  <footer class="footer">
    <p>© {{ currentYear }} Valentina Angulo. Todos los derechos reservados.</p>
    <div class="social-links">
      <router-link to="/privacy">Privacidad</router-link>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem clamp(1.25rem, 4vw, 3rem);
  color: #6e6870;
  margin-top: 0;
  max-width: 100%;
  border-top: 0;
  background: #fff;
  font-size: .8rem;
}

.footer p {
  margin: 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}

.social-links a {
  color: var(--brand-orange);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s, transform 0.2s;
}

.social-links a:hover {
  color: var(--brand-magenta);
  transform: translateY(-.1rem);
}

@media (max-width: 620px) {
  .footer { flex-direction: column; gap: 1rem; text-align: center; }
}
</style>
