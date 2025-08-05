<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  let DynamicComponent: any = $state();

  onMount(async () => {
    const componentName = page.url.searchParams.get('component');
    if (!componentName) return;
    const module = await import(`$PACKAGE/examples/${componentName}.svelte`);
    if (!module) return;
    DynamicComponent = module.default;
  });
</script>

{#if DynamicComponent}
  <DynamicComponent />
{/if}
