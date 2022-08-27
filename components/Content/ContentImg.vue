<template>
  <NuxtImg class="content-img mb-4 img-fluid" :src="src" :width="width" />
</template>

<script>
export default {
  props: {
    width: {
      default: 600,
    },
    src: {
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.content-img{
  display: block;
  margin: 0 auto;
}
</style>