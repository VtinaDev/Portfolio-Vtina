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
            <h2>La persona detrás del trabajo.</h2>
            <p>Diseño y desarrollo experiencias digitales con propósito, desde Barcelona.</p>
          </div>
        </div>
      </section>

      <section class="about-story" aria-labelledby="story-title">
        <div class="about-story__heading">
          <p class="eyebrow eyebrow--dark">Quién soy</p>
          <h2 id="story-title">Creatividad, tecnología e IA para dar vida a buenas ideas.</h2>
        </div>
        <div class="about-story__copy">
          <p class="about-story__lead">Soy <strong>Valentina Angulo</strong>, frontend developer con una mirada que une diseño, comunicación y desarrollo web.</p>
          <p>Tras mi experiencia en Marketing y Comunicación, decidí dar el salto a la programación y en 2025 completé la especialización en <strong>Frontend Web Developer</strong> en la <strong>UOC</strong>.</p>
          <p>Desarrollo interfaces modernas, responsivas y centradas en las personas. Actualmente incorporo <strong>IA y APIs</strong> para crear productos digitales más útiles, dinámicos e innovadores.</p>
        </div>
      </section>
    </div>

    <section class="skills-section" aria-labelledby="skills-title">
      <p class="eyebrow eyebrow--dark">Mi caja de herramientas</p>
      <h2 id="skills-title">Las herramientas con las que las ideas cobran vida.</h2>
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
import openaiLogo from '../assets/icons/openai.svg'
import elevenlabsLogo from '../assets/icons/elevenlabs.svg'
export default { name: 'About', components: { LayoutBase, Navbar }, data() { return { aboutHero, openaiLogo, elevenlabsLogo } } }
</script>

<style scoped>
:global(body:has(.about-layout)) { background: linear-gradient(105deg, #8b270e 0%, #931b3d 48%, #79044d 100%); }
:global(#app:has(.about-layout)) { max-width: none; padding: 0; }
:deep(.about-layout main) { padding: 0; }
:deep(.layout) { background: linear-gradient(105deg, #8b270e 0%, #931b3d 48%, #79044d 100%); }
.about-page { --about-cover-gradient: linear-gradient(105deg, #8b270e 0%, #931b3d 48%, #79044d 100%); overflow: hidden; border-radius: 3rem; background: var(--about-cover-gradient); }
.about-hero { position: relative; isolation: isolate; min-height: clamp(25rem, 48vw, 35rem); overflow: hidden; background: var(--about-cover-gradient); color: #fff; }
.about-hero__navbar { position: absolute; z-index: 5; top: 0; left: 0; width: 100%; background: transparent; }
:deep(.about-hero__navbar .nav-links a) { color: #fff; }
:deep(.about-hero__navbar .nav-links a.router-link-active) { border-bottom-color: #fff; }
:deep(.about-hero__navbar .nav-links a:hover) { color: #ffd2b5; }
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
.skills-section { max-width: 75rem; margin: 0 auto; padding: 4rem 2rem; color: #fff; text-align: center; }
.skills-section h2 { background: linear-gradient(105deg, #8b270e 0%, #e76f22 32%, #931b3d 58%, #79044d 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; font-size: clamp(2rem, 4vw, 3rem); }
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
.btn-cv { display: inline-block; border: 2px solid transparent; border-radius: 999px; background: linear-gradient(90deg, #a83b00, #a30059); color: #fff; padding: .75rem 1.45rem; font-weight: 800; text-decoration: none; transition: transform .25s ease, box-shadow .25s ease; }
.btn-cv--outline { border-color: #9a1a50; background: transparent; color: #8c1748; }
.btn-cv:hover { box-shadow: 0 .65rem 1.25rem rgba(122, 11, 60, .22); transform: translateY(-.2rem); }
@media (max-width: 720px) { .about-page { border-radius: 2rem; } .about-hero { min-height: 35rem; } .about-hero::after { background: linear-gradient(0deg, rgba(47, 0, 24, .72), transparent 62%); } .about-hero__image { max-width: 76%; height: 86%; } .about-hero__content { display: flex; min-height: inherit; flex-direction: column; justify-content: flex-end; gap: .75rem; padding: 2rem; } .about-hero__panel--right { align-self: start; max-width: 14rem; padding: 0; } .about-hero__panel--right p { display: none; } .about-story { grid-template-columns: 1fr; gap: 2rem; padding: 4rem 2rem; } .about-story h2 { max-width: 16ch; } .skills-section { padding-inline: 1rem; } .skills-groups { grid-template-columns: 1fr; } .skills-group--secondary { grid-column: auto; } .about-buttons { flex-wrap: wrap; } }
</style>
