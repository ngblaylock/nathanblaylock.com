<script lang="ts">
  import type { Snippet } from 'svelte';
  import { type IconName } from './icons';
  import Icon from './Icon.svelte';
  interface Props {
    [key: string]: unknown;
    children: Snippet;
    class?: string;
    href?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    outline?: boolean;
    variant?: Variant;
  }
  let {
    children,
    class: classList = '',
    href = '',
    iconLeft,
    iconRight,
    outline = false,
    variant = 'primary',
    ...restProps
  }: Props = $props();

  const hasInnerIcon = $derived(!!iconLeft || !!iconRight);
  const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#snippet btnContent()}
  {#if iconLeft}
    <Icon name={iconLeft} size={1.5} />
  {/if}
  {@render children?.()}
  {#if iconRight}
    <Icon name={iconRight} size={1.5} />
  {/if}
{/snippet}

{#if href}
  <a
    class="btn btn-{outlineVariant}{variant} {classList}"
    class:btn-inner-icon={hasInnerIcon}
    {href}>{@render btnContent()}</a
  >
{:else}
  <button
    class="btn btn-{outlineVariant}{variant} {classList}"
    class:btn-inner-icon={hasInnerIcon}
    {...restProps}>{@render btnContent()}</button
  >
{/if}
