<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    children: Snippet;
  }
  let { href, children } : Props = $props();
</script>

<div class="text-center mb-4">
  <a class="btn btn-secondary" {href} target="_blank"
    >{#if children}{@render children()}{:else}Visit Site{/if}</a
  >
</div>
