<template>
  <div class="mt-5">
    <div class="text-center">
      <h1 v-if="error.statusCode === 404"><span class="display-1 text-muted">404</span><br />Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <nuxt-link class="btn btn-primary mt-3" to="/">Back to Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>