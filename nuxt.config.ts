// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/test-utils",
    "nuxt-icon",
    "@nuxtjs/sitemap"
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Meport",
      meta: [
        { name: "description", content: "Privacy-first analytics, performance insights and web vitals for your website or application with our lightweight tools." }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: "/favicon.png" }],
      // script: [
      //   {
      //     src: 'https://dev.meport.pages.dev/sbun.js',
      //     tagPriority: 'critical',
      //     'data-api': 'https://sectrack-5733xnph2q-ew.a.run.app/api/v1'
      //   }
      // ]
    }
  }
})
