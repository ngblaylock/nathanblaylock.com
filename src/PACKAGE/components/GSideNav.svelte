<script lang="ts">
  import { beforeNavigate } from '$app/navigation';
  import type { Snippet } from 'svelte';
  import uniqueId from 'lodash/uniqueId';

  let {
    children,
    header,
    sideNavContent,
    sideNavTools,
  }: {
    children: Snippet;
    header: string;
    sideNavContent: Snippet;
    sideNavTools?: Snippet;
  } = $props();

  const uid = uniqueId('u');

  beforeNavigate(async () => {
    const offcanvasEl = document.getElementById(uid);
    if (!offcanvasEl) return;
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) {
      offcanvas.hide();
    }
  });
</script>

<div class="side-nav-container">
  <nav class="side-nav navbar navbar-expand-lg">
    <div class="side-nav-toolbar">
      <GIconBtn
        variant="base-i1"
        icon="menu"
        class="d-lg-none"
        title="Toggle navigation"
        data-bs-toggle="offcanvas"
        data-bs-target="#{uid}"
        aria-controls={uid}
      />
      <div
        id="{uid}Label"
        class="side-nav-header"
      >
        {header}
      </div>
      {#if sideNavTools}
        <div class="side-nav-tools">
          {@render sideNavTools()}
        </div>
      {/if}
    </div>
    <aside
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id={uid}
      aria-labelledby="{uid}Label"
    >
      <div class="offcanvas-body">
        <GIconBtn
          variant="base-i1"
          icon="close"
          title="Close"
          class="d-lg-none float-end me-3"
          data-bs-dismiss="offcanvas"
        />
        {@render sideNavContent()}
      </div>
    </aside>
  </nav>
  {@render children()}
</div>
