<template>
  <!-- https://icon-sets.iconify.design/ -->
  <IconifyIcon v-if="icon" :style="`font-size: ${size}em;`" :icon="icon" :inline="true" />
</template>

<script>
import { Icon as IconifyIcon } from '@iconify/vue2'

export default {
  components: {
    IconifyIcon,
  },
  props: {
    icon: {
      required: true,
    },
    size: {
      default: 1,
    },
  },
}
</script>