<template>
  <div :class="{'bg-light p-3 mb-3' : archived}">
    <p class="text-center">
      <b-btn :href="href" :target="target"><slot /></b-btn>
    </p>
    <p v-if="archived" class="text-center mb-0">
      <strong>Note:</strong> this is a web archive of the closest date to the
      site I developed.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      required: true,
    },
    target: {
      default: '_blank',
    },
    archived: {
      type: Boolean,
      default: false,
    }
  },
}
</script>