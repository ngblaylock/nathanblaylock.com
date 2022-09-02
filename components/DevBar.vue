<template>
  <div v-if="$config.isDev" class="devbar d-flex">
    <div class="mr-auto">Development</div>
    <button @click="hide = !hide" class="btn btn-link p-0">
      {{ hide ? 'Show' : 'Hide' }} Media Queries
    </button>
    <NuxtLink class="btn btn-link p-0" to="/uikit">UI Kit</NuxtLink>
    <MediaQueries :hide="hide" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.devbar {
  background: $dev;
  color: white;
  padding: 2px $spacer;
}
.btn-link {
  color: white;
  text-decoration: underline;
  margin: 0 0 0 $spacer / 2;
}
</style>