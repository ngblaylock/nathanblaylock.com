<script lang="ts">
  import type { Snippet } from 'svelte';
  import { type IconName } from './icons';
  import GIcon from './GIcon.svelte';
  let {
    children,
    class: classList = '',
    href = '',
    iconLeft,
    iconRight,
    outline = false,
    type = 'button',
    variant = 'primary',
    ...restProps
  }: {
    [key: string]: unknown;
    children: Snippet;
    class?: string;
    href?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
  } = $props();

  const hasInnerIcon = $derived(!!iconLeft || !!iconRight);
  const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#snippet btnContent()}
  {#if iconLeft}
    <GIcon
      name={iconLeft}
      size={1.5}
    />
  {/if}
  {@render children?.()}
  {#if iconRight}
    <GIcon
      name={iconRight}
      size={1.5}
    />
  {/if}
{/snippet}

{#if href}
  <a
    class="btn btn-{outlineVariant}{variant} {classList}"
    class:btn-inner-icon={hasInnerIcon}
    {href}
    {...restProps}
  >
    {@render btnContent()}
  </a>
{:else}
  <button
    class="btn btn-{outlineVariant}{variant} {classList}"
    class:btn-inner-icon={hasInnerIcon}
    {type}
    {...restProps}
  >
    {@render btnContent()}
  </button>
{/if}
