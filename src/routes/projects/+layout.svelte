<script lang="ts">
  import { page } from '$app/state';
  import { projects } from '$lib/projectList';

  const { children } = $props();

  const defaultProject = {
    route: '',
    alt: '',
  };

  const currentProject = $derived(page.route.id?.replace('/projects/', ''));

  const getNextProject = $derived.by(() => {
    if (!currentProject) {
      return defaultProject;
    }
    const currentProjectIndex = projects.findIndex(
      (project) => project.route === currentProject
    );
    if (currentProjectIndex == -1) {
      return defaultProject;
    }
    if (currentProjectIndex == projects.length - 1) {
      return projects[0];
    }
    return projects[currentProjectIndex + 1];
  });

  const getPrevProject = $derived.by(() => {
    if (!currentProject) {
      return defaultProject;
    }
    const currentProjectIndex = projects.findIndex(
      (project) => project.route === currentProject
    );
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
      {#if getPrevProject.route && getNextProject.route}
        <div class="d-flex justify-content-between mt-7">
          <a
            href="/projects/{getPrevProject.route}"
            class="btn btn-outline-contrast btn-inner-icon text-end"
          >
            <GIcon name="arrowLeft" />
            {getPrevProject.alt}</a
          >
          <a
            href="/projects/{getNextProject.route}"
            class="btn btn-outline-contrast btn-inner-icon text-end"
          >
            {getNextProject.alt}
            <GIcon name="arrowRight" /></a
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
