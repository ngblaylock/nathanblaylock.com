<script lang="ts">
  import { type IconName } from '$PACKAGE/icons';
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte';
  interface Props {
    href?: string;
    variant?: Variant;
    class?: string;
    children: Snippet;
    [key: string]: unknown;
    iconLeft?: IconName;
    iconRight?: IconName;
    outline?: boolean;
  }
  let {
    class: classList = '',
    href = '',
    variant = 'primary',
    iconLeft,
    iconRight,
    outline = false,
    children,
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
  <a class="btn btn-{outlineVariant}{variant} {classList}" class:btn-inner-icon={hasInnerIcon} {href}
    >{@render btnContent()}</a
  >
{:else}
  <button class="btn btn-{outlineVariant}{variant} {classList}" class:btn-inner-icon={hasInnerIcon} {...restProps}
    >{@render btnContent()}</button
  >
{/if}
