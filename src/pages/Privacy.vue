<template>
  <LayoutBase class="privacy-layout">
    <article class="privacy-page" aria-labelledby="privacy-title">
      <header class="privacy-hero">
        <p class="eyebrow">Privacidad</p>
        <h1 id="privacy-title">Política de privacidad</h1>
        <p>Esta página explica cómo se tratan los datos enviados desde este portfolio.</p>
      </header>

      <div class="privacy-content">
        <section aria-labelledby="controller-title">
          <h2 id="controller-title">Responsable del tratamiento</h2>
          <p>Valentina Angulo es la responsable del tratamiento de los datos personales recogidos mediante este portfolio.</p>
          <p>Para cualquier cuestión sobre privacidad puedes escribir a <a href="mailto:valentina3691@hotmail.com">valentina3691@hotmail.com</a>.</p>
        </section>

        <section aria-labelledby="data-title">
          <h2 id="data-title">Datos tratados</h2>
          <p>Al utilizar el formulario de contacto se tratan el nombre, la dirección de correo electrónico y el mensaje que la persona usuaria decida enviar.</p>
        </section>

        <section aria-labelledby="purpose-title">
          <h2 id="purpose-title">Finalidad</h2>
          <p>Los datos se utilizan únicamente para atender y responder a la consulta o mensaje recibido.</p>
        </section>

        <section aria-labelledby="legal-title">
          <h2 id="legal-title">Base jurídica</h2>
          <p>La base jurídica es el interés legítimo de la responsable en atender las consultas enviadas voluntariamente a través del formulario. Cuando la consulta solicite una posible colaboración o contratación, el tratamiento también podrá ser necesario para aplicar medidas precontractuales a petición de la persona usuaria.</p>
          <p>La persona usuaria puede oponerse al tratamiento basado en el interés legítimo en cualquier momento, conforme a la normativa aplicable.</p>
        </section>

        <section aria-labelledby="recipients-title">
          <h2 id="recipients-title">Destinatarios y encargados</h2>
          <p>Los datos se remiten al correo electrónico de la responsable mediante EmailJS, que actúa como proveedor técnico para tramitar el envío. No se utilizan Supabase ni otra base de datos para almacenar los mensajes enviados desde este portfolio.</p>
        </section>

        <section aria-labelledby="emailjs-title">
          <h2 id="emailjs-title">EmailJS</h2>
          <p>EmailJS procesa los datos introducidos en el formulario para gestionar el envío del mensaje, siguiendo las instrucciones de la responsable. Puedes consultar su <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">política de privacidad</a> y su <a href="https://www.emailjs.com/legal/data-protection-agreement/" target="_blank" rel="noopener noreferrer">acuerdo de tratamiento de datos</a>.</p>
        </section>

        <section aria-labelledby="transfer-title">
          <h2 id="transfer-title">Transferencias internacionales</h2>
          <p>El uso de EmailJS puede implicar transferencias internacionales de datos a Estados Unidos, donde informa que se ubican sus instalaciones principales de tratamiento. Según su documentación vigente, para usuarios de Europa utiliza garantías como las cláusulas contractuales tipo aprobadas por la Unión Europea. Consulta la documentación de EmailJS para conocer sus condiciones actualizadas.</p>
        </section>

        <section aria-labelledby="retention-title">
          <h2 id="retention-title">Conservación</h2>
          <p>Los datos se conservarán durante el tiempo necesario para responder y gestionar la consulta, salvo que sea necesario mantenerlos durante más tiempo para atender responsabilidades legales aplicables.</p>
        </section>

        <section aria-labelledby="rights-title">
          <h2 id="rights-title">Derechos de protección de datos</h2>
          <p>La normativa aplicable puede reconocer derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, además de otros que correspondan.</p>
        </section>

        <section aria-labelledby="exercise-title">
          <h2 id="exercise-title">Cómo ejercer los derechos</h2>
          <p>Para ejercer estos derechos, escribe a <a href="mailto:valentina3691@hotmail.com">valentina3691@hotmail.com</a>, indicando el derecho que deseas ejercer y la información necesaria para identificar tu solicitud.</p>
          <p>Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
        </section>

        <section aria-labelledby="external-title">
          <h2 id="external-title">Enlaces externos</h2>
          <p>Este portfolio incluye enlaces a servicios de terceros, como WhatsApp, LinkedIn, GitHub y Juego &amp; Leo. Al abrirlos, se aplicarán las políticas de privacidad de dichos servicios.</p>
        </section>
      </div>
    </article>
  </LayoutBase>
</template>

<script>
import LayoutBase from '../components/LayoutBase.vue'

export default { name: 'Privacy', components: { LayoutBase } }
</script>

<style scoped>
:global(body:has(.privacy-layout)) { background: var(--brand-cream); }
:global(#app:has(.privacy-layout)) { max-width: none; padding: 0; }
:deep(.privacy-layout main) { padding: 0; }
.privacy-page { max-width: 75rem; margin: 0 auto; padding: clamp(4rem, 9vw, 7rem) clamp(1.25rem, 5vw, 3rem) clamp(5rem, 10vw, 8rem); color: #2d1724; }
.privacy-hero { max-width: 48rem; padding-bottom: clamp(3rem, 7vw, 5rem); }
.eyebrow { margin: 0 0 .8rem; color: #d95a12; font-size: .73rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
h1, h2 { margin: 0; font-family: Arial, sans-serif; letter-spacing: -.05em; }
h1 { font-size: clamp(3rem, 7vw, 6rem); line-height: .95; }
.privacy-hero > p:last-child { margin: 1.4rem 0 0; color: #665660; font-size: 1.08rem; line-height: 1.65; }
.privacy-content { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; overflow: hidden; border: 1px solid #ded3d8; border-radius: 1.5rem; background: #ded3d8; }
.privacy-content section { min-height: 12rem; background: #fff; padding: clamp(1.5rem, 4vw, 2.6rem); }
.privacy-content h2 { font-size: clamp(1.35rem, 2.5vw, 2rem); line-height: 1; }
.privacy-content p { margin: 1rem 0 0; color: #665660; line-height: 1.65; }
.privacy-content p + p { margin-top: .7rem; }
.privacy-content a { color: #8c1748; font-weight: 700; }
@media (max-width: 720px) { .privacy-content { grid-template-columns: 1fr; border-radius: 1.15rem; } .privacy-content section { min-height: auto; } }
</style>
