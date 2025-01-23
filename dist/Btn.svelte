<script lang="ts">import {} from './icons';
import Icon from './Icon.svelte';
let { class: classList = '', href = '', variant = 'primary', iconLeft, iconRight, outline = false, children, ...restProps } = $props();
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
