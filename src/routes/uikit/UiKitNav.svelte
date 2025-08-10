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
        { name: 'Utils', slug: 'utils' },
      ],
    },
    {
      name: 'General Components',
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
      name: 'Layout Components',
      folder: '/components',
      items: [
        { name: 'AppNav', slug: 'app-nav' },
        { name: 'SideNav', slug: 'side-nav' },
      ],
    },
    {
      name: 'Form Components',
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

<h5 class="px-3 pt-3 d-lg-none">UI Kit Nav</h5>

<div class="mb-3 px-3">
  <GTextInput
    label="Hidden Label"
    hideLabel
    placeholder="Search Pages"
    type="search"
    id="uikit-search"
    bind:value={search}
  />
</div>
<div class="mb-5">
  {#each filteredNav as group}
    {#if group.name}
      <h3 class="h6 text-base-i4 border-top pt-2 px-3 small mt-4">
        <strong>{group.name}</strong>
      </h3>
    {/if}
    <div class="list-group">
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
</div>