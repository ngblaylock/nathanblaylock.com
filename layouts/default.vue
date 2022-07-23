<template>
  <div class="site">
    <div class="bg-angle"></div>
    <NavBar />
    <main>
      <Title />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
body {
  min-height: 100vh;
  background-image: url('/img/bg-texture.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>

<style lang="scss" scoped>
.site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1 1 0;
  }
}
.bg-angle {
  background: transparent;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  aspect-ratio: 16 / 9;
  width: 70%;
  opacity: 0.15;
  clip-path: polygon(0 0, 67% 0, 100% 100%, 0 100%);
  position: absolute;
  z-index: -1;
}
</style>