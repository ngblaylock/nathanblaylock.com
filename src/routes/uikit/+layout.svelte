<script lang="ts">
  import { onMount } from 'svelte';
  import { componentData } from '$lib/component-docs.svelte';
  import UiKitNav from './UiKitNav.svelte';

  let { data, children } = $props();

  onMount(() => {
    componentData.componentDoc = data.componentDoc;
  });
</script>

<UiKitNav />
{@render children?.()}
