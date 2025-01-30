<script lang="ts">
  import { onMount } from 'svelte';
  import { componentData } from '$lib/component-docs.svelte';
  import { afterNavigate } from '$app/navigation';

  let { data, children } = $props();

  onMount(() => {
    componentData.componentDoc = data.componentDoc;
  });

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
      name: 'Icon Buttons',
      slug: 'icon-buttons',
    },
    {
      name: 'Icons',
      slug: 'icons',
    },
  ]);
  const filteredComponents = $derived(
    components.filter((c) => {
      return c.name.toLowerCase().includes(search.toLowerCase());
    })
  );
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
      <div class="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
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
          />
          <ul class="dropdown-menu">
            {#each filteredComponents as component}
              <li>
                <a class="dropdown-item" href="/uikit/components/{component.slug}"
                  >{component.name}</a
                >
              </li>
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
{@render children?.()}
