<template>
  <span v-if="false"></span>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
    },
    description: {
      default:
        "Nathan Blaylock is a creative professional who helps small businesses reach goals on a budget through stunning photography, unique graphic design, and a strong web presence.",
    },
    img: {
      default: "/img/logo-red-nathan-blaylock-media.png",
    },
    norobots: {
      default: false,
      type: Boolean,
    }
  },
  data: function() {
    return {
      site: "https://nathanblaylock.com",
      siteName: "Nathan Blaylock Media"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "robots",
          name: "robots",
          content: this.norobots ? "noindex, nofollow" : "",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `${this.site + this.$route.path}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.site + this.img,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.siteName,
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${this.site + this.$route.path}`,
        },
      ],
    };
    // <!-- Twitter -->
    // <meta property="twitter:card" content="summary_large_image">
    // <meta property="twitter:url" content="https://metatags.io/">
    // <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
    // <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
    // <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
  },
};
</script>

<style></style>
