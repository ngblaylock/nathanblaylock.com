<template>
  <b-container v-if="page" style="max-width: 768px">
    <h2>{{ page.title }}</h2>
    <nuxt-content :document="page" />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      page: null,
    }
  },
  async fetch() {
    let pages = await this.$content()
      .where({ slug: this.$route.params.project })
      .fetch()
    if (pages && pages[0]) this.page = pages[0]
  },
}
</script>

<style>
</style>