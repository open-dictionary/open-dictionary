// https://nuxt.com/docs/api/configuration/nuxt-config

const isProduction = process.env.NODE_ENV == 'production';

export default defineNuxtConfig({
  sourcemap: !isProduction,
  devtools: { enabled: !isProduction },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.scss'],
  app: {
    head: {
      title: 'Open Dictionary',
      meta: [{ name: 'description', content: 'An open source collaborative English dictionary.' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
  },
});
