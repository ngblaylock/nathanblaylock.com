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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  modules: ['@nuxt/content'],
  content: {},
  build: {},
  tailwindcss: {
    config: tailwindConfig,
  },
}
