<script lang="ts">
  import Logo from './Logo.svelte';

  interface Props {
    logos: string[];
  }
  let { logos = [] } : Props = $props();
</script>

{#if logos.length}
  <div class="border-top pt-6 mt-6 text-center">
    <div class="hstack flex-wrap justify-content-center">
      {#each logos as logo}
        <Logo name={logo} />
      {/each}
    </div>
  </div>
{/if}
