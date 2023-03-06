// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  typescript: {
    shim: false
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "nuxt-icon",
    "@nuxt/image-edge",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
