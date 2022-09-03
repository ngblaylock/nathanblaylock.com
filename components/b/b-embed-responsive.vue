<template>
  <div class="mb-3 embed-responsive" :class="`embed-responsive-${size}`">
    <iframe class="embed-responsive-item" :src="src" title="Embedded video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      validator(value) {
        return ['21by9', '16by9', '4by3', '1by1'].includes(value)
      },
      default: '16by9'
    },
    src:{
      required: true,
    }
  },
}
</script>

<style>
</style>