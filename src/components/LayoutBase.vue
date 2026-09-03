<template>
  <div class="layout">
    <main>
      <slot></slot>
    </main>
    
  </div>
</template>

<script>
export default {
  name: 'LayoutBase',
}
</script>

<style scoped>
.layout main {
  padding: 2rem;
  min-height: calc(100vh - 160px); /* Ajusta altura según footer */
}
</style>


