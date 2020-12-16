<template>
  <div class="mw-600">
    <img :src="src" class="d-block mx-auto mb-3" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      default: "https://placehold.it/600x400"
    },
    alt: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.mw-600{
  max-width: 600px;
  margin: 0 auto;
}
img{
  max-width: 100%;
}
</style>