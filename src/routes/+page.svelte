<script lang="ts">
  import { projects } from '$lib/projectList';
  import Seo from '$components/Seo.svelte';
</script>

<Seo title="Projects" robots />

<div class="container">
  <div class="row row-gap-5 mb-8">
    {#each projects as project}
      <div class="col-sm-4" data-aos="fade-up">
        <div class="shadow">
          <a href="/projects/{project.route}"
            ><img
              src="/images/optimized/projects/{project.route}/lg_{project.route}.jpg"
              alt={project.alt}
              class="img-fluid rounded mb-0"
            /></a
          >
        </div>
      </div>
    {/each}
  </div>
</div>
