import tailwindConfig from './tailwind.config'

export default {
  target: 'static',
  head: {
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxt/content'],
  content: {},
  build: {},
  tailwindcss: {
    config: tailwindConfig,
  },
}
