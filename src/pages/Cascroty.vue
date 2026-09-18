<template>
  <main ref="page" class="cascroty-page">
    <section class="case-hero" aria-label="Portada de Cascroty">
      <img class="case-hero__image" :src="teapotHero" alt="Tetera marroquí sirviendo té con pan plano y hierbabuena">
      <img v-if="logoImage" class="case-hero__logo" :src="logoImage" alt="Cascroty">
    </section>

    <section class="cup-stage reveal-stage" aria-label="Aplicación de vaso Cascroty">
      <div class="pattern pattern--top" aria-hidden="true"></div>
      <div class="cup-stage__mockup" :style="cupTilt" @pointermove="tiltCup" @pointerleave="resetCupTilt">
        <div class="cup-stage__spin">
          <img class="cup-stage__image" :src="cup" alt="Vaso de Cascroty">
        </div>
      </div>
    </section>

    <section class="fries-stage reveal-stage" aria-label="Aplicación de cajita de patatas Cascroty">
      <div class="fries-stage__visual">
        <img v-if="friesBoxImage" class="fries-stage__image" :src="friesBoxImage" alt="Cajita de patatas Cascroty con patatas fritas caseras">
      </div>
      <p>Moroccan<br>real food</p>
    </section>

    <section class="paper-stage" aria-labelledby="paper-title">
      <div class="paper-stage__heading">
        <p>02 · Packaging applications</p>
        <h2 id="paper-title">El sistema se adapta a cada bocado.</h2>
      </div>
      <div class="paper-stage__scene" aria-label="Composición de packaging Cascroty">
        <figure class="paper-stage__card paper-stage__card--paper">
          <img :src="paper" alt="Papel de wrapping Cascroty">
          <figcaption>Wrapping paper</figcaption>
        </figure>
        <figure class="paper-stage__card paper-stage__card--bag">
          <img :src="bag" alt="Bolsa Cascroty">
          <figcaption>Delivery bag</figcaption>
        </figure>
        <figure class="paper-stage__card paper-stage__card--delivery">
          <img :src="delivery" alt="Packaging de delivery Cascroty">
          <figcaption>Delivery pack</figcaption>
        </figure>
      </div>
    </section>

    <section class="concept-stage" aria-labelledby="concept-title">
      <div class="concept-stage__copy reveal-stage">
        <p>03 · Concept</p>
        <h2 id="concept-title">Comida callejera marroquí, real y contemporánea.</h2>
        <p>Cascroty reúne bocadillos saludables hechos con ingredientes reales y frescos. Una identidad de colores alegres y estimulantes, pensada para el ritmo cosmopolita y multicultural de Barcelona.</p>
      </div>
      <div class="case-cover__frame reveal-stage" role="region" aria-roledescription="carrusel" aria-label="Aplicaciones visuales de Cascroty" @pointerenter="nextSlide">
        <div class="case-cover__track" :style="{ transform: `translateX(-${activeSlide * 100}%)` }">
          <div v-for="(slide, index) in coverSlides" :key="slide.alt" class="case-cover__slide" :aria-hidden="index === activeSlide ? undefined : 'true'">
            <img class="case-cover__image" :src="slide.src" :alt="index === activeSlide ? slide.alt : ''">
          </div>
        </div>
        <div class="case-cover__controls" aria-label="Controles del carrusel">
          <div class="case-cover__dots" role="tablist" aria-label="Seleccionar imagen">
            <button
              v-for="(slide, index) in coverSlides"
              :key="`${slide.alt}-dot`"
              type="button"
              :class="{ 'case-cover__dot--active': index === activeSlide }"
              :aria-label="`Ver imagen ${index +1}`"
              :aria-selected="index === activeSlide"
              role="tab"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <section class="applications-stage" aria-labelledby="applications-title">
      <div class="applications-stage__heading">
        <p>04 · Illustrated applications</p>
        <h2 id="applications-title">Una marca que se reconoce antes del primer mordisco.</h2>
      </div>
      <div class="applications-stage__grid">
        <figure v-for="item in applications" :key="item.name" class="application reveal-stage">
          <img :src="item.src" :alt="item.alt">
          <figcaption>{{ item.name }}</figcaption>
        </figure>
      </div>
    </section>

    <footer class="case-end">
      <p>Cascroty · Moroccan real food</p>
      <a href="https://www.behance.net/gallery/175132577/Cascroty-packaging-moroccan-real-food" target="_blank" rel="noopener noreferrer">Ver proyecto en Behance ↗</a>
      <RouterLink to="/about">Volver a About</RouterLink>
    </footer>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import teapotPoster from '../assets/cascroty/Ilustración_sin_título.png'
