<template>
  <component :is="tag" class="glass-card" :class="{ 'glass-card--featured': featured }"><slot /></component>
</template>

<script setup>
defineProps({
  tag: { type: String, default: 'section' },
  featured: { type: Boolean, default: false }
})
</script>
