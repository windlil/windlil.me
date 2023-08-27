<script setup lang="ts">

</script>

<template>
  <header class="p-8">
    <nav class="flex items-center justify-end gap-1.5em">
      <NuxtLink title="Blog" to="/blog">
        <span class="hidden md-inline">Blog</span>
        <div class="i-carbon:align-box-bottom-left md-hidden"></div>
      </NuxtLink>
      <NuxtLink title="Projects" to="/projects">
        <span class="hidden md-inline">Projects</span>
        <div class="i-carbon:chemistry md-hidden"></div>
      </NuxtLink>
      <NuxtLink title="About" to="/about">
        <span class="hidden md-inline">About</span>
        <div class="i-carbon:face-satisfied md-hidden"></div>
      </NuxtLink>
      <NuxtLink title="About">
        <div class="i-carbon:logo-github"></div>
      </NuxtLink>
      <div>
        <div class="i-carbon:light"></div>
      </div>
    </nav>
  </header>
</template>
