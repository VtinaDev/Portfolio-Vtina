<template>
  <LayoutBase class="about-layout">
    <div class="about-page">
      <section class="about-hero" aria-labelledby="about-title">
        <Navbar class="about-hero__navbar" />
        <img class="about-hero__image" :src="aboutHero" alt="Retrato de Valentina Angulo" />
        <div class="about-hero__content">
          <div class="about-hero__panel">
            <p class="eyebrow">Creative Frontend Developer</p>
            <h1 id="about-title">About me</h1>
          </div>
          <div class="about-hero__panel about-hero__panel--right">
            <h2>Diseño y desarrollo experiencias digitales con propósito, desde Barcelona.</h2>
          </div>
        </div>
      </section>

      <section class="about-story" aria-labelledby="story-title">
        <div class="about-story__heading">
          <p class="eyebrow eyebrow--dark">Quién soy</p>
          <h2 id="story-title">Creatividad, tecnología e IA para dar vida a buenas ideas.</h2>
        </div>
        <div class="about-story__copy">
          <p class="about-story__lead">Soy <strong>Valentina Angulo</strong>, frontend developer, mi misión es unir diseño, comunicación y desarrollo web.</p>
          <p>Tras mi experiencia en Marketing y Comunicación, decidí dar el salto a la programación y en 2025 completé la especialización en <strong>Frontend Web Developer</strong> en la <strong>UOC</strong>.</p>
          <p>Desarrollo interfaces modernas, responsivas y centradas en las personas. Actualmente incorporo <strong>IA y APIs</strong> para crear productos digitales más útiles, dinámicos e innovadores.</p>
        </div>
      </section>

      <section class="creative-portfolio" aria-labelledby="creative-portfolio-title">
        <div class="creative-portfolio__heading">
          <p class="eyebrow eyebrow--dark">Comunicación visual</p>
          <h2 id="creative-portfolio-title">Identidades que cuentan una historia.</h2>
        </div>
        <div class="creative-portfolio__content">
          <p class="creative-portfolio__lead">Mi trayectoria en comunicación visual y diseño de identidad de marca parte de escuchar, encontrar una voz propia y convertirla en un sistema visual coherente.</p>
          <p>En Behance reúno proyectos de branding, dirección creativa y piezas de comunicación: desde el concepto y la identidad hasta sus aplicaciones en soportes físicos y digitales.</p>
          <ul class="creative-portfolio__areas" aria-label="Áreas de proyectos creativos">
            <li>Branding</li>
            <li>Identidad visual</li>
            <li>Dirección de arte</li>
            <li>Comunicación digital</li>
          </ul>
          <a class="creative-portfolio__behance" href="https://www.behance.net/ploydesigns" target="_blank" rel="noopener noreferrer">Ver proyectos en Behance</a>
        </div>
        <div class="behance-projects" aria-label="Proyectos de Behance">
          <component v-for="project in behanceProjects" :key="project.title" :is="project.to ? 'RouterLink' : 'a'" class="behance-projects__item" :to="project.to" :href="project.url" :target="project.to ? undefined : '_blank'" :rel="project.to ? undefined : 'noopener noreferrer'">
            <img :src="project.cover" :alt="`Portada del proyecto ${project.title}`">
            <span class="behance-projects__overlay"><span>{{ project.to ? 'Case study' : 'Behance project' }}</span><strong>{{ project.title }}</strong><small>{{ project.to ? 'Ver case study →' : 'Ver proyecto ↗' }}</small></span>
          </component>
        </div>
      </section>
    </div>

    <section class="skills-section" aria-labelledby="skills-title">
      <p class="eyebrow eyebrow--dark">Mi caja de herramientas</p>
      <h2 id="skills-title">Para dar vida a buenas ideas.</h2>
      <div class="skills-groups">
        <section class="skills-group" aria-labelledby="core-frontend-title">
          <h3 id="core-frontend-title">Core Frontend</h3>
          <div class="skills-icons" aria-label="Core Frontend">
            <div class="skill-item"><span class="skill-icon"><i class="devicon-html5-plain colored" aria-hidden="true"></i></span><span class="skill-label">HTML5</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-css3-plain colored" aria-hidden="true"></i></span><span class="skill-label">CSS3</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-javascript-plain colored" aria-hidden="true"></i></span><span class="skill-label">JavaScript</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-vuejs-plain colored" aria-hidden="true"></i></span><span class="skill-label">Vue.js</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-vitejs-plain colored" aria-hidden="true"></i></span><span class="skill-label">Vite</span></div>
          </div>
        </section>

        <section class="skills-group" aria-labelledby="integrations-title">
          <h3 id="integrations-title">Product &amp; Integrations</h3>
          <div class="skills-icons" aria-label="Product and Integrations">
            <div class="skill-item"><span class="skill-icon"><i class="devicon-supabase-plain colored" aria-hidden="true"></i></span><span class="skill-label">Supabase</span></div>
            <div class="skill-item"><span class="skill-icon skill-icon--api"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"><path d="M8.5 4 4 12l4.5 8M15.5 4 20 12l-4.5 8M13.5 3 10.5 21"/></svg></span><span class="skill-label">REST APIs</span></div>
            <div class="skill-item"><span class="skill-icon skill-icon--monochrome"><img :src="openaiLogo" alt=""></span><span class="skill-label">OpenAI</span></div>
            <div class="skill-item"><span class="skill-icon skill-icon--monochrome"><img :src="elevenlabsLogo" alt=""></span><span class="skill-label">ElevenLabs</span></div>
          </div>
        </section>

        <section class="skills-group" aria-labelledby="workflow-title">
          <h3 id="workflow-title">Design &amp; Workflow</h3>
          <div class="skills-icons" aria-label="Design and Workflow">
            <div class="skill-item"><span class="skill-icon"><i class="devicon-figma-plain colored" aria-hidden="true"></i></span><span class="skill-label">Figma</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-git-plain colored" aria-hidden="true"></i></span><span class="skill-label">Git</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-github-original colored" aria-hidden="true"></i></span><span class="skill-label">GitHub</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-vscode-plain colored" aria-hidden="true"></i></span><span class="skill-label">VS Code</span></div>
          </div>
        </section>

        <section class="skills-group skills-group--secondary" aria-labelledby="creative-tools-title">
          <h3 id="creative-tools-title">Creative Tools</h3>
          <div class="skills-icons" aria-label="Creative Tools">
            <div class="skill-item"><span class="skill-icon"><i class="devicon-canva-original colored" aria-hidden="true"></i></span><span class="skill-label">Canva</span></div>
            <div class="skill-item"><span class="skill-icon"><i class="devicon-illustrator-plain colored" aria-hidden="true"></i></span><span class="skill-label">Adobe Illustrator</span></div>
          </div>
        </section>
      </div>
    </section>

    <div class="about-buttons">
      <a href="/CV-tina.pdf" target="_blank" rel="noopener noreferrer" class="btn-cv">Ver CV</a>
      <a href="/CV-tina.pdf" download="CV-tina.pdf" class="btn-cv btn-cv--outline">Descargar CV</a>
    </div>
  </LayoutBase>
