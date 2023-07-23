// https://nuxt.com/docs/api/configuration/nuxt-config
import { getEntries } from './utils/entries';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '',
    // Keys within public, will be also exposed to the client-side
    public: {
      entries: getEntries(),
    },
  },
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
