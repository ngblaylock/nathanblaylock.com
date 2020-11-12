<template>
  <img :src="src" class="img-fluid d-block mx-auto mb-3" :alt="alt" />
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
img{
  max-width: 600px;
}
</style>