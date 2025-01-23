<script lang="ts">import {} from './icons';
import Icon from './Icon.svelte';
let { class: classList = '', href = '', variant = 'primary', icon, title, outline = false, ...restProps } = $props();
const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#if href}
  <a {title} class="btn btn-{outlineVariant}{variant} btn-icon {classList}" {href}><Icon name={icon} size={1.5} /></a>
{:else}
  <button {title} class="btn btn-{outlineVariant}{variant} btn-icon {classList}" {...restProps}><Icon name={icon} size={1.5} /></button>
{/if}
