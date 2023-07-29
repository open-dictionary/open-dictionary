// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.scss',
  ],
  app: {
    head: {
      title: 'Open Dictionary',
      meta: [{ name: 'description', content: 'An open source collaborative English dictionary.' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
});
