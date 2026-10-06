<template>
  <div class="layout" :class="{ 'layout--full-bleed': fullBleed }">
    <main>
      <slot></slot>
    </main>
    
  </div>
</template>

<script>
export default {
  name: 'LayoutBase',
  props: {
    fullBleed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.layout main {
  padding: 2rem;
  min-height: calc(100vh - 160px); /* Ajusta altura según footer */
}

.layout--full-bleed,
.layout--full-bleed main {
  width: 100% !important;
  max-width: none !important;
  min-height: 100svh;
  margin: 0 !important;
  padding: 0 !important;
}
</style>

