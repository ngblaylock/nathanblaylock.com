<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { IconName } from './icons';

  let {
    appNav,
    children,
    navItems,
  }: {
    appNav?: Snippet;
    children: Snippet;
    navItems?: {
      brand: {
        href: string;
        label: string;
        src: string;
      };
      links: {
        active?: boolean;
        href: string;
        icon?: string;
        label: string;
        src?: string;
      }[];
    };
  } = $props();

  let expanded = $state(false);
</script>

<div
  class="app-nav-container"
  class:expanded
>
  <nav class="app-nav">
    {#if appNav}
      {@render appNav()}
    {:else if navItems}
      <a
        href={navItems.brand.href}
        class="app-nav-brand"
      >
        <img
          src={navItems.brand.src}
          alt=""
        />
        <div class="app-nav-brand-text">{navItems.brand.label}</div>
      </a>
      {#each navItems.links as link}
        <a
          href={link.href}
          class="app-nav-link"
          class:active={link.active}
        >
          {#if link.icon}
            <GIcon name={link.icon as IconName} />
          {:else if link.src}
            <GAvatar src={link.src} />
          {/if}
          {link.label}
        </a>
      {/each}
    {/if}
    <div
      class="d-none d-xl-block mt-auto {expanded
        ? 'align-self-end'
        : 'align-self-center'}"
    >
      <GIconBtn
        icon={expanded ? 'chevronLeft' : 'chevronRight'}
        variant="light"
        title={expanded ? 'Collapse' : 'Expand'}
        onclick={() => (expanded = !expanded)}
      />
    </div>
  </nav>
  <div class="app-nav-content">
    {@render children?.()}
  </div>
</div>
