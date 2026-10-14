<template>
  <LayoutBase class="vtina-project" full-bleed>
    <main class="vtina-project__content">
      <router-link class="vtina-project__back" to="/">← Volver al inicio</router-link>

      <section class="mascot-process" aria-labelledby="mascot-process-title">
        <section class="mascot-process__profile" aria-labelledby="mascot-process-title">
          <div class="mascot-process__section-title"><p>01</p><h1 id="mascot-process-title">Presentación de personaje</h1></div>
          <div class="mascot-process__profile-grid">
            <div class="mascot-process__portrait"><HeroMascot :show-technologies="false" /></div>
            <div class="mascot-process__bio"><h2>Mascota animada</h2><dl><div><dt>Personalidad</dt><dd>Cálida, curiosa y expresiva.</dd></div><div><dt>Construcción</dt><dd>Ilustración por capas.</dd></div></dl><div class="mascot-process__palette" aria-label="Paleta de colores de VTina"><span class="mascot-process__swatch mascot-process__swatch--cream"><b>Crema</b><code>#F9D6A5</code></span><span class="mascot-process__swatch mascot-process__swatch--orange"><b>Naranja</b><code>#E7793F</code></span><span class="mascot-process__swatch mascot-process__swatch--terracotta"><b>Terracota</b><code>#A9472C</code></span><span class="mascot-process__swatch mascot-process__swatch--ink"><b>Tinta</b><code>#2D1B20</code></span></div></div>
          </div>
        </section>

        <section class="mascot-process__views" aria-labelledby="mascot-views-title">
          <div class="mascot-process__section-title"><p>02</p><h2 id="mascot-views-title">Despiece y acciones</h2></div>
          <div class="mascot-process__exploded-panel" aria-label="Despiece de la mascota">
            <figure><img :src="mascotHead" alt="Cabeza de VTina"><figcaption>Cabeza</figcaption></figure><figure><img :src="mascotLeftArm" alt="Brazo izquierdo de VTina"><figcaption>Brazo izquierdo</figcaption></figure><figure><img :src="mascotBody" alt="Cuerpo de VTina"><figcaption>Cuerpo</figcaption></figure><figure><img :src="mascotRightArm" alt="Brazo derecho de VTina"><figcaption>Brazo derecho</figcaption></figure>
          </div>
          <div class="mascot-process__subsection-title"><span>03</span><h2>Acciones básicas</h2></div>
          <div class="mascot-process__actions-panel">
            <figure><HeroMascot :animated="false" :show-technologies="false" /><figcaption>Reposo</figcaption></figure><figure><HeroMascot pose="wave" :animated="false" :show-technologies="false" /><figcaption>Saludo</figcaption></figure><figure><HeroMascot pose="blink" :animated="false" :show-technologies="false" /><figcaption>Parpadeo</figcaption></figure><figure><HeroMascot pose="look" :animated="false" :show-technologies="false" /><figcaption>Mira</figcaption></figure><figure><HeroMascot pose="happy" :animated="false" :show-technologies="false" /><figcaption>Feliz</figcaption></figure><figure><HeroMascot class="mascot-process__live-pose" :show-technologies="false" /><figcaption>Animada</figcaption></figure>
          </div>
        </section>

        <section class="mascot-process__build" aria-labelledby="mascot-build-title">
          <div class="mascot-process__section-title"><p>04</p><h2 id="mascot-build-title">Cómo lo hice</h2></div>
          <div class="mascot-process__build-grid">
            <div class="mascot-process__build-copy">
              <h3>De ilustración a componente</h3>
              <p>Diseñé a VTina por capas para separar cada gesto y convertirlo en una mascota reutilizable dentro del portfolio.</p>
              <ol>
                <li>Ilustré y exporté cada pieza visual por separado.</li>
                <li>Compuse las capas en un componente de Vue.</li>
                <li>Programé poses, saludo, parpadeo y movimiento con CSS.</li>
              </ol>
            </div>
            <ul class="mascot-process__build-tools" aria-label="Tecnologías y herramientas utilizadas">
              <li v-for="tool in tools" :key="tool.name"><img :src="tool.icon" alt=""><span><b>{{ tool.name }}</b><small>{{ tool.use }}</small></span></li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  </LayoutBase>
</template>

