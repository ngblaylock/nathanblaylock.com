<template>
  <footer class="mt-3 mt-sm-4 mt-md-5">
    <b-container
      class="
        border-top border-gray
        d-flex
        align-items-center
        justify-content-between
        py-3
      "
    >
      <ul class="list-unstyled d-flex flex-wrap mb-0">
        <li>&copy; Nathan Blaylock {{ year }}</li>
        <li>
          <a href="https://docs.nathanblaylock.com" target="_blank"
            >Documentation</a
          >
        </li>
        <li>
          <a href="https://github.com/ngblaylock" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://dev.to/ngblaylock" target="_blank">Dev.to Blog</a>
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
      </ul>
      <div class="logos">
        <a
          class="uxc"
          href="https://www.nngroup.com/ux-certification/verify/"
          target="_blank"
          ><img
            src="https://media.nngroup.com/nng-uxc-badge.png"
            alt="UX Certification Badge from Nielsen Norman Group"
        /></a>
        <NuxtImg class="logo" src="/img/logo-red-nathan-blaylock-media.svg" alt="NB Logo" />
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
li {
  display: block;
  padding: 0 12px 0 0;
}
.uxc {
  display: inline-block;
  margin-left: auto;
  img {
    max-height: 110px;
  }
}
.logos {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  max-height: 50px;
  margin-left: 12px;
}
@include media-breakpoint-down(md) {
  .logos {
    .uxc img {
      max-height: 80px;
    }
    .logo {
      max-height: 40px;
    }
  }
}
@include media-breakpoint-down(sm) {
  li {
    width: 100%;
  }
}
</style>