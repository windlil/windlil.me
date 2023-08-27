<script setup lang="ts">
import listItem from './list-item.vue'

interface IProject {
  name: string
  link: string
  desc: string
  icon?: string
}

interface Props {
  type: string
  projects: IProject[]
}

defineProps<Props>()
</script>

<template>
  <div class="mt-10px">
    <h1 class="text-30px font-bold mb-25px">
      {{ type }}
    </h1>
    <div class="flex flex-wrap justify-between">
      <template v-for="(projectItem, index) in projects" :key="index">
        <listItem :project="projectItem"></listItem>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">

</style>