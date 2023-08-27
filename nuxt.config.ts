// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    rootId: 'nuxt-root',
    head: {
      meta: [
        { name: 'description', content: 'windlil blog' },
        { name: 'author', content: 'windlil 晓风' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
      noscript: [
        { children: 'JavaScript is required' },
      ],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/md.css' ,
    '@/assets/styles/global.css',
    '@/assets/styles/theme.css',
  ],
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
  ],
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      preload: ['ts', 'js', 'css', 'scss', 'vue', 'bash'],
  
    }
  }
})
