<script lang="ts">
  import icons from '$lib/icons';
  export let name: string;
  export let size: number = 1;

  $:path = icons[name.trim()] || '';
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
