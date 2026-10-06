<template>
  <span class="ambient-blob" :style="blobStyle" aria-hidden="true"></span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: 'rgba(248, 55, 170, .34)' },
  size: { type: String, default: '22rem' },
  blur: { type: String, default: '3rem' }
})

const blobStyle = computed(() => ({
  '--blob-color': props.color,
  '--blob-size': props.size,
  '--blob-blur': props.blur
}))
</script>

<style scoped>
.ambient-blob { position: absolute; width: var(--blob-size); aspect-ratio: 1; border-radius: 48% 52% 56% 44% / 42% 46% 54% 58%; background: var(--blob-color); filter: blur(var(--blob-blur)); opacity: .8; pointer-events: none; }
@media (prefers-reduced-motion: reduce) { .ambient-blob { filter: blur(calc(var(--blob-blur) * .8)); } }
</style>
