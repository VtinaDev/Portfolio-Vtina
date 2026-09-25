<template>
  <LayoutBase class="home-layout">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="home-hero__grid" aria-hidden="true"></div>
      <section class="glass-panel" aria-label="Presentación de Vtina Dev">
        <div class="glass-panel__edge" aria-hidden="true"></div>
        <div class="home-hero__main">
          <h1 id="home-title" class="fade-in delay-1">Hola, <em>Soy </em><strong class="home-hero__brand">Vtina&nbsp;Dev.</strong><br><span class="home-hero__role">Creative Frontend Developer.</span></h1>
          <p class="home-hero__intro fade-in delay-2">Uno comunicación visual, UX/UI y Desarrollo Frontend para crear experiencias con propósito.</p>
          <div class="home-hero__actions fade-in delay-3">
            <router-link to="/portfolio" class="button button--primary">Explorar proyectos</router-link>
            <router-link to="/contact" class="button button--secondary">Hablemos</router-link>
          </div>
        </div>
      </section>
    </section>
  </LayoutBase>
</template>

<script>
import LayoutBase from '../components/LayoutBase.vue'

export default {
  name: 'Home',
  components: { LayoutBase }
}
</script>

<style scoped>
:deep(.home-layout) { background: #fff; }
:deep(.home-layout main) { min-height: 0; padding: 0; background: inherit; }
:global(body:has(.home-layout)), :global(#app:has(.home-layout)) { background: #fff; }
:global(#app:has(.home-layout)) { max-width: none; min-height: 100svh; padding: 0; }
:global(#app:has(.home-layout) .footer) { margin: 0; background: #fff; }
.home-hero { position: relative; display: grid; min-height: calc(100svh - 4.5rem); grid-template-columns: minmax(0, 1fr); overflow: hidden; padding: 0; background: #fff; color: var(--brand-ink); isolation: isolate; }
.glass-panel { position: relative; z-index: 1; display: grid; width: min(calc(100% - clamp(3rem, 10vw, 10rem)), 34rem); min-height: min(23rem, calc(100svh - 17rem)); align-self: center; justify-self: center; overflow: hidden; border: 1.5px solid rgba(255, 255, 255, .86); border-radius: 1.75rem; outline: 1px solid rgba(201, 120, 76, .32); outline-offset: .22rem; background: linear-gradient(145deg, rgba(227, 221, 219, .76), rgba(208, 196, 193, .56) 54%, rgba(236, 223, 215, .67)); box-shadow: 0 1.25rem 2.6rem rgba(84, 46, 52, .2), 0 .42rem .62rem rgba(145, 77, 44, .2), inset 0 1px 2px rgba(255, 255, 255, .96), inset 0 -3px 7px rgba(105, 53, 27, .16), inset 1.1rem 1.1rem 2.2rem rgba(255, 255, 255, .42); backdrop-filter: blur(25px) saturate(180%); -webkit-backdrop-filter: blur(25px) saturate(180%); }.glass-panel::before { position: absolute; z-index: 0; inset: 0; border-radius: inherit; background: linear-gradient(112deg, rgba(255, 255, 255, .9) 0 5%, rgba(255, 255, 255, .17) 17%, transparent 31% 68%, rgba(255, 190, 143, .21) 84%, rgba(255, 255, 255, .68) 100%), radial-gradient(ellipse at 10% 0%, rgba(255, 255, 255, .9), transparent 37%), radial-gradient(ellipse at 100% 100%, rgba(239, 112, 47, .23), transparent 38%); content: ''; pointer-events: none; }.glass-panel::after { position: absolute; z-index: 0; right: 9%; bottom: -34%; left: 9%; height: 46%; border: 1px solid rgba(255, 255, 255, .65); border-radius: 50%; background: linear-gradient(90deg, rgba(255, 184, 91, .31), rgba(255, 255, 255, .7), rgba(220, 63, 105, .22)); box-shadow: 0 -1rem 1.7rem rgba(255, 255, 255, .5); content: ''; filter: blur(1rem); pointer-events: none; }.glass-panel__edge { position: absolute; z-index: 1; inset: 6px; border: 1px solid rgba(255, 255, 255, .58); border-radius: calc(1.75rem - 6px); box-shadow: inset 0 1px 1px rgba(255, 255, 255, .72), inset 0 -1px 2px rgba(127, 59, 30, .16); pointer-events: none; }
.home-hero__grid { display: none; }
.code-floats { position: absolute; inset: 0; z-index: -1; pointer-events: none; }
.code-float { --rain-x: 1rem; --rain-y: 22rem; position: absolute; background: linear-gradient(145deg, #fff8fc 0%, #f9a4cd 35%, #c20b5a 68%, #fff 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: var(--brand-magenta); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: clamp(1.8rem, 3.5vw, 4rem); font-weight: 400; letter-spacing: -.12em; line-height: 1; opacity: .16; text-shadow: 0 .08em .16em rgba(122, 11, 60, .32), 0 -.035em .06em rgba(255, 255, 255, .9); filter: drop-shadow(0 .16em .2em rgba(122, 11, 60, .2)); animation: code-rain 8s linear infinite; }
.code-float--one { --rain-x: 1.5rem; --rain-y: 26rem; top: 8%; left: 8%; font-size: clamp(2rem, 4.2vw, 4.8rem); animation-delay: -5s; animation-duration: 8s; }.code-float--two { --rain-x: -1rem; --rain-y: 19rem; top: 4%; right: 11%; font-size: clamp(1.25rem, 2.3vw, 2.5rem); animation-delay: -1s; animation-duration: 6.5s; }.code-float--three { --rain-x: .8rem; --rain-y: 28rem; top: 38%; left: 4%; font-size: clamp(2.4rem, 5vw, 5.7rem); animation-delay: -6s; animation-duration: 9s; }.code-float--four { --rain-x: -1.4rem; --rain-y: 24rem; top: 30%; right: 6%; font-size: clamp(1.1rem, 2vw, 2.2rem); animation-delay: -3s; animation-duration: 7s; }.code-float--five { --rain-x: 1rem; --rain-y: 17rem; bottom: 28%; left: 14%; font-size: clamp(1.7rem, 3.2vw, 3.6rem); animation-delay: -2s; animation-duration: 6s; }.code-float--six { --rain-x: -1.2rem; --rain-y: 21rem; right: 16%; bottom: 25%; font-size: clamp(1.35rem, 2.6vw, 3rem); animation-delay: -7s; animation-duration: 8.5s; }
.home-hero__eyebrow { margin: 1.4rem 0 0; color: var(--brand-amber); font-size: .72rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
.home-hero__main { position: relative; z-index: 1; align-self: center; padding: clamp(1.25rem, 2.5vw, 2.4rem) clamp(.9rem, 2.5vw, 2.4rem); text-align: left; }
.home-hero h1 { max-width: 11ch; margin: 0; background: linear-gradient(105deg, #8b270e 0%, #e76f22 28%, #931b3d 52%, #f72585 72%, #79044d 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; font-family: Arial, sans-serif; font-size: clamp(2.1rem, 3.35vw, 3.6rem); font-weight: 400; letter-spacing: -.085em; line-height: .9; }.home-hero h1 em { color: inherit; font-family: Georgia, serif; font-weight: 400; letter-spacing: -.1em; }
.home-hero__brand { font-weight: 800; white-space: nowrap; }
.home-hero__role { white-space: nowrap; }
.home-hero__intro { max-width: 31rem; margin: clamp(1.8rem, 3vw, 2.8rem) 0 0; color: var(--brand-wine); font-size: clamp(1.05rem, 1.8vw, 1.3rem); line-height: 1.55; }
.home-hero h1 em { font-family: inherit; font-size: inherit; font-style: normal; font-weight: inherit; letter-spacing: inherit; }
.home-hero__actions { display: flex; flex-wrap: wrap; gap: .8rem; margin-top: 2rem; }.button { display: inline-flex; align-items: center; gap: .8rem; border: 1px solid rgba(255, 255, 255, .62); border-radius: 999px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .58), 0 .55rem 1.3rem rgba(122, 11, 60, .14); padding: .85rem 1.25rem; font-weight: 800; text-decoration: none; backdrop-filter: blur(.7rem); -webkit-backdrop-filter: blur(.7rem); transition: transform .25s ease, background .25s ease, color .25s ease, box-shadow .25s ease; }.button:hover { box-shadow: inset 0 1px 0 rgba(255, 255, 255, .82), 0 .8rem 1.5rem rgba(122, 11, 60, .22); text-decoration: none; transform: translateY(-.2rem); }.button--primary { background: linear-gradient(105deg, rgba(147, 27, 61, .9), rgba(194, 11, 90, .86) 52%, rgba(247, 37, 133, .84)); color: #fff; }.button--secondary { border-color: rgba(194, 11, 90, .25); background: linear-gradient(145deg, rgba(255, 255, 255, .62), rgba(255, 255, 255, .18)); color: var(--brand-magenta); }.button--secondary:hover { border-color: rgba(237, 22, 114, .4); background: linear-gradient(145deg, rgba(255, 255, 255, .74), rgba(237, 22, 114, .12)); color: var(--brand-magenta); }
.home-hero__side { align-self: center; justify-self: end; width: min(100%, 15rem); border-top: 1px solid #12070e3d; padding-top: 1rem; }.home-hero__side p { margin: 0 0 1.4rem; color: #c04d16; font-size: .72rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }.home-hero__side ul { margin: 0; padding: 0; list-style: none; }.home-hero__side li { border-bottom: 1px solid #12070e24; padding: .75rem 0; font-size: .95rem; }
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
.home-hero__actions .button, .home-hero__actions .button--primary, .home-hero__actions .button--secondary { border: 1px solid rgba(255, 255, 255, .62); background: linear-gradient(105deg, rgba(217, 74, 18, .88), rgba(194, 11, 90, .84), rgba(237, 22, 114, .8)); color: #fff; padding: .85rem 1.35rem; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .58), 0 .6rem 1.3rem rgba(122, 11, 60, .2); }
.home-hero__actions .button:hover, .home-hero__actions .button--primary:hover, .home-hero__actions .button--secondary:hover { background: linear-gradient(105deg, rgba(217, 74, 18, .96), rgba(194, 11, 90, .92), rgba(237, 22, 114, .88)); color: #fff; box-shadow: inset 0 1px 0 rgba(255, 255, 255, .78), 0 .8rem 1.5rem rgba(122, 11, 60, .26); }
.home-hero__actions .button--primary, .home-hero__actions .button--secondary { position: relative; isolation: isolate; overflow: hidden; border: 2px solid rgba(255, 255, 255, .94); color: #fff; text-shadow: 0 1px 1px rgba(45, 21, 40, .35); box-shadow: inset 0 2px 1px rgba(255, 255, 255, .94), inset 0 -3px 2px rgba(62, 25, 52, .34), 0 .22rem .2rem rgba(255, 255, 255, .98), 0 .5rem .65rem rgba(89, 65, 116, .25), 0 1rem 1.5rem rgba(68, 36, 79, .18); }
.home-hero__actions .button--primary::before, .home-hero__actions .button--secondary::before { position: absolute; z-index: -1; inset: 3px; border-radius: inherit; background: linear-gradient(180deg, rgba(255, 255, 255, .55), transparent 30%); box-shadow: inset 0 1px 1px rgba(255, 255, 255, .8), inset 0 -2px 3px rgba(54, 35, 68, .2); content: ''; }
.home-hero__actions .button--primary::after, .home-hero__actions .button--secondary::after { position: absolute; z-index: -1; top: -55%; right: 18%; width: 48%; height: 90%; border-radius: 50%; background: rgba(255, 255, 255, .5); content: ''; filter: blur(.6rem); transform: rotate(28deg); }
.home-hero__actions .button--primary { background: radial-gradient(ellipse at 50% 120%, rgba(255, 240, 128, .88), transparent 37%), linear-gradient(145deg, #ffac70 0%, #ef5e2b 48%, #a93c20 100%); }
.home-hero__actions .button--secondary { background: radial-gradient(ellipse at 50% 120%, rgba(255, 151, 218, .7), transparent 38%), linear-gradient(145deg, #ef5b9c 0%, #bb125f 49%, #650942 100%); }
.home-hero__actions .button--primary:hover { background: radial-gradient(ellipse at 50% 120%, rgba(255, 243, 150, .95), transparent 39%), linear-gradient(145deg, #ffbc81 0%, #f36c32 48%, #bd4926 100%); }
.home-hero__actions .button--secondary:hover { background: radial-gradient(ellipse at 50% 120%, rgba(255, 178, 227, .86), transparent 39%), linear-gradient(145deg, #ff6aa9 0%, #d1186b 49%, #790a4e 100%); }
@keyframes code-rain { 0% { opacity: .12; transform: translate3d(0, -1.5rem, 0) scale(.86) rotate(-8deg); } 16% { opacity: .78; } 82% { opacity: .7; } 100% { opacity: .08; transform: translate3d(var(--rain-x), var(--rain-y), 0) scale(1.08) rotate(8deg); } }
@media (max-width: 720px) { .home-hero { min-height: calc(100svh - 7rem); grid-template-columns: 1fr; padding: 0; }.glass-panel { width: calc(100% - 2.75rem); min-height: min(31rem, calc(100svh - 11rem)); border-radius: 1.5rem; transform: none; }.home-hero__main { align-self: start; padding: 4.25rem .9rem 1.25rem; text-align: center; }.home-hero h1, .home-hero__intro { margin-left: auto; margin-right: auto; }.home-hero h1 { max-width: 100%; text-align: center; font-size: clamp(2.3rem, 12vw, 3.8rem); }.home-hero__role { white-space: normal; }.home-hero__actions { justify-content: center; } }
@media (max-width: 480px) { .home-hero { padding: 0; }.home-hero__main { padding-top: 5rem; }.home-hero h1 { font-size: clamp(2.15rem, 11.5vw, 3.2rem); line-height: 1.04; }.home-hero__intro { font-size: 1rem; }.home-hero__actions { display: grid; grid-template-columns: 1fr; width: min(100%, 18rem); margin-left: auto; margin-right: auto; }.home-hero__actions .button { justify-content: center; width: 100%; }.code-float--three, .code-float--six { display: none; } }
@media (prefers-reduced-motion: reduce) { .fade-in { opacity: 1; transform: none; animation: none; }.code-float { animation: none; }.button { transition: none; } }
</style>
