<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { projects } from '$lib/projectList';
  import * as E from '$components/Elemental';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

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



  const defaultProject = {
    route: '',
    alt: '',
  };
  let currentProject = $derived($page.route.id?.replace('/projects/', ''));
  let getNextProject = $derived(() => {
    if (!currentProject) {
      return defaultProject;
    }
    const currentProjectIndex = projects.findIndex((project) => project.route === currentProject);
    if (currentProjectIndex == -1) {
      return defaultProject;
    }
    if (currentProjectIndex == projects.length - 1) {
      return projects[0];
    }
    return projects[currentProjectIndex + 1];
  });
  let getPrevProject = $derived(() => {
    if (!currentProject) {
      return defaultProject;
    }
    const currentProjectIndex = projects.findIndex((project) => project.route === currentProject);
    if (currentProjectIndex == -1) {
      return defaultProject;
    }

    if (currentProjectIndex == 0) {
      return projects[projects.length - 1];
    }
    return projects[currentProjectIndex - 1];
  });
</script>

<div class="project mb-5 pb-3">
  <div class="row" data-aos="fade-up">
    <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
      {@render children?.()}
      {#if getPrevProject().route && getNextProject().route}
        <div class="d-flex justify-content-between mt-5">
          <a
            href="/projects/{getPrevProject().route}"
            class="btn btn-outline-contrast btn-inner-icon text-end"
          >
            <E.Icon name="arrowLeft" />
            {getPrevProject().alt}</a
          >
          <a href="/projects/{getNextProject().route}" class="btn btn-outline-contrast btn-inner-icon text-end">
            {getNextProject().alt}
            <E.Icon name="arrowRight" /></a
          >
        </div>
      {/if}
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
