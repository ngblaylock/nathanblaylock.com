<script lang="ts">
  import DevToolbar from '$components/DevToolbar.svelte';
  import Footer from '$components/Footer.svelte';

  let lines = $state(20);
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
      <div class="side-nav-header">Side Nav</div>
      <div class="side-nav-tools">
        <GIconBtn
          variant="base-i4"
          icon="plus"
          title="Add"
        />
        <GIconBtn
          variant="base-i4"
          icon="brandFirebase"
          title="Add"
        />
        <GIconBtn
          variant="base-i4"
          icon="brandGitHub"
          title="Add"
        />
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
        Side Nav Content
      </div>
    </div>
  </nav>

  <div class="flex-fill d-flex flex-column">
    <main class="flex-fill">
      <div class="container">
        <GBtn
          variant="secondary"
          onclick={() => (lines = lines === 20 ? 2 : 20)}
        >
          Toggle
        </GBtn>
        {#each Array(lines) as _x}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            labore sit voluptas expedita tempore numquam porro veniam, iure
            repellat et asperiores soluta quaerat autem. Eveniet a nobis ratione
            quos optio?
          </p>
        {/each}
      </div>
    </main>
    <Footer />
  </div>
</div>
