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
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer";

export default {
  components: {
    Nav,
    Footer
  }
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
