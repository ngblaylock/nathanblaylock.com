<script lang="ts">
  import { run } from 'svelte/legacy';

  import { page } from '$app/stores';
  let currentRoute: string = $state();
  const isCurrentRoute = (route: string) => {
    currentRoute = route;
  };
  run(() => {
    isCurrentRoute($page.route.id || '');
  });
</script>

<nav>
  <div
    class="container py-3 d-flex flex-wrap align-items-center gap-3 justify-content-center justify-content-sm-end"
  >
    <a href="/" class={currentRoute == '/' ? 'active' : ''}>Projects</a>
    <a href="/about" class={currentRoute == '/about' ? 'active' : ''}>About Nathan</a>
    <a href="/contact" class={currentRoute == '/contact' ? 'active' : ''}>Contact</a>
  </div>
</nav>

<style lang="scss">
  nav {
    display: block;
    font-weight: 600;
    a:not(:global(.btn)) {
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
