<script lang="ts">import { onMount } from 'svelte';
import GAvatar from './GAvatar.svelte';
import GIcon from './GIcon.svelte';
import GIconBtn from './GIconBtn.svelte';
import { getClientEnvironment } from './';
let { appNavContent, children, navItems, } = $props();
let expanded = $state(false);
let isIosPwa = $state(false);
onMount(() => {
    let environment = getClientEnvironment();
    isIosPwa = environment.isIosSafari && environment.isPwa;
    console.log(isIosPwa);
});
</script>

<div
  class="app-nav-container"
  class:expanded
>
  <nav class="app-nav" class:ios-home-bar-offset={isIosPwa}>
    {#if appNavContent}
      {@render appNavContent()}
    {:else if navItems}
      {#if navItems.brand.href}
        <a
          href={navItems.brand.href}
          class="app-nav-brand"
        >
          <img
            src={navItems.brand.src}
            alt="{navItems.brand.alt}"
          />
          <div class="app-nav-brand-text">{navItems.brand.label}</div>
        </a>
      {:else}
        <div class="app-nav-brand">
          <img
            src={navItems.brand.src}
            alt=""
          />
          {#if navItems.brand.label}
            <div class="app-nav-brand-text">{navItems.brand.label}</div>
          {/if}
        </div>
      {/if}
      {#each navItems.links as link}
        <a
          href={link.href}
          class="app-nav-link"
          class:active={link.active}
        >
          {#if link.icon}
            <GIcon name={link.icon} />
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
