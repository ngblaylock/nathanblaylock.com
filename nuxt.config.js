const isDev = process.env.NODE_ENV !== 'production'
const prodFavicons = [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicons/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicons/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicons/site.webmanifest',
  },
  {
    rel: 'mask-icon',
    href: '/favicons/safari-pinned-tab.svg',
    color: '#671110',
  },
]
const devFavicons = [
  {
    rel: 'icon',
    type: 'image/png',
    href: '/favicons/favicon-dev.png',
  },
]
const favicons = isDev ? devFavicons : prodFavicons

export default {
  target: 'static',
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Nathan Blaylock` : 'Nathan Blaylock'
    },
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nathan Blaylock is a User Experience Engineer who loves to creatively solve complex problems. This portfolio is a showcase of some of his work.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Nathan Blaylock Media',
      },
      {
        name: 'application-name',
        content: 'Nathan Blaylock Media',
      },
      {
        name: 'msapplication-TileColor',
        content: '#671110',
      },
      {
        name: 'msapplication-config',
        content: '/img/browserconfig.xml',
      },
      {
        name: 'theme-color',
        content: '#671110',
      },
    ],
    link: [
      ...favicons,
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://nathanblaylock.com/`,
      },
    ],
    script: [
      {
        async: true,
        src: !isDev
          ? 'https://www.googletagmanager.com/gtag/js?id=G-1GELWP8WME'
          : '',
      },
      {
        src: !isDev ? '/js/analytics.js' : '',
      },
    ],
  },
  generate: {
    dir: 'docs',
  },
  publicRuntimeConfig: {
    isDev,
  },
  css: ['@/assets/scss/nathanblaylock.scss'],
  publicRuntimeConfig: {
    isDev: process.env.NODE_ENV !== 'production',
  },
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/style-resources', '@nuxt/image'],
  modules: ['@nuxt/content'],
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
  },
}
