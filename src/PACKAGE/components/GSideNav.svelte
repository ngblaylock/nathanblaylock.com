<script lang="ts">
  import DevToolbar from '$components/DevToolbar.svelte';
  import type { Snippet } from 'svelte';

  let {
    children,
    header,
    sideNavContent,
    sideNavTools,
  }: {
    children: Snippet;
    header: string;
    sideNavContent: Snippet;
    sideNavTools: Snippet;
  } = $props();
</script>

<DevToolbar />
<div class="side-nav-container">
  <nav class="side-nav navbar navbar-expand-lg">
    <div class="side-nav-toolbar">
      <GIconBtn
        variant="base-i1"
        icon="menu"
        class="d-lg-none"
        title="Toggle navigation"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      />
      <div class="side-nav-header">{header}</div>
      <div class="side-nav-tools">
        {@render sideNavTools()}
      </div>
    </div>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-body">
        <GIconBtn
          variant="base-i1"
          icon="close"
          title="Close"
          class="d-lg-none float-end"
          data-bs-dismiss="offcanvas"
        />
        {@render sideNavContent()}
      </div>
    </div>
  </nav>
  {@render children()}
</div>
