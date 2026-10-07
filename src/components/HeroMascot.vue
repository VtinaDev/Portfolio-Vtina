<template>
  <figure class="hero-mascot" :class="{ 'hero-mascot--tech-only': techOnly, 'hero-mascot--static': !animated, [`hero-mascot--pose-${pose}`]: pose }" :style="mascotStyle" :aria-label="techOnly ? 'Carrusel de tecnologías de VTina Dev' : 'Mascota de VTina Dev saludando'" @pointerenter="animated && triggerWave()">
    <div v-if="!techOnly" class="hero-mascot__float" :class="{ 'is-waving': isWaving }">
      <img class="hero-mascot__layer hero-mascot__body" :src="body" alt="">
      <img class="hero-mascot__layer hero-mascot__left-arm hero-mascot__left-arm--raised" :src="leftArm" alt="">
      <img class="hero-mascot__layer hero-mascot__left-arm hero-mascot__left-arm--lowered" :src="leftArmLowered" alt="">
      <img class="hero-mascot__layer hero-mascot__right-arm" :src="rightArm" alt="">
      <img class="hero-mascot__layer hero-mascot__head" :src="head" alt="">
      <img class="hero-mascot__layer hero-mascot__eyes" :src="isBlinking || pose === 'blink' ? eyesClosed : eyes" alt="">
      <img class="hero-mascot__layer hero-mascot__smile hero-mascot__smile--soft" :src="smile" alt="">
      <img class="hero-mascot__layer hero-mascot__smile hero-mascot__smile--laugh" :src="laugh" alt="">
    </div>
    <div v-if="showTechnologies" class="hero-mascot__tech-rail" aria-label="Tecnologías y herramientas de VTina Dev">
      <span v-for="technology in technologies" :key="technology.label" class="hero-mascot__tech-screen" :class="`hero-mascot__tech-screen--${technology.className}`">
        <img v-if="technology.icon" :src="technology.icon" alt="" aria-hidden="true">
        <b v-else aria-hidden="true">{{ technology.mark }}</b>
      </span>
    </div>
  </figure>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import body from '../assets/mascot/Cuerpo.png'
import head from '../assets/mascot/Cabeza.png'
import eyes from '../assets/mascot/Ojos.png'
import eyesClosed from '../assets/mascot/Ojos-cerrados.png'
import smile from '../assets/mascot/Sonríe.png'
import laugh from '../assets/mascot/Risa.png'
import leftArm from '../assets/mascot/Izquierdo.png'
import leftArmLowered from '../assets/mascot/Izquierdo-bajado.png'
import rightArm from '../assets/mascot/Derecho.png'
import vueIcon from '../assets/icons/vuejs.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import figmaIcon from '../assets/icons/figma.svg'
import openaiIcon from '../assets/icons/openai.svg'
import elevenLabsIcon from '../assets/icons/elevenlabs.svg'

const props = defineProps({
  parallax: { type: Object, default: () => ({ x: 0, y: 0 }) },
  techOnly: { type: Boolean, default: false },
  showTechnologies: { type: Boolean, default: true },
  animated: { type: Boolean, default: true },
  pose: { type: String, default: '' }
})
const isBlinking = ref(false)
const isWaving = ref(false)
let blinkTimer
let waveTimeout
let waveTimer

const mascotStyle = computed(() => ({ '--mascot-x': `${props.parallax.x || 0}px`, '--mascot-y': `${props.parallax.y || 0}px` }))
const technologies = [
  { label: 'Vue', icon: vueIcon, className: 'vue' },
  { label: 'JavaScript', icon: javascriptIcon, className: 'javascript' },
  { label: 'Figma', icon: figmaIcon, className: 'figma' },
  { label: 'OpenAI', icon: openaiIcon, className: 'openai' },
  { label: 'ElevenLabs', icon: elevenLabsIcon, className: 'elevenlabs' }
]

function triggerWave() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  window.clearTimeout(waveTimeout)
  isWaving.value = false
  window.requestAnimationFrame(() => {
    isWaving.value = true
    waveTimeout = window.setTimeout(() => { isWaving.value = false }, 2100)
  })
}

