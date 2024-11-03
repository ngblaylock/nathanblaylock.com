<script>
  /**
   * @type {{
   *  href: string,
   *  theme: string,
   *  children: import('svelte').Snippet
   *  class?: string
   * }}
   */
  let { href = '', theme = 'primary', children, class: classList = '' } = $props();
</script>

{#if href}
  <a class="btn btn-{theme} {classList}" {href}>{@render children?.()}</a>
{:else}
  <button class="btn btn-{theme} {classList}">{@render children?.()}</button>
{/if}
