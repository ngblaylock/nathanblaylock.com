<script lang="ts">
  import '../sass/style.scss';
  import { global } from '$lib/global.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import Footer from '$components/Footer.svelte';
  import Navbar from '$components/Navbar.svelte';
  import Meta from '$components/Meta.svelte';
  import BgAngle from '$components/BgAngle.svelte';
  import Analytics from '$components/Analytics.svelte';
  import DevToolbar from '$components/DevToolbar.svelte';

  // Animate On Scroll
  import 'aos/dist/aos.css';
  import AOS from 'aos';

  let { children } = $props();

  onMount(async () => {    
    AOS.init({
      once: true,
      offset: 100,
    });
  });
</script>

<svelte:head>
  {#if !page.route.id?.startsWith('/uikit')}
    <style>
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
  {/if}
</svelte:head>

<Analytics />
<Meta />

{#if page.route.id?.startsWith('/uikit')}
  {@render children?.()}
{:else}
  <DevToolbar />
  <div class="site">
    <BgAngle />
    <main>
      <Navbar />
      <div class="container">
        <div class="title-container">
          <div class="display">
            Nathan<br />Blaylock
          </div>
          {#if global.pageTitle}
            <h1>{global.pageTitle}</h1>
          {/if}
        </div>
      </div>
      {@render children?.()}
    </main>
    <Footer />
  </div>
{/if}

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
  }
  @include media-breakpoint-up(sm) {
    .title-container .display {
      font-size: 7em;
    }
  }
</style>
