<template>
  <component :is="componentType" :to="to || undefined" :href="href || undefined" class="glass-button" :class="`glass-button--${variant}`" :type="type" @click="$emit('click', $event)">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: { type: [String, Object], default: '' },
  href: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' }
})

defineEmits(['click'])

const componentType = computed(() => {
  if (props.to) return 'RouterLink'
  if (props.href) return 'a'
  return 'button'
})
</script>
