<script lang="ts">
  import Logo from '$components/Logo.svelte';
  import Seo from '$components/Seo.svelte';
  import { logos } from '$lib/assets/logos';
</script>

<Seo title="Logos" hideHeader />

<h2 class="mt-4">Logos</h2>
<div class="row row-gap-4">
  {#each logos as logo}
    <div class="col-sm-6">
      <div
        class="card card-body"
      >
        <div class="hstack gap-3">
          <Logo name={logo} />
          {logo}
        </div>
      </div>
    </div>
  {/each}
</div>
