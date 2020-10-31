<template>
  <div>
  <b-navbar toggleable="sm" type="dark" variant="danger">
    <nuxt-link class="navbar-brand" to="/">
      <img
        src="/img/logo-white-nathan-blaylock-media.svg"
        style="width: 50px;"
        alt="Nathan Blaylock Media Logo"
      />
      <span class="d-none d-sm-inline ml-2">Nathan Blaylock Media</span>
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <ul class="navbar-nav ml-auto text-center p-1">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">Portfolio</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/services">Services</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss">

#nav-collapse{
  ul{
    li{
      a{
        color: #dddddd;
        padding-bottom: 0px; 
        border-bottom: 2px solid rgba(255, 255, 255, 0);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        transition: all .2s;
        padding: 10px;
        &:hover:not(.nuxt-link-exact-active){
          color: white;
          border-bottom: 2px solid rgba(255, 255, 255, 0.75);
        }
        &.nuxt-link-exact-active{
          background-color: rgba(0, 0, 0, 0.185);
          color: white;
          border-bottom: 2px solid rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>