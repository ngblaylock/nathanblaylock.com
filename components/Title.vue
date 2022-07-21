<template>
  <b-container>
    <div class="title-container">
      <h1 class="main-title">Nathan <br />Blaylock</h1>
      <h2 class="sub-title">{{pageTitle}}</h2>
    </div>
  </b-container>
</template>

<script>
export default {
  data(){
    return {
      pageTitle: '',
    }
  },
  mounted() {
    this.$nuxt.$on('change-page-title', (d) => {
      this.pageTitle = d;
    })
  },
  watch:{
    $route(){
      this.pageTitle = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  display: inline-block;
  position: relative;
  margin-bottom: 6rem;
}
.main-title {
  color: $primary;
  font-weight: 700;
  font-size: 7em;
  display: inline-block;
  line-height: 0.85em;
}
.sub-title {
  color: $primary;
  font-weight: 400;
  position: absolute;
  right: 0;
  bottom: -1.2em;
  font-size: 2.35em;
}
@include media-breakpoint-down(sm) {
  .title-container {
    margin-bottom: 4rem;
  }
  .main-title {
    font-size: 6em;
  }
  .sub-title {
    font-size: 2em;
  }
}
@include media-breakpoint-down(xs) {
  .title-container {
    margin-bottom: 3rem;
  }
  .main-title {
    font-size: 4em;
  }
  .sub-title {
    font-size: 1.75em;
  }
}
</style>