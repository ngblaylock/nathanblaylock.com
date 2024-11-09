<script lang="ts">
  import Logo from './Logo.svelte';

  interface Props {
    logos: string[];
  }
  let { logos = [] } : Props = $props();
</script>

{#if logos.length}
  <div class="border-top pt-5 mt-5 text-center">
    <div class="hstack flex-wrap gap-3 justify-content-center">
      {#each logos as icon}
        <Logo name={icon} />
      {/each}
    </div>
  </div>
{/if}