<script>
import LayoutBase from '../components/LayoutBase.vue'
import HeroMascot from '../components/HeroMascot.vue'
import mascotBody from '../assets/mascot/Cuerpo.webp'
import mascotHead from '../assets/mascot/Cabeza.webp'
import mascotLeftArm from '../assets/mascot/Izquierdo.webp'
import mascotRightArm from '../assets/mascot/Derecho.webp'
import procreateIcon from '../assets/icons/procreate.png'
import illustratorIcon from '../assets/icons/illustrator.svg'
import vueIcon from '../assets/icons/vuejs.svg'
import cssIcon from '../assets/icons/css3.svg'

export default {
  name: 'VTina',
  components: { LayoutBase, HeroMascot },
  data: () => ({
    mascotBody, mascotHead, mascotLeftArm, mascotRightArm,
    tools: [
      { name: 'Procreate', use: 'Ilustración por capas', icon: procreateIcon },
      { name: 'Illustrator', use: 'Preparación de recursos', icon: illustratorIcon },
      { name: 'Vue.js', use: 'Componente reutilizable', icon: vueIcon },
      { name: 'CSS', use: 'Poses y microanimaciones', icon: cssIcon }
    ]
  })
}
</script>

<style scoped>
:deep(.layout), :deep(.layout main) { width: 100%; max-width: none; margin: 0; padding: 0; }
.vtina-project__content { padding: clamp(2rem, 5vw, 4rem) 1.25rem clamp(5rem, 10vw, 8rem); background: #fff8ef; color: #211b23; }
.vtina-project__back { display: inline-flex; margin: 0 0 clamp(3rem, 6vw, 5rem); color: #6d1b45; font-size: .85rem; font-weight: 800; text-decoration: none; }.vtina-project__back:hover { color: var(--brand-orange); }
.mascot-process { width: min(100%, 70rem); margin: auto; }.mascot-process section + section { margin-top: clamp(4rem, 8vw, 7rem); }
.mascot-process__section-title, .mascot-process__subsection-title { margin-bottom: clamp(1.5rem, 3vw, 2.5rem); text-align: center; }.mascot-process__section-title p, .mascot-process__subsection-title span { display: block; margin: 0 0 .4rem; color: var(--brand-orange); font-family: ui-monospace, monospace; font-size: .72rem; font-weight: 800; letter-spacing: .12em; }.mascot-process__section-title h1, .mascot-process__section-title h2, .mascot-process__subsection-title h2 { margin: 0; color: #40343e; font-family: Arial, sans-serif; font-size: clamp(1.1rem, 2vw, 1.45rem); font-weight: 400; letter-spacing: -.025em; }
.mascot-process__profile-grid { display: grid; grid-template-columns: minmax(12rem, .8fr) minmax(0, 1fr); align-items: center; gap: clamp(1.5rem, 5vw, 4rem); width: min(100%, 46rem); margin: auto; }
.mascot-process__portrait { position: relative; display: grid; min-height: 16rem; place-items: end center; overflow: hidden; border: 1px solid transparent; border-radius: 1.25rem; background: linear-gradient(145deg, rgba(255,250,243,.72), rgba(244,225,201,.38)) padding-box, linear-gradient(120deg, rgba(255,255,255,.95), rgba(255,234,207,.84), rgba(222,184,140,.48), rgba(255,255,255,.9)) border-box; backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px); }.mascot-process__portrait .hero-mascot { width: min(116%, 18rem); margin-bottom: -2rem; }
.mascot-process__bio h2 { margin: 0; font-size: clamp(1.7rem, 3vw, 2.6rem); font-weight: 400; }.mascot-process__bio dl { margin: 1.1rem 0 0; }.mascot-process__bio dl > div { display: grid; grid-template-columns: 7.5rem 1fr; gap: 1rem; border-top: 1px dashed rgba(45,23,36,.3); padding: .75rem 0; }.mascot-process__bio dt { color: #7d2848; font-size: .72rem; font-weight: 800; text-transform: uppercase; }.mascot-process__bio dd { margin: 0; color: #40343e; font-size: .88rem; }
.mascot-process__tools { display: flex; justify-content: center; gap: .7rem; margin: 1rem 0 0; padding: 0; list-style: none; }.mascot-process__tools li { display: grid; place-items: center; }.mascot-process__tools img { width: 1.55rem; height: 1.55rem; object-fit: contain; }
.mascot-process__palette { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .45rem; margin-top: 1.25rem; }.mascot-process__swatch { display: grid; grid-template-columns: 1.1rem 1fr; column-gap: .45rem; align-items: center; border-top: 1px dashed rgba(45,23,36,.22); padding-top: .45rem; color: #40343e; font-size: .66rem; }.mascot-process__swatch::before { width: 1.1rem; height: 1.1rem; grid-row: span 2; border: 1px solid rgba(45,23,36,.14); border-radius: .3rem; background: var(--swatch-color); box-shadow: inset 0 1px 1px rgba(255,255,255,.35); content: ''; }.mascot-process__swatch b { font-size: .66rem; font-weight: 800; }.mascot-process__swatch code { color: #75636b; font-family: ui-monospace, monospace; font-size: .6rem; }.mascot-process__swatch--cream { --swatch-color: #f9d6a5; }.mascot-process__swatch--orange { --swatch-color: #e7793f; }.mascot-process__swatch--terracotta { --swatch-color: #a9472c; }.mascot-process__swatch--ink { --swatch-color: #2d1b20; }
.mascot-process__exploded-panel, .mascot-process__actions-panel { display: grid; gap: 1rem; border-radius: 1.5rem; padding: clamp(1rem, 3vw, 2rem); background: #f5f3f4; }.mascot-process__exploded-panel { grid-template-columns: repeat(4, minmax(0, 1fr)); align-items: end; }.mascot-process__actions-panel { grid-template-columns: repeat(3, minmax(0, 1fr)); }.mascot-process__exploded-panel figure, .mascot-process__actions-panel figure { display: grid; min-width: 0; margin: 0; place-items: end center; }.mascot-process__exploded-panel img { width: min(100%, 10rem); aspect-ratio: 1; object-fit: contain; }.mascot-process__exploded-panel figcaption, .mascot-process__actions-panel figcaption { margin-top: .45rem; color: #5e535d; font-size: .65rem; font-weight: 800; text-align: center; text-transform: uppercase; }.mascot-process__actions-panel .hero-mascot { width: min(100%, 10rem); }.mascot-process__live-pose { animation: mascot-live-pose 3.8s ease-in-out infinite; }@keyframes mascot-live-pose { 50% { transform: translateY(-.55rem) rotate(2deg); } }
.mascot-process__build-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(16rem, .9fr); gap: clamp(1.25rem, 4vw, 3rem); width: min(100%, 50rem); margin: auto; border: 1px solid rgba(125,40,72,.16); border-radius: 1.5rem; padding: clamp(1.25rem, 3vw, 2rem); background: rgba(255,255,255,.54); box-shadow: inset 0 1px 0 rgba(255,255,255,.85), 0 1rem 2.4rem rgba(77,12,45,.08); }.mascot-process__build-copy h3 { margin: 0; color: #40343e; font-size: clamp(1.4rem, 2.4vw, 2rem); font-weight: 400; letter-spacing: -.045em; }.mascot-process__build-copy p { margin: .8rem 0 0; color: #5e535d; line-height: 1.55; }.mascot-process__build-copy ol { display: grid; gap: .55rem; margin: 1.25rem 0 0; padding-left: 1.25rem; color: #40343e; font-size: .9rem; line-height: 1.45; }.mascot-process__build-copy li::marker { color: var(--brand-orange); font-weight: 800; }.mascot-process__build-tools { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .7rem; margin: 0; padding: 0; list-style: none; }.mascot-process__build-tools li { display: flex; min-width: 0; align-items: center; gap: .65rem; border: 1px solid rgba(125,40,72,.15); border-radius: .9rem; padding: .75rem; background: rgba(255,248,239,.72); }.mascot-process__build-tools img { width: 2rem; height: 2rem; flex: 0 0 auto; object-fit: contain; }.mascot-process__build-tools span { display: grid; min-width: 0; gap: .12rem; }.mascot-process__build-tools b { color: #40343e; font-size: .78rem; }.mascot-process__build-tools small { color: #75636b; font-size: .64rem; line-height: 1.25; }
@media (max-width: 720px) { .mascot-process__profile-grid, .mascot-process__build-grid { grid-template-columns: 1fr; max-width: 24rem; }.mascot-process__exploded-panel, .mascot-process__actions-panel { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (prefers-reduced-motion: reduce) { .mascot-process__live-pose { animation: none; } }
</style>
