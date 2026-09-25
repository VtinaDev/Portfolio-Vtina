<template>
  <main ref="page" class="cascroty-page">
    <section class="hero" aria-label="Cascroty, Moroccan real food">
      <picture>
        <source media="(max-width: 700px)" :srcset="teapotMobile">
        <img class="hero__photo" :src="teapot" alt="Tetera marroquí sirviendo té con menta">
      </picture>
      <img class="hero__logo" :src="logo" alt="Cascroty">
      <img class="hero__pattern hero__pattern--left" :src="pattern" alt="" aria-hidden="true">
      <img class="hero__pattern hero__pattern--right" :src="pattern" alt="" aria-hidden="true">
      <span class="hero__scroll">Scroll to taste ↓</span>
    </section>

    <section class="real-food" aria-labelledby="real-food-title">
      <div class="real-food__arabic-marquee" aria-label="طعام حقيقي">
        <div class="real-food__arabic-track">
          <img :src="darija" alt="طعام حقيقي">
          <span class="real-food__separator" aria-hidden="true">✦</span>
          <span class="real-food__tagline">Moroccan real food</span>
          <span class="real-food__separator" aria-hidden="true">✦</span>
          <img :src="darija" alt="" aria-hidden="true">
          <span class="real-food__separator" aria-hidden="true">✦</span>
          <span class="real-food__tagline" aria-hidden="true">Moroccan real food</span>
          <span class="real-food__separator" aria-hidden="true">✦</span>
        </div>
      </div>
      <h1 id="real-food-title" class="sr-only">Comida marroquí real</h1>
      <img class="real-food__wraps reveal" :src="bocadillo" alt="Bocadillo de pollo marroquí con ingredientes frescos">
      <img class="real-food__beef reveal" :src="bocadilloTerneraCutout" alt="Bocadillo de ternera marroquí con ingredientes frescos">
      <img class="real-food__cheeseburger" :src="burgerChees" alt="Cheeseburger de Cascroty">
      <img class="real-food__hero-pattern" :src="patternYellow" alt="" aria-hidden="true">
      <div class="real-food__arabic-marquee real-food__arabic-marquee--bottom" aria-hidden="true">
        <div class="real-food__arabic-track">
          <img :src="darija" alt="">
          <span class="real-food__separator">✦</span>
          <span class="real-food__tagline">Moroccan real food</span>
          <span class="real-food__separator">✦</span>
          <img :src="darija" alt="">
          <span class="real-food__separator">✦</span>
          <span class="real-food__tagline">Moroccan real food</span>
          <span class="real-food__separator">✦</span>
        </div>
      </div>
    </section>

    <section class="paper-feature" aria-label="Papel de wrapping Cascroty">
      <img class="paper-feature__pattern" :src="pattern" alt="" aria-hidden="true">
      <div class="paper-feature__carousel">
        <div class="paper-feature__track">
          <img class="paper-feature__image paper-feature__image--paper" :src="paper" alt="Papel de wrapping Cascroty">
          <img class="paper-feature__image paper-feature__image--carton" :src="friesCarton" alt="Envase de patatas Cascroty">
          <img class="paper-feature__image paper-feature__image--delivery" :src="delivery" alt="Packaging de delivery Cascroty">
        </div>
      </div>
    </section>

    <section class="concept-copy" aria-label="Concepto de Cascroty">
      <img :src="presentacion" alt="Presentación de la identidad Cascroty">
    </section>

    <section class="counter-menu" aria-labelledby="counter-menu-title">
      <div class="counter-menu__topline">
        <span>CAS CRO TY · BARCELONA</span>
        <span>Moroccan real food</span>
        <span>Todo fresco · Todo real</span>
      </div>
      <div class="counter-menu__heading">
        <p>Elige tu favorito</p>
        <h2 id="counter-menu-title">MENÚ DEL DÍA</h2>
        <span class="counter-menu__tag">100% HALAL <b lang="ar" aria-hidden="true">حلال</b></span>
      </div>
      <div class="counter-menu__board">
        <article class="menu-card menu-card--wide">
          <h3>COMBO MENÚ</h3>
          <div class="menu-card__combo-product">
            <img class="menu-card__combo-chicken" :src="bocadillo" alt="Bocadillo de pollo de Cascroty">
            <img class="menu-card__combo-beef" :src="bocadilloTerneraCutout" alt="Bocadillo de ternera de Cascroty">
            <img class="menu-card__combo-chees" :src="burgerChees" alt="Burger-chees de Cascroty">
            <img class="menu-card__combo-fries" :src="friesBox" alt="Caja de patatas de Cascroty">
            <img class="menu-card__combo-cup" :src="cupNoShadow" alt="Vaso de Cascroty">
            <img class="menu-card__sauce menu-card__sauce--andalus" :src="salsaAndalus" alt="Salsa al-Ándalus">
            <img class="menu-card__sauce menu-card__sauce--algerienne" :src="salsaAlgerienne" alt="Salsa algérienne">
            <img class="menu-card__combo-burger" :src="burger" alt="Burger de Cascroty">
          </div>
          <p>BOCADILLO · PATATAS · BEBIDA</p>
          <strong class="menu-price">8,50€</strong>
        </article>
        <article class="menu-card">
          <h3>PATATICAS</h3>
          <img :src="friesBox" alt="Patatas de Cascroty">
          <strong class="menu-price">3,50€</strong>
        </article>
        <article class="menu-card menu-card--chicken">
          <h3>POLLO A LA BRASA</h3>
          <img :src="bocadillo" alt="Bocadillo de ternera de Cascroty">
          <img class="menu-card__sauce menu-card__sauce--andalus" :src="salsaAndalus" alt="Salsa al-Ándalus">
          <img class="menu-card__sauce menu-card__sauce--algerienne" :src="salsaAlgerienne" alt="Salsa algérienne">
          <strong class="menu-price">6,50€</strong>
        </article>
        <article class="menu-card menu-card--drink">
          <h3>REFRESCO + BOCADILLO</h3>
          <img :src="cupNoShadow" alt="Vaso de refresco Cascroty">
          <img class="menu-card__burger" :src="burger" alt="Burger de Cascroty">
          <strong class="menu-price">7,50€</strong>
        </article>
        <article class="menu-card menu-card--drink menu-card--refreshment">
          <h3>REFRESCO</h3>
          <img :src="cupNoShadow" alt="Vaso de refresco Cascroty">
          <strong class="menu-price">2,00€</strong>
        </article>
        <article class="menu-card menu-card--beef">
          <h3>TERNERA A LA BRASA</h3>
          <img :src="bocadilloTernera" alt="Bocadillo de ternera a la brasa de Cascroty">
          <strong class="menu-price">7,00€</strong>
        </article>
        <article class="menu-card menu-card--tea">
          <h3>TÉ MORUNO</h3>
          <img :src="teapotMenu" alt="Tetera marroquí y vaso de té con menta">
          <strong class="menu-price">2,50€</strong>
        </article>
      </div>
      <p class="counter-menu__footer">PIDE EN BARRA · DISFRUTA SIN PRISA · بسم الله</p>
    </section>

    <section class="menu-feature" aria-label="Menú de Cascroty">
      <img class="menu-feature__bag" :src="delivery" alt="Bolsa de delivery Cascroty">
      <img class="menu-feature__menu menu-feature__menu--one" :src="menu" alt="Menú de Cascroty">
      <img class="menu-feature__menu menu-feature__menu--two" :src="menu" alt="" aria-hidden="true">
      <img class="menu-feature__menu menu-feature__menu--three" :src="menu" alt="" aria-hidden="true">
      <img class="menu-feature__box" :src="box" alt="Caja de patatas Cascroty">
      <img class="menu-feature__burger" :src="burger" alt="Burger de Cascroty">
    </section>

    <section class="cup-scene" aria-label="Vaso de Cascroty">
      <div class="cup-scene__copy">
        <p>Moroccan real food</p>
        <h2>Una identidad<br>que se saborea.</h2>
        <p class="cup-scene__text">Sabores frescos, recetas honestas y una identidad viva para comer con las manos, sin reglas y con mucho color.</p>
      </div>
      <picture>
        <source media="(max-width: 700px)" :srcset="cupNoShadow">
        <img class="cup-scene__cup" :src="cup" alt="Vaso verde de Cascroty">
      </picture>
    </section>

    <footer class="case-footer">
      <a href="https://www.behance.net/gallery/175132577/Cascroty-packaging-moroccan-real-food" target="_blank" rel="noopener noreferrer">View full project on Behance</a>
    </footer>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logo from '../assets/cascroty/Logo.png'
