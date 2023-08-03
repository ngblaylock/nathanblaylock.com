<script lang="ts">
  import {pageTitle} from "$lib/stores";
	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/Navbar.svelte';
</script>

<svelte:head>
	<style lang="scss">
		@import '../sass/style';
	</style>
</svelte:head>

<div class="site">
  <Navbar />
  
  <main>
    <div class="container">
      <h1 class="text-primary">Nathan Blaylock <small>{$pageTitle}</small></h1>
      <slot />
    </div>
  </main>
  
  <Footer />
</div>

<style lang="scss">
  .site{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    main{
      flex: 1 1 0;
    }
  }
</style>
