<script setup lang="ts">
import projectList from '~/components/project-list.vue'

const projects = ref([
  {
    name: 'aww-ui',
    desc: 'Vue3组件库搭建实践 采用BEM架构和monorepo',
    link: 'https://github.com/windlil/aww-ui',
    icon: 'i-carbon:logo-vue'
  },
  {
    name: 'windlil-blog',
    desc: '我的个人博客 Nuxt+Vite+unocss',
    link: 'https://github.com/windlil/windlil.me',
    icon: 'i-simple-icons:nuxtdotjs'
  },
  {
    name: 'mini-vuex',
    desc: '基于vue3, 从零手写实现一个mini-vuex',
    link: 'https://github.com/windlil/mini-vuex',
    icon: 'i-carbon:logo-vue'
  },
  {
    name: 'souls-trip',
    desc: '民宿预定网站 Vue3+Vite+Pinia+Less',
    link: 'https://github.com/windlil/souls-trip',
    icon: 'i-carbon:logo-vue'
  },
  {
    name: 'vite-plugin-timelog',
    desc: 'Vite plugin: regularly display current file information',
    link: 'https://github.com/windlil/vite-plugin-timelog',
    icon: 'i-simple-icons:vite'
  },
  {
    name: 'unplugin-import-global-css',
    desc: 'Global css auto import',
    link: 'https://github.com/windlil/unplugin-import-global-css',
    icon: 'i-simple-icons:typescript'
  },
  {
    name: 'JustPressYourKeyboard',
    desc: 'Simple keyboard games',
    link: 'https://github.com/windlil/JustPressYourKeyboard',
    icon: 'i-carbon:logo-vue'
  },
  {
    name: 'se',
    desc: 'A CLI to help you fast search and open browser',
    link: 'https://github.com/windlil/se',
    icon: 'i-simple-icons:typescript'
  },
  {
    name: 'Stab',
    desc: '简易的浏览器起始页',
    link: 'https://github.com/windlil/Stab',
    icon: 'i-simple-icons:torbrowser'
  },
  
])


const Participated = ref([
  {
    name: 'antdv-pro',
    desc: 'An antdv-based middle and background management system',
    link: 'https://github.com/antdv-pro/antdv-pro',
    icon: 'i-carbon:logo-vue'
  },
])
</script>

<template>
  <div>
    <projectList type="Owner" :projects="projects"></projectList>
    <projectList type="Participated" :projects="Participated"></projectList>
  </div>
</template>
