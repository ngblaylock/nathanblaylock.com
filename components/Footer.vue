<template>
  <footer class="mt-5">
    <b-container class="border-top border-gray d-flex align-items-center py-3">
      <ul class="list-unstyled d-flex mb-0">
        <li class="mr-3">&copy; Nathan Blaylock {{year}}</li>
        <li>
          <a href="https://docs.nathanblaylock.com" target="_blank"
            >Documentation</a
          >
        </li>
        <li>
          <a href="https://github.com/ngblaylock" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="https://dev.to/ngblaylock" target="_blank"
            >Dev.to Blog</a
          >
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
      </ul>
      <a class="uxc" href="https://www.nngroup.com/ux-certification/verify/" target="_blank"><img src="https://media.nngroup.com/nng-uxc-badge.png" alt="UX Certification Badge from Nielsen Norman Group" /></a>
      Logo
    </b-container>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      year: new Date().getFullYear(),
    }
  }
}
</script>

<style lang="scss" scoped>
li{
  a{
    display: inline-block;
    padding: 0 12px;
  }
}
.uxc{
  display: inline-block;
  margin-left: auto;
  img{
    max-height: 130px;
  }
}
</style>