import teapot from '../assets/cascroty/cascroty-teapot-hero-wide.png'
import teapotMobile from '../assets/cascroty/cascroty-teapot-hero.png'
import teapotMenu from '../assets/cascroty/tetera-y-te-menta.png'
import pattern from '../assets/cascroty/pattern-yellow.png'
import patternYellow from '../assets/cascroty/pattern-yellow.png'
import bocadillo from '../assets/cascroty/bocadillo-individual-transparent.png'
import bocadilloTernera from '../assets/cascroty/bocadillo-ternera-feature.png'
import bocadilloTerneraCutout from '../assets/cascroty/bocadillo-ternera.png'
import menu from '../assets/cascroty/menu.png'
import friesCarton from '../assets/cascroty/cascroty-fries-carton-transparent.png'
import darija from '../assets/cascroty/Darijha-transparent.png'
import cup from '../assets/cascroty/cup2.png'
import cupNoShadow from '../assets/cascroty/Cup-sin-sombra.png'
import burger from '../assets/cascroty/burger.png'
import burgerChees from '../assets/cascroty/burger-chees.png'
import salsaAndalus from '../assets/cascroty/salsa-al-andalus.png'
import salsaAlgerienne from '../assets/cascroty/salsa-algerienne.png'
import delivery from '../assets/cascroty/Delivery.png'
import paper from '../assets/cascroty/Papel-cropped.png'
import friesBox from '../assets/cascroty/Caja-fritas.png'
import box from '../assets/cascroty/box.png'
import presentacion from '../assets/cascroty/presentacion.png'

gsap.registerPlugin(ScrollTrigger)
const page = ref(null)
let context

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  context = gsap.context(() => {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .from('.hero__photo', { scale: 1.07, duration: 1.3 })
      .from('.hero__scroll', { opacity: 0, y: 12, duration: .45 }, .7)
    gsap.utils.toArray('.reveal').forEach((element) => {
      gsap.from(element, { opacity: 0, y: 54, rotate: -2, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 84%', once: true } })
    })
  }, page.value)
})

