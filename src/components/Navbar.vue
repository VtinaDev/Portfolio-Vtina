<template>
  <nav class="navbar" :class="{ 'navbar--hero': ['Home', 'Cascroty'].includes(route.name), 'navbar--clean-cover': route.name === 'Cascroty' }">
    <!-- Logo -->
    <router-link to="/" class="logo-container">
      <img :src="logo" alt="Vtina Dev" class="logo" />
    </router-link>

    <div class="nav-socials" aria-label="Contacto y redes">
      <a href="mailto:valentina3691@hotmail.com" aria-label="Escribir a Valentina por correo electrónico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.25 5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 19.5 21h-15a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.25-.75a.75.75 0 0 0-.75.75v.39l8.25 5.5 8.25-5.5v-.39a.75.75 0 0 0-.75-.75h-15Zm15.75 2.94-7.83 5.22a.75.75 0 0 1-.84 0L3.75 7.44v11.31c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.44Z"/></svg><span>Correo</span></a>
      <a href="https://wa.me/34639752175" target="_blank" rel="noopener noreferrer" aria-label="Escribir a Valentina por WhatsApp Business"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.4ZM12.05 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 1 1 8.37 4.64Z"/></svg><span>WhatsApp</span></a>
      <a href="https://www.linkedin.com/in/vtinadev" target="_blank" rel="noopener noreferrer" aria-label="Visitar el perfil de LinkedIn de Vtina Dev"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z"/></svg><span>LinkedIn</span></a>
      <a href="https://github.com/VtinaDev" target="_blank" rel="noopener noreferrer" aria-label="Visitar el perfil de GitHub de Vtina Dev"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.22 1.84 1.22 1.07 1.82 2.81 1.3 3.49 1 .11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 2.18v3.23c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"/></svg><span>GitHub</span></a>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import logo from '../assets/mascot/logo.webp'
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

.nav-socials { display: flex; align-items: center; justify-content: flex-end; gap: .5rem; }
.nav-socials a { display: inline-flex; align-items: center; gap: .38rem; min-height: 2.15rem; border: 1px solid color-mix(in srgb, var(--menu-ink) 44%, transparent); border-radius: 999px; padding: .35rem .62rem; background: var(--menu-surface); box-shadow: inset 0 1px 0 rgba(255,255,255,.48); color: var(--menu-ink); font-size: .72rem; font-weight: 750; letter-spacing: .01em; transition: transform .24s ease, background .24s ease, box-shadow .24s ease; }
.nav-socials svg { width: 1rem; height: 1rem; fill: currentColor; }
.nav-socials a:hover, .nav-socials a:focus-visible { border-color: var(--brand-orange); background: linear-gradient(145deg, rgba(230,71,21,.64), rgba(230,71,21,.18)); box-shadow: inset 0 1px 0 rgba(255,231,207,.82), 0 0 .8rem rgba(230,71,21,.78), 0 .45rem 1rem rgba(230,71,21,.32); color: #fff; transform: translateY(-.16rem) scale(1.08); }
.nav-socials a:focus-visible { outline: 3px solid var(--brand-magenta); outline-offset: 3px; }

.nav-links {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  justify-content: flex-end;
  gap: .35rem;
}

.nav-links a {
  border-radius: 999px;
  margin-left: 0;
  padding: .5rem .72rem;
  text-decoration: none;
  font-size: .96rem;
  font-weight: 700;
  color: var(--menu-ink);
  background: none;
  white-space: nowrap;
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
  .navbar { position: relative; align-items: center; gap: .75rem; padding: .9rem 1.25rem; }
  .nav-socials { gap: .35rem; }
  .nav-socials a { min-height: 1.95rem; padding: .32rem .5rem; font-size: .66rem; }
  .nav-links { justify-content: flex-end; gap: .15rem; }
  .nav-links a { padding: .4rem .52rem; font-size: .84rem; }
}

@media (max-width: 420px) {
  .navbar { padding: .8rem 1rem; }
  .logo { width: 2.4rem; }
  .nav-socials { gap: .25rem; }
  .nav-socials a { width: 1.8rem; min-height: 1.8rem; justify-content: center; padding: 0; }
  .nav-socials a span { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
  .nav-links { gap: .08rem; }
  .nav-links a { padding: .35rem .42rem; font-size: .78rem; }
}

@media (prefers-reduced-motion: reduce) {
  .logo { transition: none; }
}
</style>
