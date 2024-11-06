<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    href?: string;
    variant?: Variant;
    class?: string;
    children: Snippet;
    [key: string]: unknown;
  }
  let {
    class: classList = '',
    href = '',
    variant = 'primary',
    children,
    ...restProps
  }: Props = $props();
</script>

{#if href}
  <a class="btn btn-{variant} {classList}" {href}>{@render children?.()}</a>
{:else}
  <button class="btn btn-{variant} {classList}" {...restProps}>{@render children?.()}</button>
{/if}