</template>

<script>
import LayoutBase from '../components/LayoutBase.vue'
import Navbar from '../components/Navbar.vue'
import aboutHero from '../assets/Sujeto.png'
import behanceVerticality from '../assets/behance-verticality.webp'
import behanceCascroty from '../assets/cascroty/publi1.png'
import openaiLogo from '../assets/icons/openai.svg'
import elevenlabsLogo from '../assets/icons/elevenlabs.svg'
export default {
  name: 'About',
  components: { LayoutBase, Navbar },
  data() {
    return {
      aboutHero,
      openaiLogo,
      elevenlabsLogo,
      behanceProjects: [
        { title: 'VERTICALITY', cover: behanceVerticality, url: 'https://www.behance.net/gallery/200801549/VERTICALITY' },
        { title: 'Cascroty packaging moroccan real food', cover: behanceCascroty, to: '/projects/cascroty', url: 'https://www.behance.net/gallery/175132577/Cascroty-packaging-moroccan-real-food' }
      ]
    }
  }
}
</script>

<style scoped>
:global(body:has(.about-layout)) { background: #f7f7f8; }
:global(#app:has(.about-layout)) { max-width: none; padding: 0; }
:deep(.about-layout main) { padding: 0; }
:deep(.layout) { background: #f7f7f8; }
.about-page { --about-cover-gradient: radial-gradient(circle at 14% 12%, #ffae55, transparent 34%), radial-gradient(circle at 82% 82%, #ed1672, transparent 36%), linear-gradient(120deg, #d94a12, #c20b5a 54%, #5c0c48); overflow: hidden; border-radius: 3rem; background: #fff; }
.about-hero { position: relative; isolation: isolate; min-height: clamp(25rem, 48vw, 35rem); overflow: hidden; background: var(--about-cover-gradient); color: #fff; }
.about-hero__navbar { position: absolute; z-index: 5; top: 0; left: 0; width: 100%; background: transparent; }
:deep(.about-hero__navbar .nav-links a) { color: #fff; -webkit-text-fill-color: #fff; }
:deep(.about-hero__navbar .nav-links a.router-link-active) { border-bottom-color: #fff; }
:deep(.about-hero__navbar .nav-links a:hover) { color: var(--brand-amber); -webkit-text-fill-color: var(--brand-amber); }
.about-hero::after { position: absolute; z-index: 0; inset: 0; content: ''; background: radial-gradient(circle at 50% 38%, rgba(255, 190, 150, .2), transparent 40%); pointer-events: none; }
.about-hero__image { position: absolute; z-index: 1; bottom: 0; left: 50%; width: auto; max-width: 42%; height: 106%; object-fit: contain; object-position: bottom center; transform: translateX(-50%); }
.about-hero__content { position: relative; z-index: 2; display: grid; min-height: inherit; grid-template-columns: 1fr 1fr; align-items: end; gap: 2rem; padding: clamp(2rem, 6vw, 5rem); text-align: left; }
.about-hero__panel--right { justify-self: end; max-width: 17rem; padding-bottom: .4rem; }
.eyebrow { margin: 0 0 .75rem; color: #ff6b00; font-size: .78rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.eyebrow--dark { color: #ff6b00; }
.about-hero h1, .about-hero h2, .about-story h2, .skills-section h2 { margin: 0; font-family: Arial, sans-serif; letter-spacing: -.045em; }
.about-hero h1 { max-width: 10ch; font-size: clamp(3rem, 6vw, 5.8rem); line-height: .95; }
.about-hero h2 { font-size: clamp(1.2rem, 2vw, 1.7rem); line-height: 1.1; }
.about-hero__panel--right p { margin: .65rem 0 0; font-size: 1rem; line-height: 1.5; opacity: .84; }
.about-story { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(2.5rem, 8vw, 8rem); margin: 0; padding: clamp(5rem, 10vw, 9rem) clamp(2rem, 7vw, 7rem); border-radius: 2.5rem; background: #fff; text-align: left; }
.about-story h2 { max-width: 12ch; color: #1e1820; font-size: clamp(2rem, 4vw, 3.6rem); line-height: 1.03; }
.about-story__copy { color: #5d5760; font-size: 1.05rem; line-height: 1.75; }
.about-story__copy p { margin: 0 0 1.15rem; }
.about-story__lead { color: #29232b; font-size: clamp(1.2rem, 2vw, 1.5rem); line-height: 1.45; }
.creative-portfolio { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: clamp(2.5rem, 8vw, 8rem); padding: clamp(4rem, 8vw, 7rem) clamp(2rem, 7vw, 7rem); background: #f3e6dd; color: #2d1724; text-align: left; }
.creative-portfolio h2 { max-width: 11ch; margin: 0; font-family: Arial, sans-serif; font-size: clamp(2rem, 4vw, 3.6rem); letter-spacing: -.045em; line-height: 1.03; }
.creative-portfolio__content { color: #5d4b4a; font-size: 1.05rem; line-height: 1.75; }
.creative-portfolio__content p { margin: 0 0 1.15rem; }
.creative-portfolio__lead { color: #34232e; font-size: clamp(1.2rem, 2vw, 1.45rem); line-height: 1.45; }
.creative-portfolio__areas { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.8rem 0; padding: 0; list-style: none; }
.creative-portfolio__areas li { border: 1px solid #c78c6c; border-radius: 999px; padding: .5rem .8rem; color: #7b2b24; font-size: .78rem; font-weight: 800; }
.creative-portfolio__behance { display: inline-flex; align-items: center; gap: .6rem; margin-top: .4rem; border-bottom: 2px solid currentColor; color: #7b2b24; font-size: .85rem; font-weight: 800; letter-spacing: .06em; text-decoration: none; text-transform: uppercase; transition: color .2s ease, transform .2s ease; }.creative-portfolio__behance:hover { color: #e76f22; transform: translateX(.2rem); }
.behance-projects { display: grid; grid-column: 1 / -1; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; width: min(100%, 50rem); margin: clamp(1rem, 4vw, 2rem) auto 0; }
.behance-projects__item { position: relative; display: block; aspect-ratio: 4 / 3; overflow: hidden; border: 1px solid rgba(45, 23, 36, .14); border-radius: 1.35rem; background: #fff; color: #fff; text-decoration: none; box-shadow: 0 .45rem 1.1rem rgba(45, 23, 36, .1); }.behance-projects__item img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }.behance-projects__item:hover img { transform: scale(1.035); }
.behance-projects__overlay { position: absolute; inset: auto 0 0; display: flex; min-height: 44%; flex-direction: column; justify-content: end; gap: .3rem; padding: 1.2rem; background: linear-gradient(transparent, rgba(27, 13, 21, .88)); }.behance-projects__overlay span { color: #ffbe8a; font-size: .68rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }.behance-projects__overlay strong { font-family: Arial, sans-serif; font-size: clamp(1.1rem, 2vw, 1.55rem); letter-spacing: -.035em; line-height: 1.05; }.behance-projects__overlay small { margin-top: .2rem; font-size: .75rem; font-weight: 800; }
.behance-slide-enter-active, .behance-slide-leave-active { transition: opacity .3s ease, transform .3s ease; }.behance-slide-enter-from { opacity: 0; transform: translateX(4%); }.behance-slide-leave-to { opacity: 0; transform: translateX(-4%); }
.skills-section { max-width: 75rem; margin: 0 auto; padding: 4rem 2rem; color: #1d1d1f; text-align: center; }
.skills-section h2 { background: linear-gradient(105deg, #8b270e 0%, #e76f22 28%, #931b3d 52%, #f72585 72%, #79044d 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; font-size: clamp(2rem, 4vw, 3rem); }
.skills-groups { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; margin-top: 3rem; text-align: left; }
.skills-group { min-height: 14rem; overflow: hidden; border: 0; border-radius: 1.5rem; background: #f3f1f2; padding: 1.5rem; }
.skills-group h3 { margin: 0; color: #ffb07a; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; }
.skills-icons { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 1.25rem; margin-top: 1.5rem; }
.skill-item { display: inline-flex; min-width: 3.5rem; flex-direction: column; align-items: center; gap: .55rem; color: #4d1735; text-align: center; }
.skill-icon { display: inline-flex; width: 48px; height: 48px; align-items: center; justify-content: center; border-radius: .75rem; transition: transform .25s ease, box-shadow .25s ease; }
.skill-icon i { display: block; font-size: 44px; line-height: 1; transition: transform .25s ease; }
.skill-icon img { display: block; width: 44px; height: 44px; object-fit: contain; }
.skill-icon svg { width: 44px; height: 44px; }
.skill-icon--api { color: #781b35; }
.skill-icon--monochrome { border-radius: .75rem; background: #fff; }
.skill-item:hover .skill-icon { box-shadow: 0 .5rem 1rem rgba(42, 0, 22, .28); transform: translateY(-.3rem) scale(1.08); }
.skill-label { font-size: .76rem; font-weight: 700; line-height: 1.15; white-space: nowrap; }
.skills-group--secondary { min-height: 14rem; padding: 1.5rem; }
.skills-group--secondary .skills-icons { margin-top: 1rem; }
.about-buttons { display: flex; justify-content: center; gap: 1rem; padding-bottom: 2rem; }
.btn-cv { display: inline-block; border: 1px solid rgba(255, 255, 255, .62); border-radius: 999px; background: linear-gradient(105deg, rgba(168, 59, 0, .9), rgba(163, 0, 89, .84), rgba(237, 22, 114, .78)); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .58), 0 .6rem 1.3rem rgba(122, 11, 60, .16); color: #fff; padding: .75rem 1.45rem; font-weight: 800; text-decoration: none; backdrop-filter: blur(.7rem); -webkit-backdrop-filter: blur(.7rem); transition: transform .25s ease, box-shadow .25s ease, background .25s ease; }
.btn-cv--outline { border-color: rgba(194, 11, 90, .25); background: linear-gradient(145deg, rgba(255, 255, 255, .62), rgba(255, 255, 255, .18)); color: #8c1748; }
.btn-cv:hover { box-shadow: inset 0 1px 0 rgba(255, 255, 255, .82), 0 .8rem 1.5rem rgba(122, 11, 60, .22); transform: translateY(-.2rem); }
@media (max-width: 720px) {
  .about-page { border-radius: 0; }
  .about-hero {
    min-height: 39rem;
    overflow: visible;
  }
  .about-hero::after { display: none; }
  .about-hero__content {
    z-index: 2;
    display: flex;
    min-height: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: .75rem;
    padding: 7.25rem 2rem 0;
  }
  .about-hero__image {
    position: absolute;
    z-index: 1;
    bottom: -3.5rem;
    left: 50%;
    width: min(100%, 23rem);
    max-width: none;
    height: auto;
    margin: 0;
    transform: translateX(-50%);
  }
  .about-hero__panel--right {
    max-width: 20rem;
    padding: 0;
  }
  .about-story, .creative-portfolio { position: relative; z-index: 2; grid-template-columns: 1fr; gap: 2rem; padding: 4rem 2rem; }
  .about-story h2 { max-width: 16ch; }
  .behance-projects { grid-template-columns: 1fr; margin-top: 0; }
  :deep(.about-hero__navbar .nav-links--open a) { color: var(--brand-ink); -webkit-text-fill-color: var(--brand-ink); }
  :deep(.about-hero__navbar .nav-links--open a.router-link-active) { border-bottom-color: var(--brand-orange); }
  :deep(.about-hero__navbar .nav-links--open a:hover) { color: var(--brand-orange); -webkit-text-fill-color: var(--brand-orange); }
  .skills-section { padding-inline: 1rem; }
  .skills-groups { grid-template-columns: 1fr; }
  .skills-group--secondary { grid-column: auto; }
  .about-buttons { flex-wrap: wrap; }
}
@media (max-width: 480px) {
  .about-hero { min-height: 36rem; }
  .about-hero__content { padding: 6.25rem 1.25rem 0; }
  .about-story, .creative-portfolio { padding: 3rem 1.25rem; }
  .about-buttons { flex-direction: column; align-items: stretch; padding: 0 1.25rem 2rem; }
  .btn-cv { text-align: center; }
}
@media (prefers-reduced-motion: reduce) { .behance-projects__item img { transition: none; } }
</style>
