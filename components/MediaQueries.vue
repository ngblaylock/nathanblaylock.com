<template>
  <div class="media-queries" v-if="!hide">
    <div class="d-none d-xl-block">XL</div>
    <div class="d-none d-lg-block d-xl-none">LG</div>
    <div class="d-none d-md-block d-lg-none">MD</div>
    <div class="d-none d-sm-block d-md-none">SM</div>
    <div class="d-block d-sm-none">XS</div>
  </div>
</template>

<script>
export default {
  props: {
    hide: {
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.media-queries{
  position: fixed;
  bottom: $spacer;
  right: $spacer;
  width: 2em;
  height: 2em;
  font-size: 1.3em;
  background: $dev;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-radius: 100px;
  font-weight: bold;
  opacity: .9;
  &:hover{
    opacity: .2;
    cursor: default;
  }
}
</style>