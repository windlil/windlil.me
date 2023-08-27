<script setup lang="ts">
interface IProject {
  name: string
  link: string
  desc: string
  icon?: string
}

interface IProps {
  project: IProject
}

defineProps<IProps>()

</script>

<template>
  <a class="project flex" target="_blank" :href="project.link">
    <div class="icon text-35px mr-4" :class="project.icon"></div>
    <div class="project-content">
      <p class="text-slate-500">{{ project.name }}</p>
      <p class="text-slate-400 text-12px">{{ project.desc }}</p>
    </div>
  </a>
</template>

<style scoped>
.project {
  display: flex;
  align-items: center;
  height: 80px;
  width: 320px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 15px;
  background-color: var(--list-item-bg);
  transition: 0.2s ease-in-out;
}

.project:hover {
  background-color: var(--list-item-bg-hover);
}
</style>
