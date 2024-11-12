<script lang="ts">
  import icons, {type IconName} from '$lib/icons';

  interface Props {
    name: IconName,
    size?: number,
  }
  let { name, size = 1 } : Props = $props();

  let path = $derived(icons[name] || '');
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
