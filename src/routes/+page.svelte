<script lang="ts">
  import * as E from '$lib/components/Elemental';
  import { projects } from '$lib/projectList';
</script>

<E.SEO title="Projects" robots />

<div class="row mb-5">
  {#each projects as project}
    <div class="col-sm-4" data-aos="fade-up">
      <div class="shadow mb-4">
        <a href="/projects/{project.route}"
          ><img
            src="/images/optimized/projects/{project.route}/lg_{project.route}.jpg"
            alt={project.alt}
            class="img-fluid rounded"
          /></a
        >
      </div>
    </div>
  {/each}
</div>
