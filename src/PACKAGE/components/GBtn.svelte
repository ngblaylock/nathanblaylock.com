<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { IconName } from './';
  import GIcon from './GIcon.svelte';
  let {
    children,
    class: classList = '',
    disabled = false,
    href = '',
    iconLeft,
    iconRight,
    loading = false,
    outline = false,
    type = 'button',
    variant = 'primary',
    ...restProps
  }: {
    children: Snippet;
    class?: string;
    disabled?: boolean;
    href?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    loading?: boolean;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
    [key: string]: unknown;
  } = $props();

  const hasInnerIcon = $derived(!!iconLeft || !!iconRight);
  const outlineVariant = $derived(outline ? 'outline-' : '');

  let disabledOrLoading = $derived(disabled || loading);
</script>

{#snippet btnContent()}
  {#if iconLeft}
    <GIcon
      name={iconLeft}
      size={1.5}
    />
  {/if}
  {#if loading}
    <div class="position-absolute"><span class="loader"></span></div>
  {/if}
  <!--
  Exception for inline styling:
  
  Loader needs more transparent text than disabled alone provides. Disabled text cannot be more transparent without making the whole button transparent.
  -->
  <span style={loading ? 'opacity: .2;' : ''}>{@render children?.()}</span>
  {#if iconRight}
    <GIcon
      name={iconRight}
      size={1.5}
    />
  {/if}
{/snippet}

{#if href}
  <a
    class="btn btn-{outlineVariant}{variant} btn-inner-icon {classList}"
    class:disabled={disabledOrLoading}
    {href}
    {...restProps}
  >
    {@render btnContent()}
  </a>
{:else}
  <button
    class="btn btn-{outlineVariant}{variant} btn-inner-icon {classList}"
    {type}
    disabled={disabledOrLoading}
    {...restProps}
  >
    {@render btnContent()}
  </button>
{/if}
