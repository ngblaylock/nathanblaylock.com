<script lang="ts">
  import Footer from '$components/Footer.svelte';

  let lines = $state(20);
</script>

<GSideNav header="Side Nav">
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

  {#snippet sideNavContent()}
    Hey-o
  {/snippet}

  {#snippet sideNavTools()}
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
  {/snippet}
</GSideNav>