onBeforeUnmount(() => context?.revert())
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

:global(body:has(.cascroty-page)) { margin: 0; background: #e5ad00; }
:global(#app:has(.cascroty-page)) { max-width: none; min-height: 0; padding: 0; }
.cascroty-page { --yellow: #e5ad00; --bright-yellow: #f6bf00; --green: #009a38; --deep-green: #005d30; --red: #b6200c; --ink: #00582c; overflow: hidden; background: var(--yellow); color: var(--ink); font-family: Arial, Helvetica, sans-serif; }
.cascroty-page *, .cascroty-page *::before, .cascroty-page *::after { box-sizing: border-box; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
.hero { position: relative; height: min(100svh, 60vw); min-height: 37rem; overflow: hidden; background: var(--yellow); isolation: isolate; }
.hero__photo { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.hero__logo { position: absolute; z-index: 2; top: 60%; left: 50%; width: min(58vw, 58rem); filter: drop-shadow(.35rem .48rem 0 rgba(112, 36, 0, .14)); transform: translate(-50%, -50%); }
.hero__pattern { position: absolute; z-index: 1; bottom: -18%; width: 30rem; opacity: .34; mix-blend-mode: soft-light; animation: pattern-drift 10s ease-in-out infinite alternate; }.hero__pattern--left { left: -11%; }.hero__pattern--right { right: -11%; transform: rotate(180deg); animation-delay: -4s; }
.hero__scroll { position: absolute; z-index: 3; right: 2.2rem; bottom: 1.9rem; color: var(--green); font-size: .66rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
.real-food { position: relative; display: grid; height: min(53vw, 57rem); place-content: center; place-items: center; overflow: hidden; padding: 1rem 1.5rem; background: #d49b00; }
.real-food__arabic-marquee { position: absolute; z-index: 3; top: 0; right: 0; left: 0; overflow: hidden; }.real-food__arabic-track { display: flex; width: max-content; height: clamp(3rem, 5vw, 4.75rem); align-items: center; gap: clamp(2rem, 5vw, 5rem); animation: arabic-marquee 22s linear infinite; }.real-food__arabic-track img { display: block; width: min(27vw, 22rem); height: 100%; flex: none; object-fit: cover; object-position: center 42%; }.real-food__arabic-track span { display: flex; height: 100%; flex: none; align-items: center; color: #12561b; font-size: clamp(1.1rem, 2vw, 2.1rem); font-weight: 900; letter-spacing: -.05em; text-transform: uppercase; white-space: nowrap; }.real-food__arabic-track .real-food__tagline { font-family: Arial, Helvetica, sans-serif; font-stretch: expanded; font-weight: 400; letter-spacing: .12em; }.real-food__arabic-track .real-food__separator { color: #12561b; font-size: clamp(1.35rem, 2.4vw, 2.5rem); }.real-food__wraps { position: relative; z-index: 2; width: min(52vw, 47rem); filter: drop-shadow(1.2rem 1.35rem .65rem rgba(89, 51, 0, .26)); }.real-food__burger { position: absolute; z-index: 5; right: auto; bottom: 17%; left: 43%; width: min(22vw, 18rem); animation: burger-spin 14s linear infinite; }.real-food__hero-pattern { position: absolute; z-index: 1; top: -1%; left: 1%; width: 98%; height: 102%; max-width: none; object-fit: cover; opacity: .32; pointer-events: none; animation: hero-pattern-flow 24s linear infinite alternate; }
.real-food__wraps { position: absolute; z-index: 2; bottom: 8%; left: 24%; width: min(34vw, 27rem); transform: none; }
.real-food__beef { position: absolute; z-index: 5; bottom: 25%; left: 52%; width: min(25vw, 21rem); filter: drop-shadow(.8rem 1rem .6rem rgba(89, 51, 0, .24)); }
.real-food__cheeseburger { position: absolute; z-index: 6; bottom: 8%; left: 42%; width: min(22vw, 18rem); filter: drop-shadow(.55rem .7rem .45rem rgba(89, 51, 0, .2)); transform: rotate(8deg); }
.paper-feature { position: relative; display: grid; height: min(50vw, 43rem); place-items: center; overflow: hidden; padding: .5rem; background: var(--bright-yellow); }.paper-feature__pattern { position: absolute; top: -34%; left: -7%; width: min(52vw, 48rem); opacity: .24; transform: rotate(180deg); }.paper-feature__image { position: relative; z-index: 1; display: block; width: auto; height: 88%; max-width: 100vw; justify-self: center; align-self: center; object-fit: contain; transform: none; filter: drop-shadow(1.2rem 1.45rem .8rem rgba(112, 70, 0, .22)); }
.concept-copy { display: grid; min-height: min(56vw, 48rem); place-items: center; padding: clamp(4rem, 10vw, 9rem) clamp(1.5rem, 13vw, 13rem); background: var(--green); }.concept-copy__content { max-width: 62rem; text-align: left; }.concept-copy p { margin: 0; color: #00521f; font-size: clamp(1rem, 1.75vw, 1.65rem); font-weight: 800; letter-spacing: .08em; line-height: 1.42; text-transform: uppercase; }.concept-copy p + p { margin-top: clamp(2.5rem, 6vw, 6rem); }
.menu-feature { display: grid; min-height: min(58vw, 52rem); place-items: center; overflow: hidden; padding: clamp(2rem, 5vw, 5rem) 1rem; background: var(--yellow); }.menu-feature img { display: block; width: min(76vw, 70rem); max-height: 42rem; object-fit: contain; filter: drop-shadow(.38rem .52rem .55rem rgba(61, 37, 0, .78)); }
.counter-menu { position: relative; overflow: hidden; padding: clamp(1rem, 3vw, 2.5rem); background: #ed1839; color: #075589; }.counter-menu::before { position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 222, 77, .22) 1px, transparent 1px); background-size: .45rem .45rem; content: ''; opacity: .65; pointer-events: none; }.counter-menu__topline, .counter-menu__heading, .counter-menu__board, .counter-menu__footer { position: relative; z-index: 1; }.counter-menu__topline { display: flex; justify-content: space-between; gap: 1rem; padding: .25rem .7rem 1rem; color: #f7d73e; font-size: clamp(.55rem, .85vw, .8rem); font-weight: 900; letter-spacing: .11em; text-transform: uppercase; }.counter-menu__heading { display: grid; grid-template-columns: 1fr auto 1fr; align-items: end; max-width: 86rem; margin: 0 auto 1.2rem; color: #a9e9f2; }.counter-menu__heading p { margin: 0 0 .5rem; font-size: clamp(.55rem, 1vw, .85rem); font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }.counter-menu__heading h2 { margin: 0; color: #a9e9f2; font-family: 'Bungee', Arial, sans-serif; font-size: clamp(2.2rem, 6vw, 6rem); font-weight: 400; letter-spacing: -.03em; line-height: .9; text-align: center; text-shadow: .18rem .2rem 0 #075589; }.counter-menu__tag { justify-self: end; border: .18rem solid currentColor; border-radius: 999px; padding: .42rem .75rem; color: #f7d73e; font-size: clamp(.55rem, .9vw, .78rem); font-weight: 900; letter-spacing: .08em; transform: rotate(-7deg); }.counter-menu__board { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(.5rem, 1.3vw, 1.2rem); max-width: 86rem; margin: auto; padding: clamp(.6rem, 1.5vw, 1.4rem); border: clamp(.35rem, .8vw, .75rem) solid #075589; border-radius: 1.1rem; background: #d70e2d; box-shadow: 0 .55rem 0 rgba(79, 20, 30, .32); }.menu-card { position: relative; display: flex; min-height: clamp(13rem, 22vw, 21rem); align-items: center; justify-content: center; overflow: hidden; border: clamp(.18rem, .45vw, .4rem) solid #075589; border-radius: 1.25rem; background: #9de4ef; padding: 2.8rem .6rem 1rem; text-align: center; box-shadow: inset 0 0 0 .15rem rgba(255, 255, 255, .35); }.menu-card--wide { grid-column: span 2; }.menu-card h3 { position: absolute; z-index: 2; top: .55rem; right: .5rem; left: .5rem; margin: 0; color: #075589; font-family: 'Bungee', Arial, sans-serif; font-size: clamp(.85rem, 1.7vw, 1.7rem); font-weight: 400; letter-spacing: -.04em; line-height: .9; }.menu-card img { display: block; width: 92%; height: 78%; object-fit: contain; filter: drop-shadow(.35rem .45rem 0 rgba(0, 83, 122, .18)); transition: transform .35s ease; }.menu-card__combo-product { display: flex; width: 90%; height: 88%; align-items: end; justify-content: center; }.menu-card__combo-product img { width: 67%; height: 100%; }.menu-card__combo-product img + img { width: 30%; height: 66%; margin-left: -8%; margin-bottom: .2rem; }.menu-card__combo-product img + img + img { width: 18%; height: 52%; margin-left: -6%; margin-bottom: .1rem; }.menu-card:hover img { transform: scale(1.07) rotate(-2deg); }.menu-card p { position: absolute; z-index: 2; bottom: .5rem; left: .55rem; margin: 0; color: #075589; font-size: clamp(.48rem, .8vw, .72rem); font-weight: 900; letter-spacing: .03em; }.menu-price { position: absolute; z-index: 3; right: -.5rem; bottom: .2rem; display: grid; width: clamp(3.2rem, 5.5vw, 5.25rem); aspect-ratio: 1; place-items: center; background: #d8f22f; clip-path: polygon(50% 0%, 61% 25%, 80% 7%, 78% 34%, 100% 33%, 80% 49%, 98% 64%, 72% 65%, 76% 94%, 55% 73%, 43% 100%, 35% 73%, 9% 89%, 21% 62%, 0 54%, 23% 43%, 4% 20%, 32% 26%); color: #e51839; font-family: 'Bungee', Arial, sans-serif; font-size: clamp(.53rem, 1vw, .95rem); line-height: 1; transform: rotate(-11deg); }.counter-menu__footer { margin: 1.4rem 0 .15rem; color: #f7d73e; font-size: clamp(.62rem, 1vw, .9rem); font-weight: 900; letter-spacing: .13em; text-align: center; text-transform: uppercase; }
.counter-menu { color: #005d30; }.counter-menu__heading, .counter-menu__heading h2 { color: #a8d977; }.counter-menu__heading h2 { text-shadow: .18rem .2rem 0 #005d30; }.counter-menu__board { border-color: #005d30; }.menu-card { border-color: #005d30; background: #9ed276; }.menu-card h3, .menu-card p { color: #005d30; }.menu-card img { filter: drop-shadow(.35rem .45rem 0 rgba(0, 93, 48, .2)); }.menu-card__combo-product { position: relative; display: block; width: 100%; height: 100%; }.menu-card__combo-product img { position: absolute; width: 66%; height: 112%; bottom: -4%; left: -4%; }.menu-card__combo-product img + img { z-index: 3; width: 23%; height: 54%; right: 6%; bottom: 2%; left: auto; margin: 0; }.menu-card__combo-product img + img + img { z-index: 2; width: 66%; height: 148%; right: auto; bottom: -40%; left: 17%; margin: 0; filter: none; }
.menu-card__sauce { position: absolute; z-index: 4; width: 31% !important; height: 38% !important; margin: 0 !important; object-fit: contain; filter: none !important; }.menu-card__combo-product .menu-card__sauce { width: 17% !important; height: 22% !important; }.menu-card__combo-product .menu-card__sauce--andalus { bottom: 4%; left: 4%; }.menu-card__combo-product .menu-card__sauce--algerienne { right: auto; bottom: 5%; left: 19%; }.menu-card__combo-burger { position: absolute; z-index: 5; width: 45% !important; height: 60% !important; top: 0; right: 0 !important; bottom: auto; left: auto !important; margin: 0 !important; }.menu-card--chicken .menu-card__sauce--andalus { right: auto; bottom: 1%; left: 39%; }.menu-card--chicken .menu-card__sauce--algerienne { bottom: 0; left: 15%; }
.menu-card--chicken > img:not(.menu-card__sauce) { width: 116%; height: 98%; }
.menu-card--beef > img, .menu-card--tea > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.menu-card--tea > img { object-position: center; }
.menu-card--drink > img:not(.menu-card__burger) { position: relative; top: -8%; width: 122%; height: 108%; filter: none; }
.menu-card--refreshment > img { position: absolute; z-index: 3; width: 120%; height: 120%; right: auto; bottom: -5%; left: -20%; object-fit: contain; transform: none; transition: none; }
.menu-card--refreshment:hover > img { transform: none; }
.menu-card--drink .menu-card__burger { position: absolute; z-index: 3; width: 78%; height: 78%; right: auto; bottom: 8%; left: -4%; filter: drop-shadow(.2rem .3rem 0 rgba(0, 93, 48, .2)); pointer-events: none; }
.fries-carton { position: relative; display: grid; min-height: min(55vw, 48rem); place-items: center; overflow: hidden; padding: clamp(2rem, 5vw, 5rem); background: var(--bright-yellow); }.fries-carton > img:not(.fries-carton__pattern) { position: relative; z-index: 1; display: block; width: min(50vw, 42rem); max-height: 42rem; object-fit: contain; }.fries-carton__pattern { position: absolute; z-index: 0; width: min(42vw, 36rem); opacity: .3; }.fries-carton__pattern--left { left: -16%; top: -7%; transform: rotate(25deg); }.fries-carton__pattern--right { right: -16%; bottom: -7%; transform: rotate(205deg); }
.cup-scene { position: relative; min-height: 52rem; overflow: hidden; background: var(--green); }.cup-scene__copy { position: absolute; z-index: 2; top: 17%; left: clamp(1.5rem, 10vw, 10rem); width: min(32rem, 48vw); text-align: left; }.cup-scene__copy p, .applications__heading p, .statement__eyebrow { margin: 0 0 .8rem; color: #f5c100; font-size: .72rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }.cup-scene__copy p { letter-spacing: .18em; }.cup-scene h2, .statement h2, .applications h2 { margin: 0; font-size: clamp(3.4rem, 7vw, 7.8rem); letter-spacing: -.09em; line-height: .82; }.cup-scene h2 { font-family: 'Bungee', Arial, sans-serif; font-size: clamp(2.55rem, 4.75vw, 5.2rem); font-weight: 400; letter-spacing: .02em; line-height: 1; }.cup-scene__cup { position: absolute; right: 0; bottom: -12%; width: min(82vw, 78rem); animation: cup-float 5.5s ease-in-out infinite; transform-origin: 50% 65%; }
.statement { position: relative; min-height: 55rem; overflow: hidden; padding: clamp(4rem, 10vw, 10rem); background: var(--bright-yellow); }.statement__text { max-width: 29rem; margin-top: 2rem; font-size: clamp(1rem, 1.45vw, 1.35rem); font-weight: bold; line-height: 1.45; }.statement h2 { position: relative; z-index: 1; max-width: 52rem; }.statement h2 em { color: var(--red); font-style: normal; }.statement__burger { position: absolute; right: -8%; bottom: -10%; width: min(63vw, 61rem); filter: drop-shadow(-1rem 1.4rem 0 rgba(134, 79, 0, .18)); animation: burger-spin 14s linear infinite; }
.applications { padding: clamp(4rem, 9vw, 8rem) clamp(1.1rem, 6vw, 6rem); background: var(--yellow); }.applications__heading { display: flex; align-items: end; justify-content: space-between; gap: 2rem; max-width: 82rem; margin: 0 auto 3rem; }.applications__heading h2 { max-width: 34rem; }.applications__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(.8rem, 2.3vw, 2.25rem); max-width: 85rem; margin: auto; }.application { display: grid; min-height: 25rem; place-items: center; overflow: hidden; background: var(--green); }.application:nth-child(2), .application:nth-child(3) { background: #d09200; }.application img { display: block; width: 118%; height: 118%; object-fit: contain; transition: transform .65s cubic-bezier(.2,.7,.2,1); }.application:hover img { transform: scale(1.06) rotate(2deg); }.application--delivery img { width: 100%; height: 100%; }.application--bag img { width: 105%; height: 105%; }.application--pattern { background: var(--red); }.application--pattern img { width: 145%; height: 145%; object-fit: cover; opacity: .9; }
.motion-strip { overflow: hidden; padding: 1.2rem 0; background: var(--red); color: var(--yellow); white-space: nowrap; }.motion-strip__track { display: inline-flex; gap: 2.6rem; align-items: center; min-width: max-content; font-size: clamp(1.4rem, 3.2vw, 3.7rem); font-weight: 900; letter-spacing: -.06em; animation: marquee 18s linear infinite; }.motion-strip span::after { padding-left: 2.6rem; color: var(--green); content: '✦'; }
.case-footer { display: flex; min-height: 23rem; align-items: center; justify-content: center; flex-direction: column; gap: 2rem; padding: 3rem; background: var(--green); text-align: center; }.case-footer img { width: min(18rem, 55vw); filter: brightness(0) saturate(100%) invert(73%) sepia(98%) saturate(673%) hue-rotate(2deg) brightness(101%) contrast(103%); }.case-footer a { border-bottom: 2px solid currentColor; color: var(--bright-yellow); font-size: clamp(1rem, 2vw, 1.45rem); font-weight: bold; text-decoration: none; }.case-footer a:hover { color: var(--red); }
@keyframes cup-float { 0%, 100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-1.6rem) rotate(3deg); } } @keyframes burger-spin { to { transform: rotate(360deg); } } @keyframes pattern-drift { to { translate: 2rem -1rem; rotate: 5deg; } } @keyframes marquee { to { transform: translateX(-50%); } } @keyframes arabic-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } @keyframes hero-pattern-flow { from { transform: translate3d(-2%, -1%, 0) scale(1.04); } to { transform: translate3d(4%, 3%, 0) scale(1.12); } }
@media (max-width: 700px) { .hero { height: 100svh; min-height: 34rem; }.hero__photo { object-position: center; }.hero__logo { top: 28%; width: 90vw; }.hero__scroll { right: 1rem; bottom: 1.2rem; }.real-food { height: 40rem; padding-block: 1rem; }.real-food__arabic-track { height: 3.5rem; gap: 4rem; animation-duration: 12s; }.real-food__arabic-track img { width: 52vw; }.real-food__wraps { width: 105vw; }.paper-feature { height: 24rem; padding: 0; }.paper-feature__image { width: auto; height: 112%; max-width: none; }.cup-scene { min-height: 48rem; }.cup-scene__copy { top: 10%; left: 1.4rem; width: calc(100% - 2.8rem); }.cup-scene h2 { font-size: clamp(3.3rem, 14vw, 5rem); }.cup-scene__cup { right: auto; bottom: -7%; left: -34%; width: 138vw; animation: none; }.statement { min-height: 44rem; padding: 4rem 1.4rem; }.statement h2 { font-size: clamp(3.2rem, 13vw, 5rem); }.statement__burger { right: -27%; bottom: -3%; width: 105vw; }.applications__heading { display: block; }.applications__grid { grid-template-columns: 1fr; }.application { min-height: 21rem; } }
@media (prefers-reduced-motion: reduce) { .cascroty-page *, .cascroty-page *::before, .cascroty-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; } }
@media (max-width: 700px) { .real-food__burger { right: auto; bottom: 22%; left: 40%; width: 42vw; } }
@media (max-width: 700px) { .paper-feature { height: 27rem; }.paper-feature__image { height: 88%; transform: none; }.concept-copy { min-height: 38rem; padding: 4rem 1.5rem; }.concept-copy p { font-size: .88rem; letter-spacing: .075em; line-height: 1.5; }.menu-feature { min-height: 35rem; padding: 2rem 1rem; }.menu-feature img { width: 118vw; max-height: none; }.counter-menu { padding: .75rem .55rem 1rem; }.counter-menu__topline { gap: .55rem; padding: .2rem .2rem .8rem; font-size: .46rem; letter-spacing: .06em; }.counter-menu__topline span:nth-child(2) { display: none; }.counter-menu__heading { grid-template-columns: 1fr auto; margin-bottom: .8rem; }.counter-menu__heading p { grid-column: 1 / -1; margin-bottom: .5rem; text-align: center; }.counter-menu__heading h2 { justify-self: start; font-size: clamp(1.9rem, 10vw, 3rem); text-align: left; }.counter-menu__tag { padding: .3rem .48rem; font-size: .47rem; }.counter-menu__board { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .45rem; padding: .45rem; border-width: .38rem; border-radius: .8rem; }.menu-card { min-height: 10.5rem; border-width: .18rem; border-radius: .8rem; padding-top: 2.25rem; }.menu-card--wide { grid-column: span 2; min-height: 13rem; }.menu-card h3 { font-size: .9rem; }.menu-card p { font-size: .43rem; }.menu-price { width: 3.5rem; font-size: .59rem; }.counter-menu__footer { margin-top: .9rem; font-size: .5rem; letter-spacing: .07em; }.fries-carton { min-height: 32rem; padding: 2rem 1.2rem; }.fries-carton > img:not(.fries-carton__pattern) { width: min(92vw, 28rem); max-height: 28rem; }.fries-carton__pattern { width: 72vw; opacity: .24; }.fries-carton__pattern--left { left: -34%; }.fries-carton__pattern--right { right: -34%; } }
@media (max-width: 700px) { .real-food__wraps { bottom: 14%; left: 2%; width: 72vw; transform: none; }.real-food__beef { z-index: 5; bottom: 31%; left: 43%; width: 51vw; }.real-food__cheeseburger { z-index: 6; bottom: 14%; left: 30%; width: 44vw; } }
.real-food__arabic-marquee--bottom { top: auto; bottom: 0; }
.paper-feature { padding: 0; }.paper-feature__carousel { position: relative; z-index: 1; width: 100%; overflow: hidden; }.paper-feature__track { display: flex; width: 100%; align-items: center; justify-content: center; gap: clamp(1rem, 4vw, 4rem); }.paper-feature__image { width: min(27vw, 24rem); height: min(42vw, 34rem); flex: none; object-fit: contain; filter: drop-shadow(1rem 1.2rem .7rem rgba(112, 70, 0, .22)); animation: packaging-appear .8s cubic-bezier(.2,.7,.2,1) both; }.paper-feature__image:nth-child(2) { animation-delay: .18s; }.paper-feature__image:nth-child(3) { animation-delay: .36s; }.paper-feature__image--paper { width: min(32vw, 28rem); }.paper-feature__image--delivery { width: min(29vw, 25rem); } @keyframes packaging-appear { from { opacity: 0; transform: translateY(2.5rem) scale(.92); } to { opacity: 1; transform: translateY(0) scale(1); } }
@media (max-width: 700px) { .paper-feature { height: 27rem; }.paper-feature__track { gap: .35rem; justify-content: flex-start; padding-left: .5rem; }.paper-feature__image, .paper-feature__image--paper, .paper-feature__image--delivery { width: 44vw; height: 24rem; } }
.paper-feature__carousel { height: 100%; }.paper-feature__track { position: relative; display: block; height: 100%; }.paper-feature__image, .paper-feature__image--paper, .paper-feature__image--delivery { position: absolute; top: 50%; left: 50%; width: min(34vw, 29rem); height: min(43vw, 35rem); animation: packaging-cycle 7.2s ease-in-out infinite; }.paper-feature__image:nth-child(1) { animation-delay: 0s; }.paper-feature__image:nth-child(2) { animation-delay: 2.4s; }.paper-feature__image:nth-child(3) { animation-delay: 4.8s; } @keyframes packaging-cycle { 0%, 100% { opacity: 0; transform: translate(-50%, -40%) scale(.86); } 14%, 29% { opacity: 1; transform: translate(-50%, -50%) scale(1); } 43% { opacity: 0; transform: translate(-50%, -60%) scale(.94); } }
@media (max-width: 700px) { .paper-feature__image, .paper-feature__image--paper, .paper-feature__image--delivery { width: 76vw; height: 24rem; } }
.paper-feature__image--paper { width: min(50vw, 41rem); height: min(54vw, 43rem); }.paper-feature__image--delivery { width: min(43vw, 35rem); height: min(50vw, 40rem); }
@media (max-width: 700px) { .paper-feature__image--paper { width: 98vw; height: 28rem; }.paper-feature__image--delivery { width: 90vw; height: 27rem; } }
.concept-copy { display: block; min-height: 0; margin: 0; padding: 0; border: 0; font-size: 0; line-height: 0; }.concept-copy > img { display: block; width: 100%; height: 100%; margin: 0; border: 0; object-fit: cover; }
.menu-card__combo-product .menu-card__combo-chicken { z-index: 2; bottom: 14%; left: -4%; width: 45% !important; height: 74% !important; }.menu-card__combo-product .menu-card__combo-beef { z-index: 3; right: auto; bottom: 33%; left: 19%; width: 34% !important; height: 56% !important; }.menu-card__combo-product .menu-card__combo-chees { z-index: 4; right: auto; bottom: -2%; left: 16%; width: 33% !important; height: 56% !important; }.menu-card__combo-product .menu-card__combo-fries { z-index: 3; right: 4%; bottom: 2%; left: auto; width: 24% !important; height: 54% !important; }.menu-card__combo-product .menu-card__combo-cup { z-index: 2; right: auto; bottom: -58%; left: 25%; width: 66% !important; height: 195% !important; filter: none !important; }.menu-card__combo-product .menu-card__sauce { width: 14% !important; height: 19% !important; }.menu-card__combo-product .menu-card__sauce--andalus { z-index: 5; bottom: 4%; left: 40%; }.menu-card__combo-product .menu-card__sauce--algerienne { z-index: 5; bottom: 4%; left: 51%; }
.menu-card__combo-product .menu-card__combo-chicken { z-index: 7; }.menu-card__combo-product .menu-card__combo-beef { z-index: 3; bottom: 33%; left: 26%; width: 29% !important; height: 48% !important; }.menu-card__combo-product .menu-card__combo-chees { z-index: 8; }.menu-card__combo-product .menu-card__sauce--andalus { left: 50%; }.menu-card__combo-product .menu-card__sauce--algerienne { left: 61%; }
.cup-scene__text { max-width: 28rem; margin-top: 1.4rem !important; color: #f5c100; font-size: clamp(.78rem, 1.15vw, 1rem) !important; font-weight: 700 !important; letter-spacing: .04em !important; line-height: 1.45; text-transform: none !important; }.cup-scene__burger { position: absolute; z-index: 3; top: 46%; left: clamp(1.5rem, 10vw, 10rem); width: min(38vw, 32rem); filter: drop-shadow(-.6rem .8rem 0 rgba(0, 44, 18, .2)); animation: burger-spin 14s linear infinite; }
@media (max-width: 700px) { .cup-scene__burger { top: 47%; left: 1.4rem; width: 75vw; }.cup-scene__text { max-width: 20rem; font-size: .72rem !important; } }
.menu-feature { position: relative; min-height: min(58vw, 52rem); overflow: hidden; padding: 0; background: var(--bright-yellow); }.menu-feature img { position: absolute; display: block; max-height: none; object-fit: contain; filter: drop-shadow(.6rem .8rem .55rem rgba(61, 37, 0, .3)); }.menu-feature__bag { z-index: 2; bottom: 5%; left: 7%; width: min(28vw, 25rem) !important; }.menu-feature__menu { z-index: 3; top: 16%; left: 39%; width: min(31vw, 29rem) !important; transform: rotate(-7deg); }.menu-feature__box { z-index: 4; right: 7%; bottom: 6%; width: min(23vw, 21rem) !important; }.menu-feature__burger { z-index: 5; top: 7%; left: 42%; width: min(19vw, 17rem) !important; animation: burger-spin 14s linear infinite; }
@media (max-width: 700px) { .menu-feature { min-height: 42rem; }.menu-feature__bag { bottom: 3%; left: 50%; width: 84vw !important; transform: translateX(-50%); }.menu-feature__menu { display: block; width: 34vw !important; }.menu-feature__menu--one { top: 11%; left: 17%; transform: rotate(-14deg); }.menu-feature__menu--two { top: 8%; left: 33%; transform: rotate(0); }.menu-feature__menu--three { top: 11%; left: 49%; transform: rotate(14deg); }.menu-feature__box { display: block; right: -2%; bottom: 2%; width: 55vw !important; }.menu-feature__burger { display: none; } }
.menu-feature__bag { width: min(40vw, 35rem) !important; }.menu-feature__menu { width: min(20vw, 18rem) !important; transform-origin: 16% 92%; }.menu-feature__menu--one { z-index: 3; top: 27%; left: 48%; transform: rotate(-13deg); }.menu-feature__menu--two { z-index: 4; top: 24%; left: 53%; transform: rotate(0deg); }.menu-feature__menu--three { z-index: 5; top: 27%; left: 58%; transform: rotate(13deg); }
@media (max-width: 700px) { .menu-feature__bag { width: 76vw !important; }.menu-feature__menu { width: 43vw !important; }.menu-feature__menu--one { top: 29%; left: 36%; }.menu-feature__menu--two { top: 26%; left: 42%; }.menu-feature__menu--three { top: 29%; left: 48%; } }
.cup-scene__copy { z-index: 10; }
@media (hover: hover) and (pointer: fine) { .real-food__wraps, .real-food__beef, .real-food__cheeseburger { transition: transform .48s cubic-bezier(.2,.7,.2,1), filter .48s ease; }.real-food:hover .real-food__wraps { transform: translate(-1rem, -1.2rem) rotate(-4deg) scale(1.05); }.real-food:hover .real-food__beef { transform: translate(.8rem, -1.6rem) rotate(4deg) scale(1.06); }.real-food:hover .real-food__cheeseburger { transform: translate(0, -.8rem) rotate(13deg) scale(1.1); } }
.menu-feature img { filter: none; }
.menu-feature__bag { width: min(46vw, 40rem) !important; }.menu-feature__burger { top: auto; bottom: -3%; left: 37%; width: min(35vw, 31rem) !important; }.menu-feature__box { right: 11%; }
@media (max-width: 700px) { .menu-feature__bag { width: 85vw !important; }.menu-feature__burger { top: auto; bottom: -4%; left: 28%; width: 76vw !important; }.menu-feature__box { right: 6%; } }
.menu-feature__bag, .menu-feature__menu, .menu-feature__box { filter: drop-shadow(0 .5rem .24rem rgba(0, 48, 21, .5)) !important; }
.paper-feature { display: grid; grid-template-columns: minmax(0, 1fr); place-items: center; padding: clamp(.7rem, 1.8vw, 1.5rem); }.paper-feature__carousel { width: 100%; min-width: 0; height: 100%; min-height: 0; }
@media (max-width: 700px) { .paper-feature { height: 27rem; min-height: 0; padding: .7rem; } }
@media (max-width: 700px) { .menu-feature { min-height: 42rem; }.menu-feature__bag { bottom: 4%; left: 50%; width: 70vw !important; transform: translateX(-50%); }.menu-feature__menu { width: 76vw !important; }.menu-feature__menu--one { top: 7%; left: 12%; transform: rotate(-4deg); }.menu-feature__menu--two, .menu-feature__menu--three, .menu-feature__box, .menu-feature__burger { display: none; } }
</style>
