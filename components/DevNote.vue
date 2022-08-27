<template>
  <div class="dev-note" v-if="$config.isDev">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dev-note{
  padding: 24px 16px;
  margin-bottom: 1em;
  border: 2px dotted $dev;
  color: $dev;
  background: lighten($dev, 82);
  border-radius: 8px;
  position: relative;
  &:before{
    content: "Dev Note";
    position: absolute;
    background: $dev;
    color: white;
    transform: translate(0, -25%);
    top: -2px;
    left: 16px;
    font-size: .7em;
    padding: .3em 1em;
    border-radius: 8px;
  }
}
</style>