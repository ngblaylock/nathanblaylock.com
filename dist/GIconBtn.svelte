<script lang="ts">import {} from './icons';
import GIcon from './GIcon.svelte';
let { class: classList = '', disabled = false, href = '', icon, outline = false, title, type = 'button', variant = 'primary', ...restProps } = $props();
const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#if href}
  <a
    {title}
    class="btn btn-{outlineVariant}{variant} btn-icon {classList}"
    class:disabled
    {href}
    {...restProps}
  >
    <GIcon
      name={icon}
      size={1.5}
    />
  </a>
{:else}
  <button
    {title}
    class="btn btn-{outlineVariant}{variant} btn-icon {classList}"
    {type}
    {disabled}
    {...restProps}
  >
    <GIcon
      name={icon}
      size={1.5}
    />
  </button>
{/if}
