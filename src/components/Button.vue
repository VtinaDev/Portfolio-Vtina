<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="btn">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: { type: String, required: true },
    link: { type: String, required: true }
  }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #1f2937; /* gris oscuro / tecnológico */
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.btn:hover {
  background-color: #111827;
  transform: translateY(-2px);
}
</style>
