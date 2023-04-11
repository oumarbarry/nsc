// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { shim: false },

  experimental: { componentIslands: true },

  modules: ['@nuxtjs/tailwindcss'],
})
