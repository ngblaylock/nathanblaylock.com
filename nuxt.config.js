export default {
  target: 'static',
  head: {
    title: '',
    titleTemplate: (titleChunk) => {
      return titleChunk
        ? `${titleChunk} | Nathan Blaylock Media`
        : "Nathan Blaylock Media";
    },
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        name: "apple-mobile-web-app-title",
        content: "Nathan Blaylock Media",
      },
      {
        name: "application-name",
        content: "Nathan Blaylock Media",
      },
      {
        name: "msapplication-TileColor",
        content: "#671110",
      },
      {
        name: "msapplication-config",
        content: "/img/browserconfig.xml",
      },
      {
        name: "theme-color",
        content: "#671110",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i&display=swap",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/img/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/img/safari-pinned-tab.svg",
        color: "#671110",
      },
      {
        rel: "shortcut icon",
        href: "/img/favicon.ico",
      },
    ],
  },
  loading: {
    color: "#fff",
  },
  plugins: [],
  buildModules: [],
  css: ["@/assets/style/custom.scss"],
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },
  build: {
    extend(config, ctx) {},
  },
  components: true,
  generate: {
    dir: "docs",
    fallback: true,
  },
};
