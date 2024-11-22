<script lang="ts">
  import { type IconName } from '$lib/icons';
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte';
  interface Props {
    href?: string;
    variant?: Variant;
    class?: string;
    icon: IconName;
    outline?: boolean;
    [key: string]: unknown;
  }
  let {
    class: classList = '',
    href = '',
    variant = 'primary',
    icon,
    outline = false,
    ...restProps
  }: Props = $props();

  const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#if href}
  <a class="btn btn-{outlineVariant}{variant} btn-icon {classList}" {href}><Icon name={icon} size={1.5} /></a>
{:else}
  <button class="btn btn-{outlineVariant}{variant} btn-icon {classList}" {...restProps}><Icon name={icon} size={1.5} /></button>
{/if}
