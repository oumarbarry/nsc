export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },

  experimental: { componentIslands: true },

  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: { viewer: false },

  imports: {
    dirs: ["./db/**"],
  },
})
