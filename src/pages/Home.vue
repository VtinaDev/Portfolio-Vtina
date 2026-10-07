<template>
  <LayoutBase class="home-layout" full-bleed>
    <section ref="homeHero" class="home-hero home-hero--immersive" aria-labelledby="home-title">
      <div class="hero-stage">
        <section class="hero-intro-card">
          <div class="home-hero__portrait-stage" aria-label="Retrato de Valentina Angulo">
            <div class="hero-home-copy">
              <h2 class="hero-home-intro">Creative Frontend Developer</h2>
              <p class="hero-home-summary">Creo interfaces modernas, responsivas y centradas en las personas. Ahora incorporo <strong>IA y APIs</strong> para construir productos más útiles y dinámicos.</p>
            </div>
            <div class="hero-profile-card">
              <div class="hero-profile-card__portrait">
                <img :src="aboutHero" alt="Valentina Angulo">
              </div>
              <h1 id="home-title">Hola, soy <strong>Vtina Dev</strong></h1>
              <p class="hero-profile-card__role"><strong>Código · Frontend · UX/UI · IA &amp; APIs.</strong></p>
              <div class="hero-home-socials" aria-label="Contacto y redes">
                <a href="mailto:valentina3691@hotmail.com" aria-label="Escribir a Valentina por correo electrónico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.25 5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 19.5 21h-15a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.25-.75a.75.75 0 0 0-.75.75v.39l8.25 5.5 8.25-5.5v-.39a.75.75 0 0 0-.75-.75h-15Zm15.75 2.94-7.83 5.22a.75.75 0 0 1-.84 0L3.75 7.44v11.31c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V7.44Z"/></svg></a>
                <a href="https://wa.me/34639752175" target="_blank" rel="noopener noreferrer" aria-label="Escribir a Valentina por WhatsApp Business"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.4ZM12.05 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.87 9.87 0 1 1 8.37 4.64Zm5.41-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.5.71.31 1.26.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg></a>
                <a href="https://www.linkedin.com/in/vtinadev" target="_blank" rel="noopener noreferrer" aria-label="Visitar el perfil de LinkedIn de Vtina Dev"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z"/></svg></a>
                <a href="https://github.com/VtinaDev" target="_blank" rel="noopener noreferrer" aria-label="Visitar el perfil de GitHub de Vtina Dev"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.22 1.84 1.22 1.07 1.82 2.81 1.3 3.49 1 .11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 2.18v3.23c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"/></svg></a>
              </div>
              <div class="hero-profile-card__actions">
                <GlassButton to="/portfolio" variant="primary">Mi trabajo</GlassButton>
                <GlassButton :to="{ path: '/', hash: '#contact' }" variant="secondary">Contáctame</GlassButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <section id="about" class="home-about-story" aria-labelledby="about-story-title">
      <div class="home-about-story__intro">
        <div>
          <p class="home-section__eyebrow">Sobre mí</p>
          <h2 id="about-story-title">Diseño y desarrollo para experiencias con sentido.</h2>
          <p class="home-about__lead">Uno comunicación visual, UX/UI y desarrollo frontend para transformar ideas en experiencias claras, útiles y memorables.</p>
        </div>
      </div>
      <div class="project-slider" aria-label="Proyectos seleccionados">
        <a
          v-for="project in projectSlides"
          :key="project.title"
          class="project-slider__slide"
          :class="{ 'project-slider__slide--mascot': project.mascot }"
          :href="project.href"
          :target="project.external ? '_blank' : undefined"
          :rel="project.external ? 'noopener noreferrer' : undefined"
        >
          <img v-if="project.image" :src="project.image" :alt="project.alt">
          <HeroMascot v-if="project.mascot" class="project-slider__mascot" :show-technologies="false" />
          <img v-if="project.logo" class="project-slider__logo" :src="project.logo" alt="">
          <span class="project-slider__overlay">
            <strong>{{ project.title }}</strong>
            <span class="project-slider__description">{{ project.description }}</span>
            <small>Ver proyecto <span aria-hidden="true">→</span></small>
          </span>
        </a>
      </div>
    </section>

    <section id="tools" class="home-skills" aria-labelledby="skills-title">
      <div class="home-section-heading">
        <h2 id="skills-title">Mis herramientas</h2>
        <p>Para dar vida a buenas ideas.</p>
      </div>
      <div ref="skillsTrack" class="home-skills__track" role="region" aria-label="Carrusel de herramientas" tabindex="0" @scroll="updateActiveSkill">
          <article v-for="(group, index) in skillGroups" :key="group.title" class="home-skill-group" :class="{ 'home-skill-group--active': index === activeSkill }">
          <div class="home-skill-group__number" aria-hidden="true">0{{ index + 1 }}</div>
          <h3>{{ group.title }}</h3>
          <p class="home-skill-group__description">{{ group.description }}</p>
          <ul aria-label="Herramientas"><li v-for="skill in group.skills" :key="skill.name"><img v-if="skill.icon" :src="skill.icon" alt="" aria-hidden="true"><b v-else aria-hidden="true">{{ skill.mark || skill.name.slice(0, 2) }}</b><span>{{ skill.name }}</span></li></ul>
        </article>
      </div>
      <p class="home-skills__hint"><span aria-hidden="true">↔</span> Desliza para explorar</p>
    </section>

    <Contact embedded />

  </LayoutBase>
</template>

<script>
import { gsap } from 'gsap'
import LayoutBase from '../components/LayoutBase.vue'
import GlassButton from '../components/GlassButton.vue'
import HeroMascot from '../components/HeroMascot.vue'
import Contact from './Contact.vue'
import aboutHero from '../assets/Sujeto.png'
import juegoLeoCover from '../assets/juego-leo/bacground_home_mobile copia.png'
import juegoLeoLogo from '../assets/juego-leo/logo.png'
import behanceVerticality from '../assets/behance-verticality.webp'
import behanceCascroty from '../assets/cascroty/publi1.png'
import vueIcon from '../assets/icons/vuejs.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import openaiIcon from '../assets/icons/openai.svg'
import elevenlabsIcon from '../assets/icons/elevenlabs.svg'
import figmaIcon from '../assets/icons/figma.svg'
import htmlIcon from '../assets/icons/html5.svg'
import cssIcon from '../assets/icons/css3.svg'
import viteIcon from '../assets/icons/vite.svg'
import gitIcon from '../assets/icons/git.svg'
import githubIcon from '../assets/icons/github.svg'
import vscodeIcon from '../assets/icons/vscode.svg'
import illustratorIcon from '../assets/icons/illustrator.svg'
import supabaseIcon from '../assets/icons/supabase.svg'
import pythonIcon from '../assets/icons/python.svg'
import procreateIcon from '../assets/icons/procreate.png'
import canvaIcon from '../assets/icons/canva.svg'
import mascotBody from '../assets/mascot/Cuerpo.png'
import mascotHead from '../assets/mascot/Cabeza.png'
import mascotLeftArm from '../assets/mascot/Izquierdo.png'
import mascotRightArm from '../assets/mascot/Derecho.png'

export default {
  name: 'Home',
  components: { LayoutBase, GlassButton, HeroMascot, Contact },
  data() {
    return {
      aboutHero,
      procreateIcon,
      vueIcon,
      cssIcon,
      mascotBody,
      mascotHead,
      mascotLeftArm,
      mascotRightArm,
      heroAnimation: null,
      activeSkill: null,
      behanceVerticality,
      behanceCascroty,
      projectSlides: [
        { title: 'Juego & Leo', description: 'Una app educativa que convierte la lectura y el juego en una experiencia digital cercana.', image: juegoLeoCover, logo: juegoLeoLogo, alt: 'Portada del proyecto Juego y Leo', href: '/portfolio#project-details', external: false },
        { title: 'Cascroty', description: 'Una identidad y experiencia de marca para celebrar la comida marroquí real.', image: behanceCascroty, alt: 'Portada del proyecto Cascroty', href: '/projects/cascroty', external: false },
        { title: 'Verticality', description: 'Una propuesta de identidad visual construida para comunicar con carácter y altura.', image: behanceVerticality, alt: 'Portada del proyecto Verticality', href: 'https://www.behance.net/gallery/200801549/VERTICALITY', external: true },
        { title: 'VTina', description: 'Mi mascota animada, una pequeña compañera para crear, aprender y construir.', mascot: true, href: '/projects/vtina', external: false }
      ],
      skillGroups: [
        { title: 'Core Frontend', description: 'Interfaces rápidas, claras y adaptadas a cada pantalla.', skills: [{ name: 'HTML5', icon: htmlIcon }, { name: 'CSS3', icon: cssIcon }, { name: 'JavaScript', icon: javascriptIcon }, { name: 'Vue.js', icon: vueIcon }, { name: 'Vite', icon: viteIcon }] },
        { title: 'Producto e integraciones', description: 'Experiencias conectadas con datos, IA y servicios reales.', skills: [{ name: 'Supabase', icon: supabaseIcon }, { name: 'REST APIs', mark: 'API' }, { name: 'OpenAI', icon: openaiIcon }, { name: 'ElevenLabs', icon: elevenlabsIcon }, { name: 'Python', icon: pythonIcon }] },
        { title: 'Diseño y flujo de trabajo', description: 'Del sistema visual a un código mantenible y colaborativo.', skills: [{ name: 'Figma', icon: figmaIcon }, { name: 'Git', icon: gitIcon }, { name: 'GitHub', icon: githubIcon }, { name: 'VS Code', icon: vscodeIcon }] },
        { title: 'Herramientas creativas', description: 'Recursos visuales que refuerzan la historia de cada producto.', skills: [{ name: 'Procreate', icon: procreateIcon }, { name: 'Adobe Illustrator', icon: illustratorIcon }, { name: 'Canva', icon: canvaIcon }] }
      ]
    }
  },
  mounted() {
    requestAnimationFrame(() => {
      this.activeSkill = 0
    })
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    this.heroAnimation = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-home-intro', { autoAlpha: 0, y: 26, duration: .72 })
        .from('.hero-profile-card', { autoAlpha: 0, scale: .9, y: 42, duration: .85 }, '+=.12')
        .from('.hero-profile-card__portrait', { autoAlpha: 0, scale: .78, duration: .5, ease: 'back.out(1.35)' }, '-=.38')
        .from('.hero-profile-card h1, .hero-profile-card__role, .hero-home-summary', { autoAlpha: 0, y: 14, stagger: .1, duration: .42 }, '-=.2')
        .from('.hero-profile-card__actions .glass-button', { autoAlpha: 0, y: 12, stagger: .1, duration: .38 }, '-=.08')
        .set('.hero-profile-card', { clearProps: 'transform,opacity,visibility' })
    }, this.$refs.homeHero)
  },
  beforeUnmount() {
    this.heroAnimation?.revert()
  },
  methods: {
    scrollTools(direction) {
      const track = this.$refs.skillsTrack
      if (!track) return
      const card = track.querySelector('.home-skill-group')
      track.scrollBy({ left: direction * (card?.offsetWidth || 320), behavior: 'smooth' })
    },
    updateActiveSkill() {
      const track = this.$refs.skillsTrack
      const card = track?.querySelector('.home-skill-group')
      if (!track || !card) return
      this.activeSkill = Math.min(this.skillGroups.length - 1, Math.max(0, Math.round(track.scrollLeft / card.offsetWidth)))
    }
  }
}
</script>