onMounted(() => {
  if (!props.animated || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  window.requestAnimationFrame(triggerWave)
  blinkTimer = window.setInterval(() => {
    isBlinking.value = true
    window.setTimeout(() => { isBlinking.value = false }, 150)
  }, 3800)
  waveTimer = window.setInterval(triggerWave, 7200)
})

onBeforeUnmount(() => {
  window.clearInterval(blinkTimer)
  window.clearTimeout(waveTimeout)
  window.clearInterval(waveTimer)
})
</script>

<style scoped>
.hero-mascot { position: relative; width: min(100%, 34rem); margin: 0; aspect-ratio: 1; transform: translate3d(var(--mascot-x), var(--mascot-y), 0); transition: transform .55s cubic-bezier(.2,.75,.3,1); will-change: transform; }
.hero-mascot--tech-only { overflow: hidden; border: 1px solid rgba(255,255,255,.55); border-radius: var(--liquid-card-radius, 25px); background: linear-gradient(145deg, rgba(255,255,255,.18), rgba(185,0,56,.14)); box-shadow: inset 0 1px 1px rgba(255,255,255,.6), inset 0 -8px 18px rgba(40,0,15,.12), 0 1rem 2.3rem rgba(77,12,45,.24); backdrop-filter: blur(16px) saturate(130%); -webkit-backdrop-filter: blur(16px) saturate(130%); }
.hero-mascot__float { position: absolute; inset: 0; animation: mascot-idle-float 3.8s ease-in-out infinite; filter: drop-shadow(0 .5rem .65rem rgba(77, 36, 27, .28)) drop-shadow(0 1.35rem 1.85rem rgba(77, 36, 27, .48)); transform-origin: 50% 82%; }
.hero-mascot__layer { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: contain; pointer-events: none; }
.hero-mascot__body { z-index: 1; animation: body-breathe 4.2s ease-in-out infinite; transform-origin: 50% 76%; }.hero-mascot__left-arm { z-index: 3; transform-origin: 50% 75%; }.hero-mascot__left-arm--raised { opacity: 0; }.hero-mascot__left-arm--lowered { opacity: 1; }.hero-mascot__float.is-waving .hero-mascot__left-arm--raised { animation: wave-raised 2s ease-in-out both; }.hero-mascot__float.is-waving .hero-mascot__left-arm--lowered { animation: wave-lowered 2s ease-in-out both; }.hero-mascot__right-arm { z-index: 4; }.hero-mascot__head { z-index: 2; }.hero-mascot__eyes { z-index: 5; }.hero-mascot__smile { z-index: 6; transform-origin: 50% 48%; }.hero-mascot__smile--soft { opacity: 1; }.hero-mascot__smile--laugh { opacity: 0; }.hero-mascot__float.is-waving .hero-mascot__smile--soft { animation: smile-soft-wave 2s ease-in-out both; }.hero-mascot__float.is-waving .hero-mascot__smile--laugh { animation: smile-laugh-wave 2s ease-in-out both; }
.hero-mascot--static .hero-mascot__float, .hero-mascot--static .hero-mascot__body { animation: none; }
.hero-mascot--pose-wave .hero-mascot__left-arm--raised { opacity: 1; transform: rotate(-14deg) translate(-3%, -4%); }.hero-mascot--pose-wave .hero-mascot__left-arm--lowered { opacity: 0; }.hero-mascot--pose-look .hero-mascot__head, .hero-mascot--pose-look .hero-mascot__eyes, .hero-mascot--pose-look .hero-mascot__smile { transform: translateX(-5%); }.hero-mascot--pose-happy .hero-mascot__smile--soft { opacity: 0; }.hero-mascot--pose-happy .hero-mascot__smile--laugh { opacity: 1; transform: scale(1.02); }
.hero-mascot__tech-rail { position: absolute; z-index: 7; inset: 0; pointer-events: none; }
.hero-mascot__tech-screen { position: absolute; display: grid; width: 4.35rem; height: 4.35rem; place-items: center; border: 1px solid rgba(255,255,255,.7); border-radius: .9rem; background: rgba(255,255,255,.16); box-shadow: inset 0 1px 1px rgba(255,255,255,.55), 0 .35rem .9rem rgba(77,12,45,.12); color: #fff; backdrop-filter: blur(.9rem) saturate(115%); -webkit-backdrop-filter: blur(.9rem) saturate(115%); pointer-events: auto; transition: filter .25s ease, box-shadow .25s ease; }
.hero-mascot__tech-screen::before { position: absolute; inset: 1px; border-radius: inherit; background: linear-gradient(120deg, rgba(255,255,255,.3), transparent 42%, transparent 72%, rgba(255,255,255,.13)); content: ''; pointer-events: none; }.hero-mascot__tech-screen:hover { filter: brightness(1.12); box-shadow: inset 0 1px 1px rgba(255,255,255,.82), 0 .55rem 1.2rem rgba(77,12,45,.18); }.hero-mascot__tech-screen b, .hero-mascot__tech-screen img { position: relative; z-index: 1; }.hero-mascot__tech-screen b { display: grid; width: 2.7rem; height: 2.7rem; place-items: center; border-radius: .5rem; background: rgba(255,255,255,.18); color: #fff; font-family: ui-monospace, monospace; font-size: 1.2rem; letter-spacing: -.06em; }.hero-mascot__tech-screen img { width: 2.8rem; height: 2.8rem; opacity: 1; }
.hero-mascot__tech-screen { --carousel-duration: 10s; --carousel-offset: 0s; top: 68%; left: 50%; animation: tech-carousel var(--carousel-duration) linear infinite both; animation-delay: var(--carousel-offset); will-change: transform, opacity; }.hero-mascot__tech-screen--vue { --carousel-offset: 0s; }.hero-mascot__tech-screen--javascript { --carousel-offset: -2s; }.hero-mascot__tech-screen--figma { --carousel-offset: -4s; }.hero-mascot__tech-screen--openai { --carousel-offset: -6s; }.hero-mascot__tech-screen--elevenlabs { --carousel-offset: -8s; }
@keyframes mascot-idle-float { 0%,100% { transform: translateY(0) rotate(-.7deg); } 50% { transform: translateY(-.55rem) rotate(.7deg); } } @keyframes body-breathe { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-.14rem) scale(1.018, 1.03); } } @keyframes wave-raised { 0%,16%,100% { opacity: 0; } 25%,43% { opacity: 1; } 53%,71% { opacity: 1; } 80% { opacity: 0; } } @keyframes wave-lowered { 0%,16%,100% { opacity: 1; } 25%,43% { opacity: 0; } 53%,71% { opacity: 0; } 80% { opacity: 1; } } @keyframes smile-soft-wave { 0%,16%,100% { opacity: 1; transform: scale(1); } 25%,71% { opacity: 0; transform: scale(1.01); } 80% { opacity: 1; transform: scale(1); } } @keyframes smile-laugh-wave { 0%,16%,100% { opacity: 0; transform: scale(.99); } 25%,71% { opacity: 1; transform: scale(1.01); } 80% { opacity: 0; transform: scale(1); } } @keyframes tech-carousel { 0% { z-index: 1; opacity: 0; transform: translate(-50%, -50%) translateX(-13rem) perspective(32rem) rotateY(42deg) scale(.72); } 10% { z-index: 1; opacity: .34; transform: translate(-50%, -50%) translateX(-11rem) perspective(32rem) rotateY(35deg) scale(.74); } 25% { z-index: 2; opacity: .6; transform: translate(-50%, -50%) translateX(-7rem) perspective(32rem) rotateY(24deg) scale(.82); } 40% { z-index: 3; opacity: .84; transform: translate(-50%, -50%) translateX(-3rem) perspective(32rem) rotateY(11deg) scale(1); } 50% { z-index: 4; opacity: 1; transform: translate(-50%, -50%) translateX(0) perspective(32rem) rotateY(0deg) scale(1.1); } 60% { z-index: 3; opacity: .84; transform: translate(-50%, -50%) translateX(3rem) perspective(32rem) rotateY(-11deg) scale(1); } 75% { z-index: 2; opacity: .6; transform: translate(-50%, -50%) translateX(7rem) perspective(32rem) rotateY(-24deg) scale(.82); } 90% { z-index: 1; opacity: .34; transform: translate(-50%, -50%) translateX(11rem) perspective(32rem) rotateY(-35deg) scale(.74); } 100% { z-index: 1; opacity: 0; transform: translate(-50%, -50%) translateX(13rem) perspective(32rem) rotateY(-42deg) scale(.72); } }
@media (prefers-reduced-motion: reduce) { .hero-mascot__float, .hero-mascot__layer, .hero-mascot__tech-screen { animation: none; } }
@media (max-width: 560px) { .hero-mascot__tech-screen { width: 2.9rem; height: 2.9rem; animation-name: tech-carousel-mobile; } @keyframes tech-carousel-mobile { 0% { z-index: 1; opacity: 0; transform: translate(-50%, -50%) translateX(-8.4rem) perspective(24rem) rotateY(38deg) scale(.68); } 10% { z-index: 1; opacity: .34; transform: translate(-50%, -50%) translateX(-7rem) perspective(24rem) rotateY(31deg) scale(.7); } 25% { z-index: 2; opacity: .6; transform: translate(-50%, -50%) translateX(-4.5rem) perspective(24rem) rotateY(21deg) scale(.78); } 40% { z-index: 3; opacity: .84; transform: translate(-50%, -50%) translateX(-1.8rem) perspective(24rem) rotateY(10deg) scale(.94); } 50% { z-index: 4; opacity: 1; transform: translate(-50%, -50%) translateX(0) perspective(24rem) rotateY(0deg) scale(1.05); } 60% { z-index: 3; opacity: .84; transform: translate(-50%, -50%) translateX(1.8rem) perspective(24rem) rotateY(-10deg) scale(.94); } 75% { z-index: 2; opacity: .6; transform: translate(-50%, -50%) translateX(4.5rem) perspective(24rem) rotateY(-21deg) scale(.78); } 90% { z-index: 1; opacity: .34; transform: translate(-50%, -50%) translateX(7rem) perspective(24rem) rotateY(-31deg) scale(.7); } 100% { z-index: 1; opacity: 0; transform: translate(-50%, -50%) translateX(8.4rem) perspective(24rem) rotateY(-38deg) scale(.68); } } }
</style>
