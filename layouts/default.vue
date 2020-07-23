<template>
  <div class="--default d-flex flex-column">
    <Nav />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>

export default {
};
</script>

<style>
div.--default{
  height: 100vh;
}
main{
  flex: 1 1 auto;
}
</style>