<style scoped>
:deep(.home-layout) { width: 100% !important; max-width: none !important; min-height: 100svh; margin: 0 !important; padding: 0 !important; background: #fff; }
:deep(.home-layout main) { width: 100% !important; max-width: none !important; min-height: 100svh; margin: 0 !important; padding: 0 !important; background: inherit; }
:global(html:has(.home-layout)), :global(body:has(.home-layout)), :global(#app:has(.home-layout)) { width: 100%; max-width: none; margin: 0 !important; padding: 0 !important; }
:global(body:has(.home-layout)), :global(#app:has(.home-layout)) { background: #fff; }
:global(body:has(.home-layout)) { display: block; overflow-x: hidden; }
:global(#app:has(.home-layout)) { min-height: 100svh; }
:global(#app:has(.home-layout) .footer) { margin: 0; background: #fff; }
:global(html:has(.home-layout)),
:global(body:has(.home-layout)),
:global(#app:has(.home-layout)),
:deep(.home-layout),
:deep(.home-layout main),
.home-hero { margin: 0 !important; padding: 0 !important; }
.home-hero { position: relative; display: grid; width: 100%; max-width: none; min-height: 100svh; grid-template-columns: minmax(0, 1fr); overflow: hidden; margin: 0; padding: 0; background: #d9d7db; color: var(--brand-ink); isolation: isolate; }
.glass-panel { position: relative; display: grid; width: min(calc(100% - clamp(3rem, 10vw, 10rem)), 34rem); min-height: min(23rem, calc(100svh - 17rem)); align-self: center; justify-self: center; overflow: hidden; border: 1px solid rgba(45, 23, 36, .1); border-radius: 1.75rem; background: #f8f5f7; box-shadow: 0 .9rem 2.6rem rgba(73, 9, 48, .12); }.glass-panel::before { position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(135deg, rgba(255, 255, 255, .72), transparent 55%); content: ''; pointer-events: none; }.glass-panel::after { display: none; }
.home-hero__grid { display: none; }
.code-floats { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
.code-float { --rain-x: 1rem; --rain-y: 22rem; position: absolute; background: linear-gradient(145deg, #fff8fc 0%, #f9a4cd 35%, #c20b5a 68%, #fff 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: var(--brand-magenta); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: clamp(1.8rem, 3.5vw, 4rem); font-weight: 400; letter-spacing: -.12em; line-height: 1; opacity: .16; text-shadow: 0 .08em .16em rgba(122, 11, 60, .32), 0 -.035em .06em rgba(255, 255, 255, .9); filter: drop-shadow(0 .16em .2em rgba(122, 11, 60, .2)); animation: code-rain 8s linear infinite; }
.code-float--one { --rain-x: 1.5rem; --rain-y: 26rem; top: 8%; left: 8%; font-size: clamp(2rem, 4.2vw, 4.8rem); animation-delay: -5s; animation-duration: 8s; }.code-float--two { --rain-x: -1rem; --rain-y: 19rem; top: 4%; right: 11%; font-size: clamp(1.25rem, 2.3vw, 2.5rem); animation-delay: -1s; animation-duration: 6.5s; }.code-float--three { --rain-x: .8rem; --rain-y: 28rem; top: 38%; left: 4%; font-size: clamp(2.4rem, 5vw, 5.7rem); animation-delay: -6s; animation-duration: 9s; }.code-float--four { --rain-x: -1.4rem; --rain-y: 24rem; top: 30%; right: 6%; font-size: clamp(1.1rem, 2vw, 2.2rem); animation-delay: -3s; animation-duration: 7s; }.code-float--five { --rain-x: 1rem; --rain-y: 17rem; bottom: 28%; left: 14%; font-size: clamp(1.7rem, 3.2vw, 3.6rem); animation-delay: -2s; animation-duration: 6s; }.code-float--six { --rain-x: -1.2rem; --rain-y: 21rem; right: 16%; bottom: 25%; font-size: clamp(1.35rem, 2.6vw, 3rem); animation-delay: -7s; animation-duration: 8.5s; }
.home-hero__eyebrow { margin: 1.4rem 0 0; color: #fff; font-size: .72rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
.home-hero__main { position: relative; z-index: 1; align-self: center; padding: clamp(1.25rem, 2.5vw, 2.4rem) clamp(.9rem, 2.5vw, 2.4rem); text-align: left; }
.home-hero h1 { max-width: 11ch; margin: 0; color: var(--brand-ink); font-family: Arial, sans-serif; font-size: clamp(2.1rem, 3.35vw, 3.6rem); font-weight: 400; letter-spacing: -.085em; line-height: .9; }.home-hero h1 em { color: inherit; font-family: Georgia, serif; font-weight: 400; letter-spacing: -.1em; }
.home-hero__brand { font-weight: inherit; white-space: nowrap; }
.home-hero__role { white-space: nowrap; }
.home-hero__intro { max-width: 31rem; margin: clamp(1.8rem, 3vw, 2.8rem) 0 0; color: #625863; font-size: clamp(1.05rem, 1.8vw, 1.3rem); line-height: 1.55; }
.home-hero h1 em { font-family: inherit; font-size: inherit; font-style: normal; font-weight: inherit; letter-spacing: inherit; }
.home-hero__actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }.button { display: inline-flex; align-items: center; gap: .8rem; border: 1px solid rgba(255, 255, 255, .62); border-radius: 999px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .58), 0 .55rem 1.3rem rgba(122, 11, 60, .14); padding: .85rem 1.25rem; font-weight: 800; text-decoration: none; backdrop-filter: blur(.7rem); -webkit-backdrop-filter: blur(.7rem); transition: transform .25s ease, background .25s ease, color .25s ease, box-shadow .25s ease; }.button:hover { box-shadow: inset 0 1px 0 rgba(255, 255, 255, .82), 0 .8rem 1.5rem rgba(122, 11, 60, .22); text-decoration: none; transform: translateY(-.2rem); }.button--primary { background: linear-gradient(105deg, rgba(147, 27, 61, .9), rgba(194, 11, 90, .86) 52%, rgba(247, 37, 133, .84)); color: #fff; }.button--secondary { border-color: rgba(194, 11, 90, .25); background: linear-gradient(145deg, rgba(255, 255, 255, .62), rgba(255, 255, 255, .18)); color: var(--brand-magenta); }.button--secondary:hover { border-color: rgba(237, 22, 114, .4); background: linear-gradient(145deg, rgba(255, 255, 255, .74), rgba(237, 22, 114, .12)); color: var(--brand-magenta); }
.home-hero__side { align-self: center; justify-self: end; width: min(100%, 15rem); border-top: 1px solid #12070e3d; padding-top: 1rem; }.home-hero__side p { margin: 0 0 1.4rem; color: #fff; font-size: .72rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }.home-hero__side ul { margin: 0; padding: 0; list-style: none; }.home-hero__side li { border-bottom: 1px solid #12070e24; padding: .75rem 0; font-size: .95rem; }
.fade-in { opacity: 0; transform: translateY(1.25rem); animation: fade-in-up .8s cubic-bezier(.2,.75,.3,1) forwards; }.delay-1 { animation-delay: .12s; }.delay-2 { animation-delay: .24s; }.delay-3 { animation-delay: .36s; }@keyframes fade-in-up { to { opacity: 1; transform: translateY(0); } }
.home-hero__eyebrow { text-align: center; }
.home-hero__main { grid-column: auto; justify-self: center; width: 100%; text-align: left; }
.home-hero h1, .home-hero__intro { margin-left: 0; margin-right: 0; }
.home-hero h1 { max-width: 11ch; line-height: .98; text-align: left; }
.home-hero__actions { justify-content: flex-start; }
.home-hero__actions .button { border: 1px solid rgba(255, 255, 255, .55); border-radius: 999px; background: linear-gradient(145deg, rgba(255, 255, 255, .36), rgba(255, 255, 255, .1)); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .52), 0 .3rem .8rem rgba(47, 3, 30, .1); color: #a83a0b; padding: .78rem 1.35rem; font-weight: 800; text-decoration: none; backdrop-filter: blur(.7rem); -webkit-backdrop-filter: blur(.7rem); transition: transform .25s ease, box-shadow .25s ease, background .25s ease; }
.home-hero__actions .button:hover { background: linear-gradient(145deg, rgba(255, 255, 255, .55), rgba(255, 255, 255, .16)); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .7), 0 .45rem 1rem rgba(47, 3, 30, .14); transform: translateY(-.2rem); text-decoration: none; }
.home-hero__actions .button--primary { border: 2px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(115deg, #fff9fb 0%, #ffd0a7 30%, #d95a12 68%, #fff 100%) border-box; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .94), inset 0 -1px 0 rgba(91, 25, 15, .18), 0 .3rem .8rem rgba(47, 3, 30, .1); }
.home-hero__actions .button--secondary { border: 2px solid transparent; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(115deg, #fff8fc 0%, #f9a4cd 35%, #c20b5a 68%, #fff 100%) border-box; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .94), inset 0 -1px 0 rgba(122, 11, 60, .18), 0 .3rem .8rem rgba(47, 3, 30, .1); }
.home-hero__actions .button--primary:hover { background: linear-gradient(#fff, #fff) padding-box, linear-gradient(115deg, #fff9fb 0%, #ffd0a7 30%, #d95a12 68%, #fff 100%) border-box; }
.home-hero__actions .button--secondary:hover { background: linear-gradient(#fff, #fff) padding-box, linear-gradient(115deg, #fff8fc 0%, #f9a4cd 35%, #c20b5a 68%, #fff 100%) border-box; }
.home-hero__main { justify-self: center; width: min(100%, 75rem); text-align: center; }
.home-hero h1, .home-hero__intro { margin-left: auto; margin-right: auto; text-align: center; }
.home-hero h1 { max-width: none; font-size: clamp(2.1rem, 3.35vw, 3.6rem); }
.home-hero__actions { justify-content: center; }
.home-hero__actions .button, .home-hero__actions .button--primary, .home-hero__actions .button--secondary { border: 0; background: linear-gradient(135deg, rgba(255, 255, 255, .82), rgba(232, 232, 232, .72) 48%, rgba(198, 198, 198, .72)); color: #383838; padding: .85rem 1.35rem; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .72), 0 .6rem 1.3rem rgba(70, 70, 70, .13); }
.home-hero__actions .button:hover, .home-hero__actions .button--primary:hover, .home-hero__actions .button--secondary:hover { background: linear-gradient(135deg, rgba(255, 255, 255, .94), rgba(242, 242, 242, .84) 48%, rgba(213, 213, 213, .84)); color: #383838; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .88), 0 .8rem 1.5rem rgba(70, 70, 70, .16); }
.home-hero__actions .button--primary, .home-hero__actions .button--secondary { position: relative; isolation: isolate; overflow: hidden; border: 0; color: #383838; text-shadow: 0 1px 1px rgba(255, 255, 255, .7); box-shadow: inset 0 2px 1px rgba(255, 255, 255, .94), inset 0 -3px 2px rgba(74, 74, 74, .16), 0 .22rem .2rem rgba(255, 255, 255, .8), 0 .5rem .65rem rgba(74, 74, 74, .13), 0 1rem 1.5rem rgba(74, 74, 74, .09); }
.home-hero__actions .button--primary::before, .home-hero__actions .button--secondary::before { position: absolute; z-index: -1; inset: 3px; border-radius: inherit; background: linear-gradient(180deg, rgba(255, 255, 255, .55), transparent 30%); box-shadow: inset 0 1px 1px rgba(255, 255, 255, .8), inset 0 -2px 3px rgba(54, 35, 68, .2); content: ''; }
.home-hero__actions .button--primary::after, .home-hero__actions .button--secondary::after { position: absolute; z-index: -1; top: -55%; right: 18%; width: 48%; height: 90%; border-radius: 50%; background: rgba(255, 255, 255, .5); content: ''; filter: blur(.6rem); transform: rotate(28deg); }
.home-hero__actions .button--primary, .home-hero__actions .button--secondary { background: linear-gradient(135deg, rgba(255, 255, 255, .82), rgba(232, 232, 232, .72) 48%, rgba(198, 198, 198, .72)); }
.home-hero__actions .button--primary:hover, .home-hero__actions .button--secondary:hover { background: linear-gradient(135deg, rgba(255, 255, 255, .94), rgba(242, 242, 242, .84) 48%, rgba(213, 213, 213, .84)); }
@keyframes code-rain { 0% { opacity: .12; transform: translate3d(0, -1.5rem, 0) scale(.86) rotate(-8deg); } 16% { opacity: .78; } 82% { opacity: .7; } 100% { opacity: .08; transform: translate3d(var(--rain-x), var(--rain-y), 0) scale(1.08) rotate(8deg); } }
@media (max-width: 720px) { .home-hero { min-height: 100svh; grid-template-columns: 1fr; padding: 0; }.glass-panel { width: calc(100% - 2.75rem); min-height: min(31rem, calc(100svh - 11rem)); border-radius: 1.5rem; transform: none; }.home-hero__main { align-self: start; padding: 4.25rem .9rem 1.25rem; text-align: center; }.home-hero h1, .home-hero__intro { margin-left: auto; margin-right: auto; }.home-hero h1 { max-width: 100%; text-align: center; font-size: clamp(2.3rem, 12vw, 3.8rem); }.home-hero__role { white-space: normal; }.home-hero__actions { justify-content: center; } }
@media (max-width: 480px) { .home-hero { padding: 0; }.home-hero__main { padding-top: 5rem; }.home-hero h1 { font-size: clamp(2.15rem, 11.5vw, 3.2rem); line-height: 1.04; }.home-hero__intro { font-size: 1rem; }.home-hero__actions { display: grid; grid-template-columns: 1fr; width: min(100%, 18rem); margin-left: auto; margin-right: auto; }.home-hero__actions .button { justify-content: center; width: 100%; }.code-float--three, .code-float--six { display: none; } }
@media (prefers-reduced-motion: reduce) { .fade-in { opacity: 1; transform: none; animation: none; }.code-float, .home-skill-group--active { animation: none; }.home-skill-group, .button { transition: none; } }
.home-hero__actions .button,
.home-hero__actions .button--primary,
.home-hero__actions .button--secondary {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .78);
  color: #fff;
  text-shadow: 0 1px 1px rgba(65, 0, 32, .18);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, .96), inset 0 -1px 1px rgba(255, 255, 255, .3), 0 .5rem 1.25rem rgba(80, 11, 49, .22);
  backdrop-filter: blur(22px) saturate(170%) brightness(1.14);
  -webkit-backdrop-filter: blur(22px) saturate(170%) brightness(1.14);
  transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
}
.home-hero__actions .button--primary,
.home-hero__actions .button--secondary { background: var(--brand-gradient); background-clip: border-box; -webkit-background-clip: border-box; color: #fff; text-shadow: 0 1px 1px rgba(65, 0, 32, .28); }
.home-hero__actions .button--primary::selection { color: #fff; background: var(--brand-wine); }
.home-hero__actions .button--primary { -webkit-text-fill-color: #fff; }
.home-hero__actions .button--primary::before,
.home-hero__actions .button--secondary::before { position: absolute; z-index: -1; top: -38%; left: -22%; width: 100%; height: 150%; border-radius: 50%; background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, .92), rgba(255, 190, 225, .48) 30%, rgba(151, 212, 255, .4) 52%, transparent 72%); content: ''; filter: blur(.48rem); opacity: .98; transform: translate3d(0, 0, 0) rotate(-16deg); animation: liquid-chromatic-shift 5.5s ease-in-out infinite alternate; }
.home-hero__actions .button--primary::after,
.home-hero__actions .button--secondary::after { position: absolute; z-index: -1; inset: 1px; border-radius: inherit; background: linear-gradient(180deg, rgba(255, 255, 255, .58), rgba(255, 255, 255, .12) 48%, transparent); content: ''; }
.home-hero__actions .button:hover,
.home-hero__actions .button--primary:hover,
.home-hero__actions .button--secondary:hover { box-shadow: inset 0 1px 1px rgba(255, 255, 255, 1), inset 0 -1px 1px rgba(255, 255, 255, .42), 0 .8rem 1.7rem rgba(80, 11, 49, .3); filter: brightness(1.16) saturate(1.18); transform: translateY(-.18rem) scale(1.015); }
.home-hero__actions .button:active { background: linear-gradient(105deg, var(--brand-magenta), var(--brand-wine) 45%, var(--brand-red) 72%, var(--brand-orange)); filter: brightness(.96) saturate(1.15); transform: translateY(0) scale(.98); }
@keyframes liquid-chromatic-shift { 0% { opacity: .64; transform: translate3d(-14%, 8%, 0) rotate(-22deg) scale(.9); } 50% { opacity: 1; transform: translate3d(24%, -8%, 0) rotate(6deg) scale(1.14); } 100% { opacity: .76; transform: translate3d(48%, 6%, 0) rotate(20deg) scale(.96); } }
@media (prefers-reduced-motion: reduce) { .home-hero__actions .button--primary::before, .home-hero__actions .button--secondary::before { animation: none; } }

/* Cristal líquido: transparencia, borde especular, brillo interior y sombra suave. */
.glass-panel {
  border: 2px solid transparent;
  outline: 0;
  background: linear-gradient(rgba(238, 238, 241, .7), rgba(238, 238, 241, .7)) padding-box, linear-gradient(112deg, #bab8be 0%, #e2e1e5 13%, #fff 27%, #b6b4ba 44%, #f0eff2 61%, #fff 76%, #cdccd1 90%, #b3b1b7 100%) border-box;
  box-shadow: inset 0 2px 2px rgba(255, 255, 255, 1), inset 0 -3px 5px rgba(68, 57, 72, .16), 0 .3rem .5rem rgba(255, 255, 255, .9), 0 1.25rem 2.2rem rgba(73, 65, 78, .22);
  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);
}
.glass-panel::before {
  z-index: 0;
  display: none;
}
.glass-panel::after {
  position: absolute;
  z-index: 0;
  inset: .42rem;
  display: block;
  border: 1px solid rgba(255, 255, 255, .6);
  border-radius: calc(1.75rem - .42rem);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, .92), inset 0 -2px 5px rgba(68, 57, 72, .11);
  content: '';
  pointer-events: none;
}

.home-hero__actions .button,
.home-hero__actions .button--primary,
.home-hero__actions .button--secondary {
  border: 2px solid transparent;
  background: linear-gradient(rgba(234, 232, 236, .86), rgba(234, 232, 236, .86)) padding-box, linear-gradient(112deg, #17151a 0%, #706c75 16%, #fff 32%, #54505a 50%, #e8e6ea 68%, #fff 80%, #333037 100%) border-box;
  color: #3d3640;
  text-shadow: 0 1px rgba(255, 255, 255, .78);
  box-shadow: inset 0 2px 1px rgba(255, 255, 255, 1), inset 0 -3px 4px rgba(68, 57, 72, .2), 0 .7rem 1.4rem rgba(73, 65, 78, .22), 0 .18rem .3rem rgba(255, 255, 255, .9);
  backdrop-filter: blur(18px) saturate(155%);
  -webkit-backdrop-filter: blur(18px) saturate(155%);
}
.home-hero__actions .button--primary,
.home-hero__actions .button--secondary { -webkit-text-fill-color: #3d3640; }
.home-hero__actions .button--primary::before,
.home-hero__actions .button--secondary::before { background: linear-gradient(180deg, rgba(255, 255, 255, .95), rgba(255, 255, 255, .16) 42%, transparent 55%); box-shadow: inset 0 1px 1px rgba(255, 255, 255, .94), inset 0 -2px 4px rgba(68, 57, 72, .16); }
.home-hero__actions .button--primary::after,
.home-hero__actions .button--secondary::after { background: radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 1) 0 1.5px, rgba(255, 255, 255, .62) 2px, transparent 7px), radial-gradient(circle at 100% 100%, rgba(255, 255, 255, .86) 0 1px, transparent 5px), linear-gradient(105deg, transparent 28%, rgba(255, 255, 255, .78) 47%, transparent 63%); filter: blur(.08rem); transform: translateX(-36%) rotate(-8deg); }
.home-hero__actions .button:hover,
.home-hero__actions .button--primary:hover,
.home-hero__actions .button--secondary:hover { background: linear-gradient(rgba(247, 246, 248, .94), rgba(247, 246, 248, .94)) padding-box, linear-gradient(112deg, #17151a 0%, #706c75 16%, #fff 32%, #54505a 50%, #e8e6ea 68%, #fff 80%, #333037 100%) border-box; box-shadow: inset 0 2px 1px #fff, inset 0 -3px 4px rgba(68, 57, 72, .16), 0 1rem 1.8rem rgba(73, 65, 78, .26), 0 .18rem .3rem rgba(255, 255, 255, .95); }
.home-hero__actions .button--primary { background: linear-gradient(rgba(234, 232, 236, .86), rgba(234, 232, 236, .86)) padding-box, linear-gradient(112deg, #7c2608 0%, #d95a12 16%, #ffe8ca 32%, #fff 43%, #c3440d 59%, #ffb07a 76%, #8c2b08 100%) border-box; }
.home-hero__actions .button--secondary { background: linear-gradient(rgba(234, 232, 236, .86), rgba(234, 232, 236, .86)) padding-box, linear-gradient(112deg, #560735 0%, #c20b5a 16%, #ffd7eb 32%, #fff 43%, #9a0750 59%, #f72585 76%, #62043c 100%) border-box; }
.home-hero__actions .button--primary { background: linear-gradient(180deg, #ffbd8b 0%, #f06c2d 39%, #cf3d16 70%, #8f180b 100%) padding-box, linear-gradient(112deg, #722006 0%, #e55b1d 17%, #fff0d9 34%, #fff 45%, #bd320e 62%, #ffb06c 78%, #7b1d06 100%) border-box; color: #fff; -webkit-text-fill-color: #fff; text-shadow: 0 1px 2px rgba(87, 14, 3, .56); box-shadow: inset 0 2px 1px rgba(255, 244, 235, .9), inset 0 -3px 4px rgba(99, 13, 2, .35), 0 .2rem .35rem rgba(255, 255, 255, .92), 0 .85rem 1.35rem rgba(185, 56, 11, .34); }
.home-hero__actions .button--secondary { background: linear-gradient(180deg, #fa83bb 0%, #e92b83 40%, #bb075a 70%, #750538 100%) padding-box, linear-gradient(112deg, #57032e 0%, #cd0a63 17%, #ffe0f0 34%, #fff 45%, #a1064e 62%, #f466a8 78%, #57022d 100%) border-box; color: #fff; -webkit-text-fill-color: #fff; text-shadow: 0 1px 2px rgba(65, 0, 32, .6); box-shadow: inset 0 2px 1px rgba(255, 235, 246, .9), inset 0 -3px 4px rgba(78, 0, 39, .36), 0 .2rem .35rem rgba(255, 255, 255, .92), 0 .85rem 1.35rem rgba(157, 5, 78, .3); }
.home-hero__actions .button--primary::before { background: linear-gradient(180deg, rgba(255, 255, 255, .82), rgba(255, 220, 187, .12) 42%, transparent 56%); }
.home-hero__actions .button--secondary::before { background: linear-gradient(180deg, rgba(255, 255, 255, .82), rgba(255, 200, 228, .12) 42%, transparent 56%); }
.home-hero__actions .button--primary:hover { background: linear-gradient(180deg, #ffd0a8 0%, #fb7e3e 39%, #dc4b20 70%, #9d200e 100%) padding-box, linear-gradient(112deg, #722006 0%, #e55b1d 17%, #fff0d9 34%, #fff 45%, #bd320e 62%, #ffb06c 78%, #7b1d06 100%) border-box; }
.home-hero__actions .button--secondary:hover { background: linear-gradient(180deg, #ff9aca 0%, #f13f95 40%, #ca1167 70%, #850742 100%) padding-box, linear-gradient(112deg, #57032e 0%, #cd0a63 17%, #ffe0f0 34%, #fff 45%, #a1064e 62%, #f466a8 78%, #57022d 100%) border-box; }

.home-about-story,
.home-skills {
  padding: clamp(4rem, 9vw, 8rem) clamp(1.5rem, 8vw, 8rem);
}

.home-about {
  --about-cover-gradient: radial-gradient(circle at 14% 12%, var(--brand-amber), transparent 34%), radial-gradient(circle at 82% 82%, var(--brand-pink), transparent 36%), linear-gradient(120deg, var(--brand-orange), var(--brand-wine) 54%, var(--brand-magenta));
  position: relative;
  isolation: isolate;
  min-height: clamp(25rem, 48vw, 35rem);
  overflow: hidden;
  background: var(--about-cover-gradient);
  color: #fff;
}
.home-about::after { position: absolute; z-index: 0; inset: 0; content: ''; background: radial-gradient(circle at 50% 38%, rgba(255, 190, 150, .2), transparent 40%); pointer-events: none; }
.home-about__image { position: absolute; z-index: 1; bottom: 0; left: clamp(1.25rem, 8vw, 9rem); display: block; width: auto; max-width: 38%; height: 106%; object-fit: contain; object-position: bottom left; transform: none; }
.home-about__cover-content { position: relative; z-index: 2; display: grid; min-height: inherit; grid-template-columns: 1fr 1fr; align-items: end; gap: 2rem; padding: clamp(2rem, 6vw, 5rem); text-align: left; }
.home-about__panel--right { justify-self: end; max-width: min(100%, 30rem); padding-bottom: .4rem; }
.home-about__eyebrow { margin: 0 0 .75rem; color: var(--brand-orange); font-size: .78rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.home-about__panel h2, .home-about__panel h3 { margin: 0; font-family: Arial, sans-serif; letter-spacing: -.045em; }
.home-about__panel h2 { max-width: 10ch; font-size: clamp(3rem, 6vw, 5.8rem); line-height: .95; }
.home-about__greeting { display: block; font-size: .58em; line-height: 1.05; }
.home-about__panel h2 em { font-style: normal; font-weight: 400; }.home-about__panel h2 strong { display: block; color: #fff; font-weight: 800; letter-spacing: -.075em; }
.home-about__panel h3 { font-size: clamp(1.2rem, 2vw, 1.7rem); line-height: 1.1; }
.home-about__identity-card { position: relative; isolation: isolate; align-self: end; width: min(100%, 21rem); min-height: clamp(9.5rem, 12vw, 11rem); overflow: hidden; border: 1px solid rgba(255, 255, 255, .7); border-radius: 1.4rem; padding: clamp(.8rem, 1.4vw, 1.05rem); background: rgba(255, 255, 255, .16); box-shadow: inset 0 1px 1px rgba(255, 255, 255, .55), 0 .55rem 1.3rem rgba(77, 12, 45, .2); backdrop-filter: blur(.9rem) saturate(115%); -webkit-backdrop-filter: blur(.9rem) saturate(115%); color: #fff; transform: translateY(2rem); }.home-about__identity-card::before { position: absolute; z-index: 0; inset: 1px; border-radius: inherit; background: linear-gradient(120deg, rgba(255, 255, 255, .3), transparent 42%, transparent 72%, rgba(255, 255, 255, .13)); content: ''; pointer-events: none; }.home-about__identity-card > * { position: relative; z-index: 1; }.home-about__identity-card .home-about__eyebrow, .home-about__identity-card .home-about__identity-role { color: #fff; }.home-about__identity-card h2 { max-width: none; white-space: nowrap; font-size: clamp(1.75rem, 2.6vw, 2.75rem); }.home-about__identity-card .home-about__greeting, .home-about__identity-card h2 strong { display: inline; }.home-about__identity-role { margin: .55rem 0 0; font-size: .62rem; font-weight: 800; letter-spacing: .07em; line-height: 1.45; text-transform: uppercase; }
.home-about__panel--right p { margin: 0; color: rgba(255, 255, 255, .96); font-size: clamp(1rem, 1.5vw, 1.18rem); line-height: 1.5; }.home-about__panel--right p + p { margin-top: .9rem; }.home-about__panel--right strong { color: #fff; font-weight: 800; }

.home-about-story {
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
  gap: clamp(2rem, 8vw, 8rem);
  background: #fff;
  color: #241d24;
}

.home-section__eyebrow { margin: 0 0 .8rem; color: var(--brand-orange); font-size: .75rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.home-about-story h2, .home-section-heading h2 { max-width: 13ch; margin: 0; font-family: Arial, sans-serif; font-size: clamp(2.1rem, 4.5vw, 4rem); letter-spacing: -.055em; line-height: 1; }
.home-about-story__copy { max-width: 42rem; color: #625863; font-size: 1.05rem; line-height: 1.7; }
.home-about-story__copy p { margin: 0 0 1.1rem; }
.home-about__lead { color: #302731; font-size: clamp(1.2rem, 2vw, 1.45rem); line-height: 1.45; }
.home-text-link { display: inline-flex; gap: .5rem; margin-top: 1rem; border-bottom: 2px solid currentColor; color: var(--brand-wine); font-size: .85rem; font-weight: 800; letter-spacing: .06em; text-decoration: none; text-transform: uppercase; }
.home-text-link:hover { color: var(--brand-orange); }

.creative-portfolio { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(2.5rem, 8vw, 8rem); padding: clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 8rem); background: #f3e6dd; color: #2d1724; text-align: left; }
.creative-portfolio h2 { max-width: 11ch; margin: 0; font-family: Arial, sans-serif; font-size: clamp(2rem, 4vw, 3.6rem); letter-spacing: -.045em; line-height: 1.03; }
.creative-portfolio__content { color: #5d4b4a; font-size: 1.05rem; line-height: 1.75; }
.creative-portfolio__content p { margin: 0 0 1.15rem; }
.creative-portfolio__lead { color: #34232e; font-size: clamp(1.2rem, 2vw, 1.45rem); line-height: 1.45; }
.creative-portfolio__areas { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.8rem 0; padding: 0; list-style: none; }
.creative-portfolio__areas li { border: 1px solid #c78c6c; border-radius: 999px; padding: .5rem .8rem; color: #7b2b24; font-size: .78rem; font-weight: 800; }
.creative-portfolio__behance { display: inline-flex; align-items: center; margin-top: .4rem; border-bottom: 2px solid currentColor; color: #7b2b24; font-size: .85rem; font-weight: 800; letter-spacing: .06em; text-decoration: none; text-transform: uppercase; transition: color .2s ease, transform .2s ease; }
.creative-portfolio__behance:hover { color: #e76f22; transform: translateX(.2rem); }
.behance-projects { display: grid; grid-column: 1 / -1; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; width: min(100%, 50rem); margin: clamp(1rem, 4vw, 2rem) auto 0; }
.behance-projects__item { position: relative; display: block; aspect-ratio: 4 / 3; overflow: hidden; border: 1px solid rgba(45, 23, 36, .14); border-radius: 1.35rem; background: #fff; color: #fff; text-decoration: none; box-shadow: 0 .45rem 1.1rem rgba(45, 23, 36, .1); }
.behance-projects__item img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
.behance-projects__item:hover img { transform: scale(1.035); }
.behance-projects__overlay { position: absolute; inset: auto 0 0; display: flex; min-height: 44%; flex-direction: column; justify-content: end; gap: .3rem; padding: 1.2rem; background: linear-gradient(transparent, rgba(27, 13, 21, .88)); }
.behance-projects__overlay span { color: #ffbe8a; font-size: .68rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.behance-projects__overlay strong { font-family: Arial, sans-serif; font-size: clamp(1.1rem, 2vw, 1.55rem); letter-spacing: -.035em; line-height: 1.05; }
.behance-projects__overlay small { margin-top: .2rem; font-size: .75rem; font-weight: 800; }

.home-section-heading { max-width: 75rem; margin: 0 auto clamp(2rem, 5vw, 4rem); }
.home-section-heading h2 { max-width: none; }

.home-skills {
  --skills-accent: var(--brand-amber);
  --skills-accent-strong: var(--brand-magenta);
  position: relative;
  overflow: hidden;
  background: transparent;
  color: #1e1820;
}
.home-skills::before {
  position: absolute;
  top: -18rem;
  right: -13rem;
  width: 42rem;
  height: 42rem;
  border: 0;
  border-radius: 50%;
  box-shadow: none;
  content: '';
  pointer-events: none;
}
.home-skills .home-section-heading { position: relative; z-index: 1; width: 100%; max-width: none; margin-bottom: clamp(1.5rem, 3vw, 2.5rem); text-align: center; }
.home-skills .home-section-heading h2 { max-width: none; color: #000; font-size: clamp(.95rem, 1.7vw, 1.1rem); font-weight: 400; letter-spacing: .18em; line-height: 1.5; text-align: center; text-transform: uppercase; }
.home-skills .home-section-heading p { margin: .85rem 0 0; color: #000; font-size: clamp(2.8rem, 6vw, 5.7rem); font-weight: 700; line-height: .91; text-align: center; }
.home-skills__topline {
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 75rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin: 0 auto 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, .2);
  padding-top: 1rem;
}
.home-skills__topline > p { max-width: 30rem; color: rgba(255, 246, 241, .68); font-size: .9rem; }
.home-skills__controls { display: flex; align-items: center; gap: .75rem; }
.home-skills__arrow {
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, .42);
  border-radius: 50%;
  padding: 0;
  background: transparent;
  color: var(--brand-cream);
  font-size: 1.1rem;
  transition: color .25s ease, background .25s ease, border-color .25s ease, transform .25s ease;
}
.home-skills__arrow:hover { border-color: var(--skills-accent); background: var(--skills-accent); color: var(--brand-ink); transform: scale(1.06); }
.home-skills__arrow:focus-visible { outline: 2px solid var(--skills-accent); outline-offset: 3px; }
.home-skills__count { min-width: 2.8rem; color: var(--skills-accent); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .72rem; text-align: center; }
.home-skills__track {
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 75rem;
  gap: 1rem;
  margin: 0 auto;
  /* El scroll horizontal también recorta verticalmente: este espacio protege el halo de las tarjetas. */
  padding: 2.6rem 2.3rem 3.1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.home-skills__track::-webkit-scrollbar { display: none; }
.home-skill-group {
  position: relative;
  display: flex;
  min-height: 19rem;
  flex: 0 0 calc((100% - 3rem) / 4);
  flex-direction: column;
  justify-content: flex-start;
  overflow: visible;
  border: 1px solid rgba(255,255,255,.82);
  border-radius: 2rem;
  padding: 1.1rem;
  background: linear-gradient(145deg, rgba(255,255,255,.34), rgba(255,245,240,.12));
  box-shadow: 0 0 0 1px rgba(255,255,255,.28), inset 0 1px 0 rgba(255,255,255,.68), inset 0 -1px 0 rgba(255,255,255,.16), -.45rem .8rem 1.3rem rgba(87,157,255,.22), 0 1rem 1.8rem rgba(237,0,140,.24), .5rem .9rem 1.4rem rgba(255,183,84,.22);
  backdrop-filter: blur(20px) saturate(125%);
  -webkit-backdrop-filter: blur(20px) saturate(125%);
  scroll-snap-align: start;
  text-align: left;
  transition: border-color .35s ease, background .35s ease, box-shadow .35s ease, transform .35s ease;
}
.home-skill-group:hover { border-color: rgba(255,255,255,.96); background: linear-gradient(145deg, rgba(255,255,255,.46), rgba(255,245,240,.2)); box-shadow: 0 0 0 1px rgba(255,255,255,.38), inset 0 1px 0 rgba(255,255,255,.82), inset 0 -1px 0 rgba(255,255,255,.24), -.45rem .9rem 1.4rem rgba(87,157,255,.26), 0 1.15rem 2rem rgba(237,0,140,.28), .55rem 1rem 1.5rem rgba(255,183,84,.26); transform: translateY(-.35rem) scale(1.015); }
.home-skill-group__number { margin-bottom: .75rem; color: rgba(0, 0, 0, .45); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .72rem; }
.home-skill-group__label { margin: 0 0 .9rem; color: #fff; font-size: .64rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.home-skill-group h3 { max-width: 8ch; margin: 0; color: #000; font-size: clamp(1.4rem, 2.2vw, 2rem); letter-spacing: -.065em; line-height: .95; }
.home-skill-group__description { min-height: 3.4em; margin: 1rem 0 0; color: rgba(0, 0, 0, .7); font-size: .82rem; line-height: 1.45; }
.home-skill-group ul { display: flex; flex-wrap: wrap; gap: .45rem; margin: 1.15rem 0 0; padding: 0; list-style: none; }
.home-skill-group li { display: inline-flex; align-items: center; gap: .5rem; border: 1px solid rgba(0, 0, 0, .16); border-radius: 999px; padding: .5rem .78rem; background: rgba(255,255,255,.32); box-shadow: inset 0 1px 0 rgba(255,255,255,.32); color: #000; font-size: .82rem; font-weight: 650; }
.home-skill-group li img, .home-skill-group li b { display: grid; width: 1.15rem; height: 1.15rem; flex: 0 0 1.15rem; place-items: center; object-fit: contain; }
.home-skill-group li b { color: rgba(0,0,0,.8); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .54rem; letter-spacing: -.04em; }
.home-skills__hint { position: relative; z-index: 1; max-width: 75rem; margin: .1rem auto 0; color: rgba(0,0,0,.55); font-size: .69rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.home-skills__hint span { margin-right: .4rem; color: #000; }

@media (max-width: 720px) {
  .home-about { min-height: 39rem; overflow: visible; }
  .home-about::after { display: none; }
  .home-about__cover-content { z-index: 2; display: flex; min-height: 0; flex-direction: column; align-items: flex-start; gap: .75rem; padding: 7.25rem 2rem 0; }
  .home-about__identity-card { min-height: auto; transform: none; }
  .home-about__image { bottom: -3.5rem; left: 1rem; width: min(100%, 23rem); max-width: none; height: auto; margin: 0; }
  .home-about__panel--right { max-width: 20rem; padding: 0; }
  .home-about-story { grid-template-columns: 1fr; gap: 1.75rem; }
  .creative-portfolio { grid-template-columns: 1fr; gap: 2rem; }
  .behance-projects { grid-template-columns: 1fr; margin-top: 0; }
  .home-skill-group { flex-basis: calc((100% - 1rem) / 2); }
}

@media (max-width: 480px) {
  .home-about { min-height: 36rem; }
  .home-about__cover-content { padding: 6.25rem 1.25rem 0; }
  .home-about__image { left: .75rem; width: min(calc(100% - 1.5rem), 20rem); }
  .home-about-story, .home-skills { padding: 3.5rem 1.25rem; }
  .home-skills__topline { align-items: flex-start; flex-direction: column; }
  .home-skill-group { min-height: 18rem; flex-basis: 84%; }
}

/* Immersive home hero. Other sections remain intentionally unchanged. */
.home-hero--immersive { min-height: max(42rem, 100svh); background: radial-gradient(circle at 8% 13%, rgba(255, 178, 105, .68), transparent 40%), radial-gradient(circle at 88% 16%, rgba(238, 106, 31, .78), transparent 45%), radial-gradient(circle at 65% 90%, rgba(119, 45, 16, .72), transparent 49%), linear-gradient(135deg, #c94f18, #ef742d 48%, #873312); isolation: isolate; }
.hero-stage { position: absolute; inset: 0; }
.hero-stage { display: grid; width: min(100% - clamp(2.5rem, 9vw, 9rem), 82rem); grid-template-columns: repeat(12, minmax(0, 1fr)); grid-template-rows: repeat(6, 1fr); gap: 1rem; margin: auto; padding: clamp(5.5rem, 9vw, 8rem) 0 clamp(2rem, 6vw, 4rem); }
.hero-intro-card, .hero-role-card, .hero-cta-card { z-index: 3; align-self: center; border-radius: 1.65rem; padding: clamp(1.4rem, 2.5vw, 2.15rem); color: var(--brand-ink); text-align: left; }
.hero-intro-card { position: relative; display: grid; min-height: min(38rem, calc(100svh - 9rem)); grid-column: 1 / -1; grid-row: 1 / -1; grid-template-columns: repeat(12, minmax(0, 1fr)); align-items: center; overflow: visible; }.hero-intro-card__content { z-index: 4; grid-column: 1 / span 5; text-align: left; }.hero-intro-card__eyebrow { margin: 0 0 .9rem; color: #fff; font-size: .72rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }.hero-intro-card h1 { max-width: 12ch; margin: 0; color: #fff; font-family: Arial, sans-serif; font-size: clamp(1.65rem, 2.9vw, 3.25rem); font-weight: 800; letter-spacing: -.075em; line-height: .94; text-align: left; }.hero-intro-card__content > p:not(.hero-intro-card__role) { max-width:30rem; margin: 1.35rem 0 0; color: #fff; font-size: clamp(1rem, 1.3vw, 1.15rem); line-height: 1.55; }.hero-intro-card__role { margin: 1rem 0 0; color: #fff; font-size: .72rem; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }.hero-intro-card__actions { display: flex; flex-wrap: wrap; gap: .7rem; margin-top: 1.35rem; }.hero-intro-card__actions .glass-button { padding: .78rem 1rem; font-size: .82rem; box-shadow: inset 0 1px 1px rgba(255,255,255,.9), inset 0 -3px 6px rgba(91,15,51,.2), 0 .65rem 1.2rem rgba(117, 75, 65, .2); }.hero-intro-card .hero-mascot { position: relative; z-index: 2; top: -1.35rem; left: 2.5rem; grid-column: 7 / span 5; grid-row: 1; justify-self: center; width: min(150%, 48rem); }

/* Tarjeta de presentación trasladada a la sección editorial posterior al hero. */
.home-about-story .home-about__identity-card { z-index: 1; grid-column: 1 / -1; justify-self: center; width: min(100%, 46rem); min-height: auto; margin-top: 1rem; border-color: rgba(185,0,56,.15); border-radius: var(--liquid-card-radius); padding: clamp(1.5rem, 3vw, 2.25rem); background: #fff; box-shadow: inset 0 1px 1px rgba(255,255,255,.9), inset 0 -8px 18px rgba(40,0,15,.05), 0 1rem 2.4rem rgba(77,12,45,.14); color: var(--brand-ink); transform: none; }
.home-about-story .home-about__bio { margin-top: 0; border-top: 0; padding-top: 0; text-align: left; }
.home-about-story .home-about__bio p { color: #4d3c45; }
.home-about-story .home-about__bio strong { color: var(--brand-wine); }
.home-about__bio { margin-top: 1.2rem; border-top: 1px solid rgba(255, 255, 255, .3); padding-top: 1rem; }
.home-about__bio p { margin: 0; color: rgba(255, 255, 255, .96); font-size: clamp(.84rem, 1.05vw, 1rem); line-height: 1.45; }
.home-about__bio p + p { margin-top: .65rem; }
.home-about__bio strong { color: #fff; }

/* Carrusel editorial de portadas, inspirado en el ritmo visual de un hero de producto. */
.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); padding: 0; white-space: nowrap; border: 0; }
.home-about-story { background: #fff; }
.home-about-story__intro { max-width: 75rem; margin: 0 auto clamp(2.25rem, 5vw, 4rem); text-align: left; }
.home-about-story__intro > div { max-width: 42rem; }
.home-about-story__intro .home-about__lead { margin-top: 1.2rem; }
.project-slider { columns: 3 14rem; column-gap: clamp(.85rem, 2vw, 1.35rem); max-width: 75rem; margin: 0 auto; padding: .35rem 0 1rem; }
.project-slider__slide { position: relative; display: block; break-inside: avoid; overflow: hidden; margin: 0 0 clamp(.85rem, 2vw, 1.35rem); border-radius: var(--liquid-card-radius); background: var(--brand-ink); color: #fff; box-shadow: 0 1rem 2.25rem rgba(40, 0, 15, .18); text-decoration: none; transition: transform .25s ease, box-shadow .25s ease; }
.project-slider__slide img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform .45s ease; }
.project-slider__slide .project-slider__logo { position: absolute; z-index: 1; top: 8%; left: 50%; width: 78%; height: auto; filter: drop-shadow(0 .55rem .7rem rgba(25, 47, 15, .4)); transform: translateX(-50%); }
.project-slider__slide:nth-child(1) { aspect-ratio: 4 / 5.7; }
.project-slider__slide:nth-child(2) { aspect-ratio: 4 / 4.55; }
.project-slider__slide:nth-child(3) { aspect-ratio: 4 / 5.2; }
.project-slider__slide:nth-child(4) { aspect-ratio: 4 / 5.45; }
.project-slider__slide--mascot { background: radial-gradient(circle at 50% 22%, rgba(255, 196, 121, .85), transparent 31%), radial-gradient(circle at 80% 74%, rgba(247, 37, 133, .7), transparent 42%), linear-gradient(145deg, var(--brand-orange), var(--brand-wine) 58%, var(--brand-magenta)); }
.project-slider__mascot { position: absolute; z-index: 1; top: 4%; left: 50%; width: 92%; animation: mascot-card-float 3.8s ease-in-out infinite; }
@keyframes mascot-card-float { 0%, 100% { transform: translateX(-50%) translateY(0) rotate(-1deg); } 50% { transform: translateX(-50%) translateY(-.8rem) rotate(1deg); } }
.project-slider__overlay { position: absolute; inset: auto 0 0; display: flex; min-height: 48%; flex-direction: column; justify-content: end; gap: .35rem; padding: clamp(1rem, 2vw, 1.4rem); background: linear-gradient(transparent, rgba(40, 0, 15, .92) 35%); text-align: left; }
.project-slider__overlay > span { color: #fff; font-size: .65rem; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
.project-slider__overlay strong { font-family: Arial, sans-serif; font-size: clamp(1.35rem, 2.3vw, 2rem); letter-spacing: -.055em; line-height: 1; }
.project-slider__overlay .project-slider__description { min-height: 3.9em; color: rgba(255, 255, 255, .84); font-size: clamp(.78rem, 1vw, .92rem); font-weight: 500; letter-spacing: normal; line-height: 1.4; text-transform: none; }
.project-slider__overlay small { margin-top: .25rem; font-size: .75rem; font-weight: 800; }
.project-slider__slide:hover { box-shadow: 0 1.4rem 2.8rem rgba(40, 0, 15, .25); transform: translateY(-.35rem); }
.project-slider__slide:hover img { transform: scale(1.05); }
.project-slider__slide:focus-visible { outline: 3px solid var(--brand-amber); outline-offset: 4px; }

.mascot-process { position: relative; overflow: hidden; padding: clamp(4rem, 9vw, 8rem) clamp(1.5rem, 8vw, 8rem); background: radial-gradient(circle at 50% 22%, rgba(255, 196, 121, .85), transparent 31%), radial-gradient(circle at 80% 74%, rgba(247, 37, 133, .7), transparent 42%), linear-gradient(145deg, var(--brand-orange), var(--brand-wine) 58%, var(--brand-magenta)); color: #fff; scroll-margin-top: 1rem; }
.mascot-process::before { position: absolute; z-index: 0; inset: 0; background: radial-gradient(ellipse at 18% 24%, transparent 0%, rgba(24, 8, 20, .28) 46%, rgba(20, 5, 17, .66) 100%), linear-gradient(115deg, rgba(18, 5, 15, .3), transparent 52%, rgba(18, 5, 15, .38)); content: ''; pointer-events: none; }
.mascot-process__title { position: relative; z-index: 1; margin: 0 0 clamp(2rem, 5vw, 4rem); color: #fff; font-family: Arial, sans-serif; font-size: clamp(2.4rem, 5vw, 4.8rem); font-weight: 400; letter-spacing: -.065em; line-height: .94; text-align: center; }
.mascot-process__cards { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); width: 100%; }
.mascot-process__card { position: relative; display: grid; min-height: clamp(25rem, 38vw, 32rem); grid-template-rows: auto 1fr; align-items: center; overflow: hidden; border: 1px solid rgba(255,255,255,.28); border-radius: 1.5rem; padding: clamp(1.25rem, 2.2vw, 2rem); background: linear-gradient(145deg, rgba(255,255,255,.16), rgba(49,5,35,.28)); box-shadow: inset 0 1px 1px rgba(255,255,255,.25), 0 1rem 2.2rem rgba(0,0,0,.18); isolation: isolate; }
.mascot-process__card::after { position: absolute; z-index: -1; right: -15%; bottom: -50%; width: 60%; aspect-ratio: 1; border-radius: 50%; background: rgba(247,37,133,.25); content: ''; filter: blur(1rem); }
.mascot-process__card-copy { position: relative; z-index: 2; text-align: left; }.mascot-process__card-copy > span { color: #ffbd8a; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .7rem; font-weight: 800; letter-spacing: .08em; }.mascot-process__card-copy h3 { margin: .45rem 0 0; font-size: 1.05rem; line-height: 1.05; }.mascot-process__card-copy p { margin: .45rem 0 0; color: rgba(255,255,255,.72); font-size: .77rem; line-height: 1.4; }
.mascot-process__motions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .35rem; width: 100%; align-self: end; }.mascot-process__motions > div { position: relative; display: grid; min-height: 5.2rem; place-items: end center; overflow: hidden; border: 1px solid rgba(255,255,255,.18); border-radius: .65rem; background: rgba(255,255,255,.08); }.mascot-process__motions > div:last-child { grid-column: 1 / -1; width: 50%; justify-self: center; }.mascot-process__motions > div > span { position: absolute; z-index: 2; top: .3rem; left: .4rem; color: rgba(255,255,255,.88); font-size: .48rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }.mascot-process__motions .hero-mascot { width: 5.3rem; margin-bottom: -.45rem; }
.mascot-process__tools { display: flex; grid-column: 1 / -1; flex-wrap: wrap; justify-content: center; gap: .4rem; margin: .35rem 0 0; padding: 0; list-style: none; }.mascot-process__tools li { border: 1px solid rgba(255,255,255,.35); border-radius: 999px; padding: .3rem .55rem; background: rgba(255,255,255,.12); color: #fff; font-size: .66rem; font-weight: 800; letter-spacing: .03em; }
.mascot-process__mascot { z-index: 1; width: min(100%, 19rem); align-self: end; justify-self: center; }
.mascot-process__exploded { position: relative; width: min(100%, 19rem); aspect-ratio: 1; align-self: end; justify-self: center; }.mascot-process__piece { position: absolute; display: block; width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 .45rem .55rem rgba(24,0,16,.3)); }.mascot-process__piece--body { transform: translateY(12%); }.mascot-process__piece--head { transform: translateY(-15%); }.mascot-process__piece--left-arm { transform: translate(-22%, 3%) rotate(-15deg); }.mascot-process__piece--right-arm { transform: translate(22%, 3%) rotate(15deg); }

/* Ficha de personaje: introducción, vistas y acciones de VTina. */
.mascot-process { padding: 0; background: #fff; color: #211b23; }
.mascot-process::before { display: none; }
.mascot-process__hero { position: relative; display: grid; min-height: clamp(25rem, 48vw, 43rem); place-items: end center; overflow: hidden; padding: clamp(1.5rem, 4vw, 3.5rem); background: radial-gradient(ellipse at 18% 24%, transparent 0%, rgba(24, 8, 20, .28) 46%, rgba(20, 5, 17, .66) 100%), linear-gradient(115deg, rgba(18, 5, 15, .3), transparent 52%, rgba(18, 5, 15, .38)), radial-gradient(circle at 50% 22%, rgba(255, 196, 121, .85), transparent 31%), radial-gradient(circle at 80% 74%, rgba(247, 37, 133, .7), transparent 42%), linear-gradient(145deg, var(--brand-orange), var(--brand-wine) 58%, var(--brand-magenta)); }
.mascot-process__hero::after { position: absolute; right: 20%; bottom: 7%; left: 20%; height: clamp(1rem, 2vw, 1.8rem); border-radius: 50%; background: rgba(104,37,35,.26); content: ''; filter: blur(1rem); }
.mascot-process__hero > p { position: absolute; z-index: 2; top: clamp(1.5rem, 4vw, 3rem); left: clamp(1.5rem, 5vw, 5rem); margin: 0; color: #fff; font-size: clamp(.65rem, 1vw, .9rem); font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
.mascot-process__hero-mascot { position: relative; z-index: 1; width: min(78vw, 35rem); margin-bottom: clamp(-3.5rem, -4vw, -1.5rem); }
.mascot-process__content { width: min(100% - 2.5rem, 70rem); margin: 0 auto; padding: clamp(4rem, 8vw, 7rem) 0; }
.mascot-process__content section + section { margin-top: clamp(4rem, 8vw, 7rem); }
.mascot-process__section-title { margin-bottom: clamp(1.5rem, 3vw, 2.5rem); text-align: center; }.mascot-process__section-title p { margin: 0 0 .45rem; color: var(--brand-orange); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .72rem; font-weight: 800; letter-spacing: .12em; }.mascot-process__section-title h2 { margin: 0; color: #201b22; font-family: Arial, sans-serif; font-size: clamp(1.55rem, 3vw, 2.5rem); font-weight: 400; letter-spacing: -.045em; text-transform: uppercase; }
.mascot-process__profile-grid { display: grid; grid-template-columns: minmax(12rem, .8fr) minmax(0, 1fr); align-items: center; gap: clamp(1.5rem, 5vw, 4rem); width: min(100%, 46rem); margin: auto; }.mascot-process__portrait { display: grid; min-height: 16rem; place-items: end center; overflow: hidden; border-radius: 1.5rem; background: linear-gradient(145deg, #ffd39d, #ee8d56); }.mascot-process__portrait .hero-mascot { width: min(100%, 15rem); margin-bottom: -1.3rem; }.mascot-process__bio h3 { margin: 0; font-size: clamp(1.7rem, 3vw, 2.6rem); font-weight: 400; letter-spacing: -.06em; }.mascot-process__bio > p { margin: .5rem 0 1.25rem; color: #665660; line-height: 1.5; }.mascot-process__bio dl { margin: 0; }.mascot-process__bio dl > div { display: grid; grid-template-columns: 7.5rem 1fr; gap: 1rem; border-top: 1px dashed rgba(45,23,36,.3); padding: .75rem 0; }.mascot-process__bio dt { color: #7d2848; font-size: .72rem; font-weight: 800; text-transform: uppercase; }.mascot-process__bio dd { margin: 0; color: #40343e; font-size: .88rem; }.mascot-process__bio .mascot-process__tools { justify-content: flex-start; margin-top: 1rem; }.mascot-process__bio .mascot-process__tools li { border-color: rgba(125,40,72,.25); background: #fff1e9; color: #6d1b45; }
.mascot-process__views-panel, .mascot-process__actions-panel { display: grid; gap: clamp(.6rem, 1.5vw, 1rem); border-radius: 1.5rem; padding: clamp(1rem, 3vw, 2rem); background: #f5f3f4; }.mascot-process__views-panel { grid-template-columns: repeat(4, minmax(0, 1fr)); }.mascot-process__actions-panel { grid-template-columns: repeat(3, minmax(0, 1fr)); }.mascot-process__views figure, .mascot-process__actions figure { display: grid; min-width: 0; margin: 0; place-items: end center; }.mascot-process__views .hero-mascot { width: min(100%, 11rem); }.mascot-process__actions .hero-mascot { width: min(100%, 10rem); }.mascot-process__view--profile .hero-mascot { transform: rotateY(-26deg); }.mascot-process__view--mirror .hero-mascot { transform: scaleX(-1); }.mascot-process__views figcaption, .mascot-process__actions figcaption { width: 100%; margin-top: .45rem; color: #5e535d; font-size: .65rem; font-weight: 800; letter-spacing: .04em; text-align: center; text-transform: uppercase; }.mascot-process__live-pose { animation: mascot-live-pose 3.8s ease-in-out infinite; } @keyframes mascot-live-pose { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-.55rem) rotate(2deg); } }
.mascot-process__exploded-panel { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(.6rem, 1.5vw, 1rem); align-items: end; border-radius: 1.5rem; padding: clamp(1rem, 3vw, 2rem); background: #f5f3f4; }.mascot-process__exploded-panel figure { display: grid; min-width: 0; margin: 0; place-items: end center; }.mascot-process__exploded-panel img { display: block; width: min(100%, 10rem); aspect-ratio: 1; object-fit: contain; filter: drop-shadow(0 .45rem .55rem rgba(45,23,36,.18)); }.mascot-process__exploded-panel figcaption { width: 100%; margin-top: .45rem; color: #5e535d; font-size: .65rem; font-weight: 800; letter-spacing: .04em; text-align: center; text-transform: uppercase; }
.mascot-process__portrait { position: relative; border: 1px solid rgba(255,225,205,.34); background: linear-gradient(145deg, rgba(133,61,27,.22), rgba(70,29,20,.12)); box-shadow: inset 0 1px 1px rgba(255,236,222,.24), inset 0 -12px 22px rgba(47,15,10,.06), 0 1rem 2.2rem rgba(73,25,17,.12); backdrop-filter: blur(32px) saturate(125%) brightness(1.02); -webkit-backdrop-filter: blur(32px) saturate(125%) brightness(1.02); }.mascot-process__portrait::before { position: absolute; z-index: 0; inset: 1px; border: 1px solid rgba(255,225,205,.24); border-radius: inherit; background: linear-gradient(125deg, rgba(255,238,226,.3), transparent 38%, transparent 74%, rgba(255,145,84,.06)); box-shadow: inset 0 1px 1px rgba(255,240,229,.22); content: ''; pointer-events: none; }.mascot-process__portrait::after { position: absolute; z-index: 0; right: 10%; bottom: 8%; left: 10%; height: 1.25rem; border-radius: 50%; background: rgba(60,19,10,.1); content: ''; filter: blur(.75rem); }.mascot-process__portrait .hero-mascot { position: relative; z-index: 1; }
.mascot-process__bio .mascot-process__tools li { border: 1px solid rgba(255,225,205,.3); background: linear-gradient(145deg, rgba(133,61,27,.22), rgba(70,29,20,.12)); box-shadow: inset 0 1px 1px rgba(255,236,222,.24), inset 0 -4px 10px rgba(47,15,10,.06), 0 .4rem .9rem rgba(73,25,17,.12); color: #fff; text-shadow: 0 1px rgba(0,0,0,.2); backdrop-filter: blur(16px) saturate(125%); -webkit-backdrop-filter: blur(16px) saturate(125%); }
.mascot-process__bio .mascot-process__tools li { display: grid; width: 2.8rem; height: 2.8rem; place-items: center; border-radius: .72rem; padding: 0; }.mascot-process__bio .mascot-process__tools img { display: block; width: 1.55rem; height: 1.55rem; object-fit: contain; }
.mascot-process__subsection-title { margin: clamp(2rem, 5vw, 3.5rem) 0 1rem; text-align: center; }.mascot-process__subsection-title span { display: block; margin-bottom: .35rem; color: var(--brand-orange); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .72rem; font-weight: 800; letter-spacing: .12em; }.mascot-process__subsection-title h3 { margin: 0; color: #40343e; font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 400; letter-spacing: -.025em; }
.mascot-process__views .mascot-process__section-title h2 { color: #40343e; font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 400; letter-spacing: -.025em; text-transform: none; }

@media (max-width: 720px) {
  .home-about-story .home-about__identity-card { width: 100%; margin-top: 0; }
  .project-slider { columns: 2 13rem; }
  .mascot-process__card { min-height: 23rem; }
}

@media (max-width: 480px) {
  .project-slider { columns: 1; }
  .mascot-process { padding-right: 1.25rem; padding-left: 1.25rem; }
  .mascot-process__cards { grid-template-columns: 1fr; }
  .mascot-process__card { min-height: 18rem; grid-template-columns: minmax(0, 1fr) minmax(9rem, .8fr); grid-template-rows: 1fr; }
}

@media (max-width: 720px) {
  .mascot-process { padding: 0; }
  .mascot-process__content { width: min(100% - 2.5rem, 38rem); }
  .mascot-process__profile-grid { grid-template-columns: 1fr; max-width: 24rem; }
  .mascot-process__bio { text-align: left; }
  .mascot-process__views-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mascot-process__exploded-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mascot-process__actions-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 420px) {
  .mascot-process__hero { min-height: 22rem; }
  .mascot-process__actions-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: .8rem; }
  .mascot-process__views .hero-mascot, .mascot-process__actions .hero-mascot { width: min(100%, 8.5rem); }
}

@media (prefers-reduced-motion: reduce) {
  .project-slider__slide, .project-slider__slide img { transition: none; }
  .project-slider__mascot { animation: none; }
  .mascot-process__live-pose { animation: none; }
}
@media (max-width: 800px) { .home-hero--immersive { min-height: 48rem; }.hero-stage { width: min(100% - 2.5rem, 38rem); grid-template-columns: 1fr; grid-template-rows: 1fr; padding-top: 5.5rem; }.hero-intro-card { min-height: 39rem; grid-column: 1; grid-row: 1; grid-template-columns: 1fr; grid-template-rows: auto 1fr; }.hero-intro-card__content { grid-column: 1; grid-row: 1; }.hero-intro-card .hero-mascot { top: 0; left: 0; grid-column: 1; grid-row: 2; width: min(112%, 31rem); } }
@media (max-width: 560px) { .home-hero--immersive { min-height: 51rem; }.hero-stage { display: grid; padding: 5.4rem 0 2rem; }.hero-intro-card { min-height: 43rem; padding: 1.35rem; }.hero-intro-card .hero-mascot { width: min(110%, 24rem); min-height: 17rem; }.hero-intro-card h1 { font-size: clamp(1.5rem, 5.5vw, 2.2rem); }.hero-intro-card__actions { display: grid; grid-template-columns: 1fr; }.hero-intro-card__actions .glass-button { width: 100%; } }

/* Hero: mismo fondo de About, retrato y tarjetas tecnológicas en primer plano. */
.home-hero--immersive {
  background: radial-gradient(circle at 14% 12%, var(--brand-amber), transparent 34%), radial-gradient(circle at 82% 82%, var(--brand-pink), transparent 36%), linear-gradient(120deg, var(--brand-orange), var(--brand-wine) 54%, var(--brand-magenta));
}
.home-hero--immersive .hero-stage { padding-bottom: 0; }
.hero-intro-card__content { grid-column: 1 / span 5; }
.hero-intro-card__eyebrow { margin: .9rem 0 0; color: rgba(255,255,255,.82); font-size: clamp(1.05rem, 1.65vw, 1.45rem); letter-spacing: .1em; }
.hero-intro-card__summary { max-width: 28rem; margin: .85rem 0 0 !important; color: rgba(255,255,255,.94) !important; font-size: clamp(.95rem, 1.25vw, 1.12rem) !important; line-height: 1.5 !important; }
.hero-intro-card__summary strong { color: #fff; }
.hero-intro-card h1 { max-width: none; font-size: clamp(3rem, 5.8vw, 6rem); }
.hero-intro-card__greeting { display: block; white-space: nowrap; }
.hero-intro-card h1 em { display: inline; margin-left: .12em; font-style: normal; }
.hero-intro-card h1 strong { display: block; color: var(--brand-cream); font-size: 1.12em; letter-spacing: -.09em; line-height: .87; white-space: nowrap; }
.hero-intro-card__role { max-width: 24rem; color: var(--brand-cream); font-size: clamp(.72rem, 1vw, .88rem); line-height: 1.45; }
.home-hero__portrait-stage { position: relative; z-index: 2; display: flex; min-height: min(38rem, calc(100svh - 6rem)); grid-column: 1 / -1; grid-row: 1; align-items: center; justify-content: space-between; gap: clamp(2rem, 8vw, 9rem); }
.hero-home-copy { display: flex; flex-direction: column; align-items: flex-start; }
.hero-home-intro { max-width: 8ch; margin: 0; color: #fff; font-size: clamp(3.2rem, 7.5vw, 7.2rem); font-weight: 400; letter-spacing: -.075em; line-height: .86; text-align: left; text-shadow: 0 .14rem 1rem rgba(55, 20, 11, .28); }
.hero-home-summary { max-width: 26rem; margin: 1.25rem 0 0; color: rgba(255,255,255,.9); font-size: clamp(.95rem, 1.2vw, 1.08rem); line-height: 1.55; text-align: left; text-shadow: 0 .1rem .7rem rgba(55, 20, 11, .22); }
.hero-home-summary strong { color: #fff; }
.hero-home-socials { display: flex; gap: .85rem; margin-top: 1.25rem; }
.hero-home-socials a { display: grid; width: 2.2rem; height: 2.2rem; place-items: center; border: 1px solid rgba(255,255,255,.58); border-radius: 50%; background: rgba(255,255,255,.12); box-shadow: inset 0 1px 0 rgba(255,255,255,.42), 0 .3rem .8rem rgba(50,22,18,.12); color: #fff; transition: transform .25s cubic-bezier(.2,.8,.3,1), background .25s ease, border-color .25s ease; }
.hero-home-socials svg { width: 1.1rem; height: 1.1rem; fill: currentColor; }
.hero-home-socials a:hover, .hero-home-socials a:focus-visible { border-color: #fff; background: rgba(255,255,255,.26); color: #fff; transform: translateY(-.2rem) scale(1.08); }
.hero-home-socials a:focus-visible { outline: 2px solid #fff; outline-offset: .2rem; }
.hero-profile-card .hero-home-socials { position: relative; z-index: 1; justify-content: center; margin-top: 1rem; }
.hero-profile-card { flex: 0 0 auto; margin-right: clamp(0rem, 6vw, 5.5rem); }
.hero-profile-card { position: relative; width: min(100%, 23rem); overflow: hidden; border: 1px solid rgba(255,255,255,.82); border-radius: 2.35rem; padding: clamp(1.6rem, 3vw, 2.35rem); background: linear-gradient(145deg, rgba(255,255,255,.34), rgba(255,245,240,.12)); box-shadow: 0 0 0 1px rgba(255,255,255,.28), inset 0 1px 0 rgba(255,255,255,.68), inset 0 -1px 0 rgba(255,255,255,.16), -.55rem 1rem 1.6rem rgba(87,157,255,.16), 0 1.35rem 2.6rem rgba(237,0,140,.2), .65rem 1.1rem 1.8rem rgba(255,183,84,.16), 0 2rem 3.8rem rgba(50,22,18,.26); text-align: center; backdrop-filter: blur(28px) saturate(118%); -webkit-backdrop-filter: blur(28px) saturate(118%); transition: transform .4s cubic-bezier(.2,.8,.3,1), box-shadow .4s ease, border-color .4s ease; }
.hero-profile-card:hover { border-color: rgba(255,255,255,.98); box-shadow: 0 0 0 1px rgba(255,255,255,.42), inset 0 1px 0 rgba(255,255,255,.82), inset 0 -1px 0 rgba(255,255,255,.22), -.65rem 1.15rem 1.8rem rgba(87,157,255,.22), 0 1.6rem 3rem rgba(237,0,140,.28), .75rem 1.3rem 2rem rgba(255,183,84,.22), 0 2.5rem 4.4rem rgba(50,22,18,.3); transform: translateY(-.45rem) scale(1.015); }
.hero-profile-card::before { position: absolute; z-index: 0; top: -24%; left: 50%; width: 15rem; aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(255, 193, 138, .25), rgba(255, 154, 92, .08) 42%, transparent 70%); content: ''; filter: blur(1rem); pointer-events: none; transform: translateX(-50%); }
.hero-profile-card__portrait { position: relative; z-index: 1; width: clamp(8.5rem, 14vw, 11rem); aspect-ratio: 1; margin: 0 auto 1.4rem; overflow: hidden; border: 1px solid rgba(255,232,211,.72); border-radius: 50%; background: rgba(30,22,21,.42); box-shadow: 0 0 0 .45rem rgba(255, 182, 123, .08), 0 0 1.45rem rgba(255, 166, 101, .38), 0 .85rem 1.8rem rgba(14, 8, 8, .36); animation: hero-portrait-breathe 4.8s ease-in-out infinite; }
.hero-profile-card__portrait img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: 50% 16%; transform: scale(1.16); transform-origin: 50% 18%; }
.hero-profile-card h1 { position: relative; z-index: 1; max-width: none; margin: 0; color: #fff; font-family: Arial, sans-serif; font-size: clamp(1.5rem, 2.3vw, 2.05rem); font-weight: 400; letter-spacing: -.065em; line-height: .98; text-align: center; }
.hero-profile-card h1 strong { display: block; color: var(--brand-cream); font-size: 1.08em; font-weight: 400; letter-spacing: -.09em; white-space: nowrap; }
.hero-profile-card__role { position: relative; z-index: 1; margin: 1.1rem 0 0; color: rgba(255,236,218,.86); font-size: clamp(.65rem, .82vw, .75rem); letter-spacing: .06em; line-height: 1.45; text-transform: uppercase; }
.hero-profile-card__actions { position: relative; z-index: 1; display: flex; justify-content: center; gap: .6rem; margin-top: 1.25rem; }
:global(#app .hero-profile-card__actions .glass-button) { --glass-button-ink: #fff; border-color: rgba(255,255,255,.82); border-radius: 999px; padding: 1rem 1.4rem; background: rgba(255,255,255,.18) !important; box-shadow: 0 0 0 1px rgba(255,255,255,.16), 0 0 1.05rem rgba(255,241,228,.2), inset 0 1px 1px rgba(255,255,255,.78), inset 0 -4px 10px rgba(65,34,26,.14), 0 .65rem 1.4rem rgba(77,12,45,.24) !important; color: #fff; -webkit-text-fill-color: #fff; font-size: .98rem; white-space: nowrap; }
:global(#app .hero-profile-card__actions .glass-button::before), :global(#app .hero-profile-card__actions .glass-button::after) { display: block; }
:global(#app .hero-profile-card__actions .glass-button--primary) { background: rgba(86,24,57,.32) !important; }
:global(#app .hero-profile-card__actions .glass-button--secondary) { background: rgba(255,255,255,.18) !important; }
:global(#app .hero-profile-card__actions .glass-button--primary:hover) { background: rgba(86,24,57,.44) !important; }
:global(#app .hero-profile-card__actions .glass-button--secondary:hover) { border-color: rgba(255,255,255,.96); background: rgba(255,255,255,.26) !important; color: #fff; -webkit-text-fill-color: #fff; filter: none; transform: translateY(-3px) scale(1.025); }
:global(#app .hero-profile-card__actions .glass-button:hover::before) { animation: profile-button-gloss .65s ease-out both; }
@keyframes profile-button-gloss { from { opacity: .2; transform: translateX(-60%) skewX(-18deg); } to { opacity: .85; transform: translateX(60%) skewX(-18deg); } }
@keyframes hero-card-float { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(0, -.55rem, 0); } }
@keyframes hero-portrait-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.025); } }
:global(#app .hero-intro-card__actions .glass-button--secondary) { border-color: rgba(255,255,255,.82); background: linear-gradient(145deg, rgba(255,255,255,.62), rgba(255,246,241,.24)); box-shadow: inset 0 1px 1px rgba(255,255,255,.92), inset 0 -5px 11px rgba(40,0,15,.1), 0 .25rem .6rem rgba(40,0,15,.09), 0 .9rem 1.7rem rgba(77,12,45,.22); color: #fff; text-shadow: 0 1px rgba(40,0,15,.3); backdrop-filter: blur(24px) saturate(135%); -webkit-backdrop-filter: blur(24px) saturate(135%); }
:global(#app .hero-intro-card__actions .glass-button--secondary::before) { height: 48%; background: linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.06)); }
:global(#app .hero-intro-card__actions .glass-button--secondary:hover) { background: linear-gradient(145deg, rgba(255,255,255,.76), rgba(255,246,241,.32)); color: #fff; filter: brightness(1.04); }
:global(#app .hero-intro-card__actions .glass-button) { padding: 1.05rem 1.7rem; font-size: 1.08rem; }

@media (max-width: 800px) {
  .hero-intro-card__content { grid-column: 1; }
  .home-hero__portrait-stage { width: min(104%, 30rem); min-height: 18rem; grid-column: 1; grid-row: 2; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; }
  .hero-home-copy { align-items: center; }
  .hero-home-intro { max-width: 10ch; font-size: clamp(2.7rem, 11vw, 4.4rem); text-align: center; }
  .hero-home-summary { text-align: left; }
  .hero-home-socials { justify-content: center; }
  .hero-profile-card { width: min(100%, 21rem); margin-right: 0; }
}
@media (max-width: 560px) {
  .home-hero--immersive { min-height: 48rem; }
  .hero-intro-card__eyebrow { font-size: clamp(.92rem, 4vw, 1.1rem); }
  .home-hero__portrait-stage { width: min(106%, 23rem); min-height: 16rem; }
  .hero-profile-card { width: min(100%, 18rem); border-radius: 1.45rem; padding: 1.25rem; }
  .hero-profile-card__portrait { width: 7.5rem; margin-bottom: 1rem; }
  .hero-profile-card h1 { font-size: 1.55rem; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-profile-card, .hero-profile-card__portrait { animation: none; }
}
</style>