import menuPoster from '../assets/cascroty/Ilustración_sin_título 1.png'
import foodPoster from '../assets/cascroty/Ilustración_sin_título 3.png'
import cup from '../assets/cascroty/Cup.png'
import box from '../assets/cascroty/box.png'
import paper from '../assets/cascroty/Papel.png'
import bag from '../assets/cascroty/bag.png'
import delivery from '../assets/cascroty/Delivery.png'
import burger from '../assets/cascroty/burger.png'
import friesBoxSource from '../assets/cascroty/cascroty-fries-box-chromakey.png'
import logoSource from '../assets/cascroty/cascroty-logo-chromakey.png'
import teapotHero from '../assets/cascroty/cascroty-teapot-hero-wide.png'

gsap.registerPlugin(ScrollTrigger)

const page = ref(null)
const activeSlide = ref(0)
const cupTilt = ref({})
const friesBoxImage = ref('')
const logoImage = ref('')
const coverSlides = [
  { src: teapotPoster, alt: 'Cascroty con tetera, comida marroquí y logotipo' },
  { src: foodPoster, alt: 'Plato de comida marroquí de Cascroty' },
  { src: menuPoster, alt: 'Aplicación de menú de Cascroty' }
]
const applications = [
  { name: 'Delivery bag', src: bag, alt: 'Bolsa de delivery de Cascroty' },
  { name: 'Fries box', src: box, alt: 'Cajita de patatas de Cascroty' },
  { name: 'Burger wrap', src: burger, alt: 'Burger ilustrada de Cascroty' },
  { name: 'Cup', src: cup, alt: 'Vaso ilustrado de Cascroty' }
]
let context

const removeMagentaBackground = (source) => new Promise((resolve, reject) => {
  const image = new Image()
  image.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight
    const drawingContext = canvas.getContext('2d', { willReadFrequently: true })
    drawingContext.drawImage(image, 0, 0)
    const pixels = drawingContext.getImageData(0, 0, canvas.width, canvas.height)

    for (let index = 0; index < pixels.data.length; index += 4) {
      const red = pixels.data[index]
      const green = pixels.data[index + 1]
      const blue = pixels.data[index + 2]
      if (red > 185 && blue > 150 && green < 110) pixels.data[index + 3] = 0
    }

    drawingContext.putImageData(pixels, 0, 0)
    resolve(canvas.toDataURL('image/png'))
  }
  image.onerror = reject
  image.src = source
})

const goToSlide = (index) => {
  activeSlide.value = index
}

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % coverSlides.length
}

const tiltCup = (event) => {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - 0.5
  const y = (event.clientY - bounds.top) / bounds.height - 0.5

  cupTilt.value = {
    '--cup-rotate-x': `${-y * 16}deg`,
    '--cup-rotate-y': `${x * 20}deg`,
    '--cup-lift': '-.8rem'
  }
}

const resetCupTilt = () => {
  cupTilt.value = {}
}

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  removeMagentaBackground(friesBoxSource).then((image) => {
    friesBoxImage.value = image
  })
  removeMagentaBackground(logoSource).then((image) => {
    logoImage.value = image
  })

  if (reducedMotion) return

  context = gsap.context(() => {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.case-cover__slide:first-child', { opacity: 0, scale: 0.96, duration: 0.8 })

    gsap.utils.toArray('.reveal-stage').forEach((stage) => {
      const targets = stage.matches('img') ? stage : stage.querySelectorAll('img, h2, p')
      gsap.from(targets, {
        opacity: 0,
        y: 46,
        scale: 0.97,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: stage, start: 'top 78%', once: true }
      })
    })

    gsap.from('.paper-stage__card', {
      opacity: 0,
      y: 42,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.paper-stage__scene', start: 'top 78%', once: true }
    })
  }, page.value)
})

