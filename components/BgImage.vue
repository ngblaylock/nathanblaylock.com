<template>
  <NuxtImg
    class="bg-img"
    src="/img/bg-texture.jpg"
    sizes="sm:768px md:1024px lg:1280px"
  />
</template>

<style lang="scss" scoped>
.bg-img {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: .7;
}
</style>