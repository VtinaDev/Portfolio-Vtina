<template>
  <div class="project-card">
    <img :src="image" :alt="title" class="project-image" />
    <h3 class="project-title">{{ title }}</h3>
    <p class="project-description">{{ description }}</p>
    <Button :text="buttonText" :link="link" />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'ProjectCard',
  components: { Button },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    buttonText: { type: String, default: 'Ver Proyecto' }
  }
}
</script>

<style scoped>
.project-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.2s ease;
}
.project-card:hover {
  transform: translateY(-5px);
}
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.project-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.project-description {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1rem;
}
</style>
