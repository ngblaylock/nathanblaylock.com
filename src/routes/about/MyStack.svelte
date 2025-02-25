<script lang="ts">
  import Logo from '$components/Logo.svelte';
  import { logos } from '$lib/assets/logos';
</script>

<div class="mb-5" data-aos="fade-up">
  <h2 class="text-center mb-4">My Stack</h2>
  <div class="d-flex justify-content-center flex-wrap gap-3">
    {#each logos as logo}
      <div class="text-center card bg-base-4 py-2 px-4">
        <Logo name={logo} />
        <div class="pt-1"><small>{logo.replace('-', ' ')}</small></div>
      </div>
    {/each}
  </div>
</div>
