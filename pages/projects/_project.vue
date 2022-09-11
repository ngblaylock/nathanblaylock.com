<template>
  <b-container v-if="page" style="max-width: 768px">
    <h2>{{ page.title }}</h2>
    <nuxt-content :document="page" />
    <div v-if="page.icons && page.icons.length" class="text-center">
      <hr style="max-width: 600px;" class="mt-5">
      <h2 class="h3 mt-4 mb-4">Key Technology Used:</h2>
      <div class="d-flex gap justify-content-center pt-2">
        <Icon
          v-for="(icon, index) in page.icons"
          :key="index"
          :icon="icon"
          size="2"
        />
      </div>
    </div>
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

<style lang="scss" scoped>
.gap{
  gap: $spacer;
}
</style>