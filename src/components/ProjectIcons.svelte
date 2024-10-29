<script lang="ts">
  import ProjectIcon from './ProjectIcon.svelte';
  export let icons: string[] = [];
</script>

{#if icons.length}
  <div class="border-top pt-5 mt-5 text-center">
    <div class="hstack flex-wrap gap-3 justify-content-center">
      {#each icons as icon}
        <ProjectIcon name={icon} />
      {/each}
    </div>
  </div>
{/if}