onBeforeUnmount(() => {
  context?.revert()
})
</script>

<style scoped>
:global(body:has(.cascroty-page)) { background: #e5aa00; }
:global(#app:has(.cascroty-page)) { max-width: none; padding: 0; }
.cascroty-page { --yellow: #e5aa00; --green: #009333; --dark-green: #075f32; --red: #b4200b; color: var(--dark-green); overflow: hidden; background: var(--yellow); text-align: left; }.cascroty-page * { box-sizing: border-box; }.cascroty-page h1, .cascroty-page h2, .cascroty-page p { margin: 0; }.cascroty-page h1, .cascroty-page h2 { font-family: Arial, sans-serif; letter-spacing: -.065em; line-height: .88; }
.case-hero { position: relative; display: grid; min-height: max(44rem, 100vh); place-items: center; overflow: hidden; background: var(--yellow); }.case-hero__image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }.case-hero__logo { position: relative; z-index: 1; width: min(78vw, 52rem); transform: translateY(-20%); filter: drop-shadow(.35rem .5rem .4rem rgba(55, 18, 0, .42)); }.case-cover__frame { position: relative; width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 1.5rem; background: #10351f; box-shadow: 1rem 1.2rem 0 rgba(230, 171, 0, .68); cursor: pointer; transform: rotateX(1.2deg) rotateY(-1.2deg); transform-style: preserve-3d; }.case-cover__track { position: absolute; inset: 0; display: flex; width: 100%; height: 100%; transition: transform .8s cubic-bezier(.22,.8,.28,1); }.case-cover__slide { position: relative; width: 100%; min-width: 100%; height: 100%; overflow: hidden; }.case-cover__slide::after { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0, 29, 13, .18), transparent 44%, rgba(0, 29, 13, .08)); content: ''; pointer-events: none; }.case-cover__image { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }.case-cover__controls { position: absolute; right: clamp(1rem, 3vw, 2.5rem); bottom: clamp(1rem, 3vw, 2.5rem); z-index: 4; padding: .55rem .7rem; border: 1px solid rgba(255, 255, 255, .58); border-radius: 999px; background: rgba(0, 65, 27, .42); box-shadow: 0 .55rem 1.4rem rgba(0, 45, 16, .18); backdrop-filter: blur(.6rem); }.case-cover__dots { display: flex; gap: .42rem; }.case-cover__dots button { width: .5rem; height: .5rem; padding: 0; border: 0; border-radius: 50%; background: rgba(255, 247, 209, .55); cursor: pointer; }.case-cover__dots .case-cover__dot--active { background: #fff7d1; transform: scale(1.25); }
.pattern { position: absolute; z-index: 2; right: 0; left: 0; height: 7rem; opacity: .34; background-image: radial-gradient(circle, #7fe083 0 .22rem, transparent .25rem); background-size: 1.7rem 1.7rem; }.pattern--top { top: 0; }.cup-stage { position: relative; min-height: 92vh; overflow: hidden; background: var(--green); }.cup-stage__mockup { position: absolute; top: 50%; left: 50%; width: min(56rem, 90vw); cursor: pointer; perspective: 1200px; transform: translate(-50%, -50%); }.cup-stage__spin { width: 100%; animation: cup-float-spin 2.8s ease-in-out infinite; }.cup-stage__image { display: block; width: 100%; will-change: transform; transform: translateY(var(--cup-lift, 0)) rotateX(var(--cup-rotate-x, 0deg)) rotateY(var(--cup-rotate-y, 0deg)); transform-style: preserve-3d; transition: transform .2s cubic-bezier(.2,.75,.3,1); }@keyframes cup-float-spin { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-1.45rem) rotate(4deg); } }
.fries-stage { display: grid; min-height: 95vh; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: center; gap: clamp(1.5rem, 5vw, 6rem); overflow: hidden; padding: clamp(2rem, 6vw, 6rem); background: var(--yellow); }.fries-stage__visual { width: min(38rem, 100%); justify-self: end; }.fries-stage__image { display: block; width: 100%; filter: drop-shadow(1rem 1.2rem .9rem rgba(0, 92, 41, .28)); }.fries-stage p { justify-self: start; color: #ffdf64; font-size: clamp(2.6rem, 6vw, 6.5rem); font-weight: 900; letter-spacing: -.08em; line-height: .78; text-transform: uppercase; }
.paper-stage { padding: clamp(4rem, 9vw, 8rem) clamp(1.25rem, 8vw, 8rem); background: var(--yellow); }.paper-stage__heading { max-width: 40rem; margin-bottom: 3rem; }.paper-stage__heading h2, .concept-stage h2, .applications-stage h2 { margin-top: .8rem; font-size: clamp(3rem, 7vw, 7rem); }.paper-stage__scene { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2.5vw, 2rem); }.paper-stage__card { display: flex; min-height: clamp(20rem, 36vw, 32rem); flex-direction: column; align-items: center; justify-content: space-between; margin: 0; padding: clamp(1rem, 2vw, 1.5rem); border: 1px solid rgba(255, 247, 209, .64); border-radius: 1.5rem; background: rgba(255, 247, 209, .2); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .42), .7rem .8rem 0 rgba(0, 92, 41, .16); backdrop-filter: blur(.7rem); }.paper-stage__card img { display: block; width: 100%; min-height: 0; flex: 1; object-fit: contain; filter: drop-shadow(.8rem 1rem .8rem rgba(57, 45, 0, .25)); }.paper-stage__card figcaption { width: 100%; margin-top: .75rem; color: var(--dark-green); font-size: .68rem; font-weight: 900; letter-spacing: .14em; text-transform: uppercase; }
.concept-stage { display: grid; grid-template-columns: minmax(0, .9fr) minmax(19rem, 1.1fr); align-items: center; gap: clamp(2rem, 7vw, 8rem); padding: clamp(5rem, 10vw, 9rem) clamp(1.25rem, 8vw, 8rem); background: var(--green); color: var(--dark-green); }.concept-stage__copy > p:last-child { margin-top: 2rem; max-width: 35rem; font-size: clamp(1.05rem, 1.8vw, 1.45rem); font-weight: 700; line-height: 1.52; }.concept-stage__image { display: block; width: 100%; border-radius: 1.5rem; box-shadow: 1.1rem 1.1rem 0 rgba(230, 171, 0, .68); }
.applications-stage { padding: clamp(5rem, 10vw, 9rem) clamp(1.25rem, 8vw, 8rem); background: var(--yellow); }.applications-stage__heading { max-width: 52rem; }.applications-stage__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 3vw, 2.5rem); margin-top: 4rem; }.application { display: flex; min-height: clamp(17rem, 34vw, 31rem); flex-direction: column; justify-content: space-between; margin: 0; padding: 1rem; border-radius: 1.5rem; background: #f3bc13; }.application img { display: block; width: 100%; min-height: 0; flex: 1; object-fit: contain; }.application figcaption { margin: .75rem .2rem .1rem; font-size: .7rem; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
.case-end { display: flex; min-height: 55vh; flex-direction: column; justify-content: center; gap: 1rem; padding: clamp(3rem, 9vw, 8rem); background: var(--green); }.case-end a { width: fit-content; color: var(--dark-green); font-size: clamp(1.4rem, 3vw, 2.5rem); font-weight: 900; text-decoration: none; }.case-end a:hover { text-decoration: underline; }
@media (max-width: 700px) { .case-hero { min-height: max(44rem, 100vh); }.case-hero__logo { width: 90vw; }.case-cover__frame { transform: none; }.case-cover__image { object-position: center; }.case-cover__controls { right: 50%; bottom: 1.25rem; transform: translateX(50%); }.cup-stage { min-height: 38rem; }.cup-stage__mockup { width: min(96vw, 35rem); transform: translate(-50%, -50%); }.fries-stage { min-height: 42rem; grid-template-columns: 1fr; gap: 1rem; padding: 3rem 1.25rem; }.fries-stage__visual { width: min(76vw, 25rem); justify-self: center; }.fries-stage p { justify-self: center; font-size: clamp(2.6rem, 11vw, 5rem); text-align: center; }.paper-stage__scene { grid-template-columns: 1fr; }.paper-stage__card { min-height: 24rem; }.concept-stage { grid-template-columns: 1fr; }.applications-stage__grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .cascroty-page *, .cascroty-page *::before, .cascroty-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
</style>
