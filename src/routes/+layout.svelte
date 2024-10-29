<script lang="ts">
  import { pageTitle } from '$lib/stores';
  import { onMount } from 'svelte';
  import Footer from '$components/Footer.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Meta from '$components/Meta.svelte';
  import BgAngle from '$components/BgAngle.svelte';
  import Analytics from '$components/Analytics.svelte';
  import DevToolbar from '$components/DevToolbar.svelte';

  // Animate On Scroll
  import 'aos/dist/aos.css';
  import AOS from 'aos';
  import { NODE_ENV } from '$env/static/private';

  onMount(() => {
    AOS.init({
      once: true,
      offset: 100,
    });
  });
</script>

<svelte:head>
  <style lang="scss">
    @import '../sass/style';
    body {
      overflow-y: scroll;
      background-image: url('/images/optimized/bg/bg_texture.jpg');
      background-position: top;
      background-repeat: no-repeat;
      background-size: 100%;
      min-height: 100vh;
    }
    [data-bs-theme='dark'] body {
      background-image: url('/images/optimized/bg/bg_texture-dark.jpg');
    }
  </style>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"
  ></script>
</svelte:head>
<Analytics />
<Meta />
<DevToolbar />
<BgAngle />

<div class="site">
  <Navbar />

  <main>
    <div class="container">
      <div class="title-container">
        <div class="display">
          Nathan<br />Blaylock
        </div>
        <h1>{$pageTitle}</h1>
      </div>
      <slot />
    </div>
  </main>

  <Footer />
</div>

<style lang="scss">
  .site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    main {
      flex: 1 1 0;
    }
  }
  .title-container {
    display: inline-block;
    margin-bottom: 6rem;
    position: relative;
  }
  .display {
    color: $primary;
    display: inline-block;
    font-size: 4.7em;
    font-weight: 700;
    line-height: 0.85em;
    :global([data-bs-theme='dark']) & {
      color: var(--bse-base-i1);
    }
  }
  @include media-breakpoint-up(sm) {
    .display {
      font-size: 7em;
    }
  }
  h1 {
    bottom: -1.2em;
    color: $primary;
    font-weight: 400;
    position: absolute;
    right: 0;
    :global([data-bs-theme='dark']) & {
      color: var(--bse-base-i1);
    }
  }
</style>
