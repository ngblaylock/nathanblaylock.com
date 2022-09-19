<template>
  <img
    :title="iconName"
    v-if="iconName"
    :src="`/icons/${iconFile}.svg`"
    :alt="iconName"
    :style="`height: ${size}em; width: auto`"
  />
</template>

<script>
export default {
  props: {
    size: {
      default: 1,
    },
  },
  computed: {
    iconName() {
      return this.$slots.default[0].text
    },
    iconFile() {
      return this.$slots.default[0].text.toLowerCase().replace(' ', '-')
    },
  },
}
</script>