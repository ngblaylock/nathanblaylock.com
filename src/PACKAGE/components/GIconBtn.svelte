<script lang="ts">
  import { type IconName } from './icons';
  import GIcon from './GIcon.svelte';
  let {
    class: classList = '',
    href = '',
    icon,
    outline = false,
    title,
    type = 'button',
    variant = 'primary',
    ...restProps
  }: {
    class?: string;
    href?: string;
    icon: IconName;
    outline?: boolean;
    title: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
    [key: string]: unknown;
  } = $props();

  const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#if href}
  <a
    {title}
    class="btn btn-{outlineVariant}{variant} btn-icon {classList}"
    {href}
    ><GIcon
      name={icon}
      size={1.5}
    /></a
  >
{:else}
  <button
    {title}
    class="btn btn-{outlineVariant}{variant} btn-icon {classList}"
    {type}
    {...restProps}
    ><GIcon
      name={icon}
      size={1.5}
    /></button
  >
{/if}
