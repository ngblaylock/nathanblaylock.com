<script lang="ts">
  import Logo from '$components/Logo.svelte';
  import Seo from '$components/Seo.svelte';
  import { logos } from '$lib/assets/logos';
</script>

<Seo title="Brand Logos" />

<h1>Brand Logos</h1>
<div class="row row-gap-4 mb-7">
  {#each logos as logo}
    <div class="col-sm-6">
      <div
        class="card card-body"
      >
        <div class="hstack">
          <Logo name={logo} />
          {logo}
        </div>
      </div>
    </div>
  {/each}
</div>
