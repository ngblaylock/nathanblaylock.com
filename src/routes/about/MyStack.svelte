<script lang="ts">
  import * as E from '$components/Elemental';
  import ProjectIcon from '$components/ProjectIcon.svelte';
  import { projectIcons } from '$lib/assets/icons';
</script>

<div class="mb-5">
  <h2 class="text-center mb-4">My Stack</h2>
  <div class="d-flex justify-content-center flex-wrap gap-3">
    {#each projectIcons as projectIcon}
      <div class="text-center card bg-base-4 py-2 px-3">
        <ProjectIcon name={projectIcon} />
        <div class="pt-1"><small>{projectIcon.replace('-', ' ')}</small></div>
      </div>
    {/each}
  </div>
</div>
