export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: { componentIslands: true },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
  ],

  eslint: { config: { standalone: false } },

  imports: { dirs: ["./db/**"] },
})
