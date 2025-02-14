<script lang="ts">
  import { type IconName } from './icons';
  import GIcon from './GIcon.svelte';
  interface Props {
    class?: string;
    href?: string;
    icon: IconName;
    outline?: boolean;
    title: string;
    variant?: Variant;
    [key: string]: unknown;
  }
  let {
    class: classList = '',
    href = '',
    icon,
    outline = false,
    title,
    variant = 'primary',
    ...restProps
  }: Props = $props();

  const outlineVariant = $derived(outline ? 'outline-' : '');
</script>

{#if href}
  <a
    {title}
    class="btn btn-{outlineVariant}{variant} btn-icon {classList}"
    {href}><GIcon name={icon} size={1.5} /></a
  >
{:else}
  <button
    {title}
    class="btn btn-{outlineVariant}{variant} btn-icon {classList}"
    {...restProps}><GIcon name={icon} size={1.5} /></button
  >
{/if}
