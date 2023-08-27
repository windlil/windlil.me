<script setup lang="ts">
import DarkToggle from './dark-toggle.vue'
</script>

<template>
  <header class="p-8">
    <nav class="flex items-center justify-end gap-1.5em">
      <NuxtLink class="link" title="Blog" to="/blog">
        <span class="hidden md-inline">Blog</span>
        <div class="i-carbon:align-box-bottom-left md-hidden"></div>
      </NuxtLink>
      <NuxtLink class="link" title="Projects" to="/projects">
        <span class="hidden md-inline">Projects</span>
        <div class="i-carbon:chemistry md-hidden"></div>
      </NuxtLink>
      <NuxtLink class="link" title="About" to="/">
        <span class="hidden md-inline">About</span>
        <div class="i-carbon:face-satisfied md-hidden"></div>
      </NuxtLink>
      <NuxtLink class="link" to="https://github.com/windlil">
        <div class="i-carbon:logo-github"></div>
      </NuxtLink>
      <div>
        <DarkToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.link {
  color: var(--link-color);
}
.link:hover {
  color: var(--link-hover);
}
</style>