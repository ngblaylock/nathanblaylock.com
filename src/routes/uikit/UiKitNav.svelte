<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';

  afterNavigate(() => {
    search = '';
  });

  let search = $state('');

  let components = $state([
    {
      name: 'Buttons',
      slug: 'buttons',
    },
    {
      name: 'Debug',
      slug: 'debug',
    },
    {
      name: 'DevNotes',
      slug: 'dev-notes',
    },
    {
      name: 'Icon Buttons',
      slug: 'icon-buttons',
    },
    {
      name: 'Icons',
      slug: 'icons',
    },
    {
      name: 'Sortable Cards',
      slug: 'sortable-cards',
    },
    {
      name: 'Forms',
    },
    {
      name: 'Checkboxes',
      slug: 'checkboxes',
    },
    {
      name: 'Checkbox Groups',
      slug: 'checkbox-groups',
    },
    {
      name: 'Radio Groups',
      slug: 'radio-groups',
    },
    {
      name: 'Segmented Control',
      slug: 'segmented-control',
    },
    {
      name: 'Text Inputs',
      slug: 'text-inputs',
    },
  ]);
  const filteredComponents = $derived(
    components.filter((c) => {
      return c.name.toLowerCase().includes(search.toLowerCase());
    })
  );

  function isActive(slug: string) {
    return page.route.id === `/uikit/components/${slug}`;
  }
</script>

<div class="card mb-4 text-bg-dev">
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/uikit">UI Kit</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse align-items-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto me-2">
          <li class="nav-item mb-0">
            <a class="nav-link" href="/uikit">Home</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link" href="/uikit/forms">Forms</a>
          </li>
          <li class="nav-item mb-0">
            <a class="nav-link" href="/uikit/logos">Logos</a>
          </li>
        </ul>
        <div class="dropdown">
          <input
            class="form-control"
            bind:value={search}
            placeholder="Search Components"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="Search Components"
          />
          <ul class="dropdown-menu">
            {#each filteredComponents as component}
              {#if component.slug}
                <li>
                  <a
                    class="dropdown-item"
                    class:active={isActive(component.slug)}
                    href="/uikit/components/{component.slug}"
                    >{component.name}</a
                  >
                </li>
              {:else}
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header">{component.name}</h6></li>
              {/if}
            {/each}
            {#if filteredComponents.length === 0}
              <li class="px-3 text-muted">No Results Found</li>
            {/if}
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
