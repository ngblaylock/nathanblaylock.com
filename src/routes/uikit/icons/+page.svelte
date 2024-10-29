<script lang="ts">
  import * as E from '$components/Elemental';
  import ProjectIcon from '$components/ProjectIcon.svelte';
  import icons from '$lib/icons';

  function copy(iconName: string, componentName: string) {
    navigator.clipboard
      .writeText(`<${componentName} name="${iconName}" />`)
      .then(() => {
        alert('Icon copied to the clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy text to clipboard:', err);
      });
  }

  const projectIcons = [
    'Adobe-Illustrator',
    'Adobe-InDesign',
    'Adobe-Photoshop',
    'Adobe-XD',
    'Affinity-Designer',
    'Affinity-Photo',
    'Affinity-Publisher',
    'Alpine',
    'Bash',
    'Bootstrap-3',
    'Bootstrap-4',
    'Bootstrap-5',
    'Bootstrap-Vue',
    'CSS',
    'Eleventy',
    'Figma',
    'Firebase',
    'GitHub',
    'HTML',
    'JavaScript',
    'jQuery',
    'Markdown',
    'Node-JS',
    'NPM',
    'Nunjucks',
    'Nuxt',
    'Rollup',
    'Sass',
    'Sketch',
    'SvelteKit',
    'Tailwind',
    'TypeScript',
    'Vue',
  ];
</script>

<E.SEO title="Icons" />

<div class="mb-4">
  <h2 class="mt-4">E.Icon</h2>
  <div class="row row-gap-4">
    {#each Object.entries(icons) as [icon, key]}
      <div class="col-sm-4">
        <button
          class="btn btn-base-4 btn-copy w-100 hstack gap-3 justify-content-between"
          on:click={() => copy(icon, 'E.Icon')}
        >
          <div>
            <E.Icon name={icon} />
            <span>{icon}</span>
          </div>
          <div class="copy">
            <E.Icon name="copy" />
          </div>
        </button>
      </div>
    {/each}
  </div>
  <h2 class="mt-4">ProjectIcon</h2>
  <div class="row row-gap-4">
    {#each projectIcons as projectIcon}
      <div class="col-sm-6">
        <button
          class="btn btn-base-4 btn-copy w-100 hstack gap-3 justify-content-between"
          on:click={() => copy(projectIcon, 'ProjectIcon')}
        >
          <div class="hstack gap-3">
            <ProjectIcon name={projectIcon} />
            {projectIcon}
          </div>
          <div class="copy">
            <E.Icon name="copy" />
          </div>
        </button>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .copy {
    opacity: 0;
    transition: 0.2s;
  }
  .btn-copy {
    &:hover {
      .copy {
        opacity: 0.75;
      }
    }
  }
</style>
