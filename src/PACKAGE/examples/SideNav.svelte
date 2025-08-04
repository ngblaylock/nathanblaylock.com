<script lang="ts">
  import DevToolbar from '$components/DevToolbar.svelte';
  import Footer from '$components/Footer.svelte';

  let lines = $state(20);
  let snLines = $state(2);
</script>

<DevToolbar />
<div class="d-flex">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, labore sit voluptas expedita tempore numquam porro
              veniam, iure repellat et asperiores soluta quaerat autem. Eveniet
              a nobis ratione quos optio?
            </p>
          {/each}
        </div>
      </main>
      <Footer />
    </div>

    {#snippet sideNavContent()}
      <GBtn
        variant="secondary"
        onclick={() => (snLines = snLines === 40 ? 2 : 40)}
      >
        Toggle
      </GBtn>
      <ul>
        {#each Array(snLines) as x}
          <li>Foo {x}</li>
        {/each}
      </ul>
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
        title="Firebase"
      />
    {/snippet}
  </GSideNav>
</div>
