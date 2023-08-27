<script setup lang="ts">
let dark = ref<boolean>(false)

function toggele() {
  const documentElement = document.documentElement
  if (dark.value) {
    documentElement.classList.remove('dark')
  } else {
    documentElement.classList.add('dark')
  }
  dark.value = !dark.value
}

function toggleTheme() {
  toggele()
}
</script>

<template>
  <button @click="toggleTheme" class="flex justify-center items-center">
    <div class="i-carbon:light dark:i-carbon:moon"></div>
  </button>
</template>
