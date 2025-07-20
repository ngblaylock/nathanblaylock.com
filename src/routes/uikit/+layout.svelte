<script lang="ts">
  import { onMount } from 'svelte';
  import { componentData } from '$lib/component-docs.svelte';
  import UiKitNav from './UiKitNav.svelte';

  let { data, children } = $props();

  onMount(() => {
    componentData.componentDoc = data.componentDoc;
  });
</script>

<div class="d-flex h-100">
  <UiKitNav />
  <div class="container py-5" style="min-width: 1px;">{@render children?.()}</div>
</div>
