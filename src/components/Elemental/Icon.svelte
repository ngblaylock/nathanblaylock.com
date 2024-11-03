<script>
  import icons from '$lib/icons';

  /** @type {{
   *  name: string, 
   *  size: number
   * }}*/
  let { name, size = 1 } = $props();

  let path = $derived(icons[name.trim()] || '');
</script>

{#if path}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style="width: {size}rem; height: {size}rem;"
  >
    <path d={path} />
  </svg>
{/if}
