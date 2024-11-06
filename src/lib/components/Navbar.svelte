<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav>
  <div
    class="container py-3 d-flex flex-wrap align-items-center gap-3 justify-content-center justify-content-sm-end"
  >
    <a href="/" class:active={$page.url.pathname === '/'}>Projects</a>
    <a href="/about" class:active={$page.url.pathname === '/about'}>About Nathan</a>
    <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
  </div>
</nav>

<style lang="scss">
  nav {
    display: block;
    font-weight: 600;
    a {
      text-decoration: none;
      border-bottom: 2px solid transparent;
      border-top: 2px solid transparent;
      &.active {
        border-bottom: 2px solid currentColor;
      }
    }
  }
  @include media-breakpoint-up(sm) {
    nav {
      font-size: 1.25rem;
    }
  }
</style>
