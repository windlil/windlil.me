// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/md.css' ,
    '@/assets/styles/global.css' ,
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
