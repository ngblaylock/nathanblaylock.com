<script lang="ts">
  import { onMount } from 'svelte';
  import { componentData } from '$lib/component-docs.svelte';
  import UiKitNav from './UiKitNav.svelte';
  import Footer from '$components/Footer.svelte';
  import GSideNav from '$PACKAGE/components/GSideNav.svelte';
  import DevToolbar from '$components/DevToolbar.svelte';

  let { data, children } = $props();

  onMount(() => {
    componentData.componentDoc = data.componentDoc;
  });
</script>

<DevToolbar />
<GSideNav header="UI Kit">
  {#snippet sideNavTools()}
      <code class="me-auto">v{__APP_VERSION__}</code>
      <GIconBtn
        icon="home"
        title="Main Website"
        href="/"
        variant="base-i4"
      />
  {/snippet}
  {#snippet sideNavContent()}
    <UiKitNav />
  {/snippet}
  <div class="flex-fill d-flex flex-column">
    <div class="container flex-fill py-5">{@render children?.()}</div>
    <Footer />
  </div>
</GSideNav>
