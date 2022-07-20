export default {
  target: 'static',
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '@/assets/scss/nathanblaylock.scss'
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  modules: [
    // 'bootstrap-vue/nuxt',
  ],
  build: {},
  bootstrapVue: {
    // bootstrapCSS: false,
    // bootstrapVueCSS: false,
  },
  styleResources: {
    scss: [
      './assets/scss/_ngb-variables.scss',
      './assets/scss/_bootstrap-required.scss',
    ],
   }
}
