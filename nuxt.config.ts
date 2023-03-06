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
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Meport",
      meta: [
        { name: "description", content: "Privacy-first analytics, performance insights and web vitals for your website or application with our lightweight tools." }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: "/favicon.png" }],
      script: [
        {
          src: "https://app.meport.io/st.js",
          tagPriority: 'critical',
        },
        {
          innerHTML: `
            const Meport = new PageTracker("https://meport-5733xnph2q-ey.a.run.app")
            Meport.init()
          `
        }
      ]
    }
  }
})
