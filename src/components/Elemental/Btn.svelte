<script lang="ts">
  import { createBubbler } from 'svelte/legacy';

  const bubble = createBubbler();
  interface Props {
    href?: string;
    theme?: string;
    children?: import('svelte').Snippet;
    [key: string]: any
  }

  let { href = '', theme = 'primary', children, ...rest }: Props = $props();
</script>

{#if href}
   <a class="btn btn-{theme} {rest.class || ''}" href="{href}">{@render children?.()}</a>
{:else}
  <button class="btn btn-{theme} {rest.class || ''}" onclick={bubble('click')}>{@render children?.()}</button>
{/if}