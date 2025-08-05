<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  let DynamicComponent: any = $state();

  let componentName = $state('');

  onMount(async () => {
    componentName = page.url.searchParams.get('component') || '';
    if (!componentName) return;
    const module = await import(`$PACKAGE/examples/${componentName}.svelte`);
    if (!module) return;
    DynamicComponent = module.default;
  });
</script>

<svelte:head>
  <title>{componentName ? `${componentName} | Full Page Example` : 'Full Page Example'}</title>
</svelte:head>

{#if DynamicComponent}
  <DynamicComponent />
{/if}
