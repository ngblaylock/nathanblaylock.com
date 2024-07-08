<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { projects } from '$lib/projectList';

  onMount(() => {
    // Set all external anchor links to go to a new tab. Markdown doesn't support it.
    let anchors = document.querySelectorAll('.project a:not([target="_blank"])');
    anchors.forEach((a) => {
      let href = a.getAttribute('href');
      if (href?.startsWith('http')) {
        // change target to blank
        a.setAttribute('target', '_blank');
      }
    });
  });

  $: currentProject = $page.route.id?.replace('/projects/', '');
  $: previousProject = () => {
    const currentProjectIndex = projects.findIndex((project) => project.route === currentProject);
    if (currentProjectIndex == 0) {
      return projects[projects.length - 1];
    }
    return projects[currentProjectIndex - 1];
  };
  $: nextProject = () => {
    const currentProjectIndex = projects.findIndex((project) => project.route === currentProject);
    if (currentProjectIndex == projects.length - 1) {
      return projects[0];
    }
    return projects[currentProjectIndex + 1];
  };
</script>

<div class="project mb-5 pb-3">
  <div class="row" data-aos="fade-up">
    <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
      <slot />
      <div class="d-flex justify-content-between mt-5">
        <a href="/projects/{previousProject().route}" class="btn btn-outline-dark text-start"
          >⇽ {previousProject().alt}</a
        >
        <a href="/projects/{nextProject().route}" class="btn btn-outline-dark text-end"
          >{nextProject().alt} ⇾</a
        >
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  :global(img) {
    display: block;
    margin: 0 auto 16px auto;
    max-width: 100%;
  }
</style>
