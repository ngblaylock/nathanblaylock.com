<script lang="ts">
  import DevToolbar from '$components/DevToolbar.svelte';
  import Footer from '$components/Footer.svelte';

  let lines = $state(20);
</script>

<DevToolbar />
<GAppNav>
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

  {#snippet appNav()}
    <a
      href="/uikit/components/app-nav"
      class="app-nav-brand"
    >
      <img
        src="https://picsum.photos/200"
        alt=""
      />
      <div class="app-nav-brand-text">App Name</div>
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link active"
    >
      <GIcon name="book" />
      Journal
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GIcon name="plus" />
      To Do List
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GIcon name="formatBlockquote" />
      Quotes
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GIcon name="delete" />
      Trash Can
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GAvatar src="/images/optimized/profile/blaylock-nathan.jpg" />
      Profile
    </a>
  {/snippet}
</GAppNav>
