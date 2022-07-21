<template>
  <b-container>
    Contact
  </b-container>
</template>

<script>
export default {
  mounted(){
    $nuxt.$emit('change-page-title', "Contact")
  }
}
</script>