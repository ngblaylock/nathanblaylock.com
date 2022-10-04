<template>
  <span v-if="false"></span>
</template>

<script>
export default {
  props:{
    title: {
      required: true,  
    },
    description: {
    },
    norobots:{
      type: Boolean,
      default: false,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'robots',
          name: 'robots',
          content: this.norobots ? 'noindex, nofollow' : 'index, follow'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://nathanblaylock.com${this.$route.path}`
        }
      ]
    }
  },
}
</script>