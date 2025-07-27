<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  let navItemGroups = $state([
    {
      name: '',
      folder: '',
      items: [
        { name: 'Home', slug: '' },
        { name: 'Colors', slug: 'colors' },
        { name: 'Typography', slug: 'typography' },
        { name: 'Loaders', slug: 'loaders' },
        { name: 'Spacing', slug: 'spacing' },
        { name: 'Brand Logos', slug: 'brand-logos' },
      ],
    },
    {
      name: 'Components',
      folder: '/components',
      items: [
        { name: 'Avatars', slug: 'avatars' },
        { name: 'Buttons', slug: 'buttons' },
        { name: 'Debug', slug: 'debug' },
        { name: 'DevNotes', slug: 'dev-notes' },
        { name: 'Icon Buttons', slug: 'icon-buttons' },
        { name: 'Icons', slug: 'icons' },
        {
          name: 'Sortable Cards',
          slug: 'sortable-cards',
          tags: ['draggable cards'],
        },
      ],
    },
    {
      name: 'Form Elements',
      folder: '/components',
      items: [
        { name: 'Checkboxes', slug: 'checkboxes' },
        { name: 'Checkbox Groups', slug: 'checkbox-groups' },
        { name: 'Radio Groups', slug: 'radio-groups' },
        { name: 'Rich Text Inputs', slug: 'rich-text-inputs' },
        {
          name: 'Segmented Control',
          slug: 'segmented-control',
          tags: ['button group'],
        },
        { name: 'Text Inputs', slug: 'text-inputs', tags: ['textareas'] },
      ],
    },
  ]);

  let search = $state('');

  const filteredNav = $derived(
    navItemGroups
      .map((group) => {
        const items = group.items.filter((item) => {
          return (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.tags?.join('≠').toLowerCase().includes(search.toLowerCase())
          );
        });
        return { ...group, items };
      })
      .filter((group) => group.items.length),
  );

  function isActive(path: string) {
    return page.route.id === path || null;
  }

  onMount(() => {
    document.getElementById('uikit-search')?.focus();
  });

  afterNavigate(() => {
    search = '';
  });
</script>

<div class="uikit-nav bg-base-2 py-5 px-3 border-end">
  <aside>
    <div class="hstack">
      <h2>UI Kit</h2>
      <code>v{__APP_VERSION__}</code>
      <GIconBtn
        icon="home"
        title="Main Website"
        href="/"
        variant="base-i4"
        class="ms-auto"
      />
    </div>
    <div class="mb-4">
      <GTextInput
        label="Hidden Label"
        hideLabel
        placeholder="Search Pages"
        type="search"
        id="uikit-search"
        bind:value={search}
      />
    </div>
    {#each filteredNav as group}
      {#if group.name}
        <h3 class="h6 text-base-i4 border-top pt-2">
          <strong>{group.name}</strong>
        </h3>
      {/if}
      <div class="list-group mx-n3 mb-4">
        {#each group.items as item}
          {@const path = `/uikit${group.folder}${item.slug ? `/${item.slug}` : ''}`}
          <div>
            <a
              href={path}
              class="list-group-item list-group-item-action"
              class:active={isActive(path)}
              aria-current={isActive(path)}
            >
              {item.name}
            </a>
          </div>
        {/each}
      </div>
    {/each}
  </aside>
</div>

<style lang="scss">
  .uikit-nav {
    max-width: 350px !important;
    min-width: 350px !important;
  }
</style>
