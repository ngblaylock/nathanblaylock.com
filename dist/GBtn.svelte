<script lang="ts">import {} from './icons';
import GIcon from './GIcon.svelte';
let { children, class: classList = '', disabled = false, href = '', iconLeft, iconRight, outline = false, type = 'button', variant = 'primary', ...restProps } = $props();
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
    class:disabled
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
    {disabled}
    {...restProps}
  >
    {@render btnContent()}
  </button>
{/if}
