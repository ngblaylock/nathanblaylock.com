<template>
  <b-container>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </b-container>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>