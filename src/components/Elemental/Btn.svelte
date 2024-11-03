<script>
  let { href = '', theme = 'primary', children, ...rest } = $props();
</script>

{#if href}
   <a class="btn btn-{theme} {rest.class || ''}" href="{href}">{@render children?.()}</a>
{:else}
  <button class="btn btn-{theme} {rest.class || ''}">{@render children?.()}</button>
{/if}