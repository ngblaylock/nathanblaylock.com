<script lang="ts">
  import { onMount } from 'svelte';
  import { componentData } from '$lib/component-docs.svelte';
  import UiKitNav from './UiKitNav.svelte';
  import Footer from '$components/Footer.svelte';
  import DevToolbar from '$components/DevToolbar.svelte';

  let { data, children } = $props();

  onMount(() => {
    componentData.componentDoc = data.componentDoc;
  });
</script>

<div
  class="d-flex"
  style="min-height: 100dvh;"
>
  <UiKitNav />
  <div
    style="min-width: 1px;"
    class="flex-fill d-flex flex-column"
  >
    <DevToolbar />
    <div class="container py-5 flex-fill">
      {@render children?.()}
    </div>
    <Footer />
  </div>
</div>
