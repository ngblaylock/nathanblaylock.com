<template>
  <div class="site">
    <NavBar />
    <main>
      <Title />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
body{
  min-height: 100vh;
  background-image: url("/img/bg-texture.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>

<style lang="scss" scoped>
.site{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main{
    flex: 1 1 0;
  }
}
</style>