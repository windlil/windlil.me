// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/md.css' ,
  ],
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
  ],
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
      },
      preload: ['ts', 'js', 'css', 'scss', 'vue', 'bash'],
  
    }
  }
})
