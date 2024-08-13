<script lang="ts">
  import * as E from '$components/Elemental';
  import icons from '$lib/icons';

  function copy(iconName:string) {
    navigator.clipboard.writeText(`<E.Icon name="${iconName}" />`)
      .then(() => {
        alert('Icon copied to the clipboard');
      })
      .catch(err => {
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
  ]
</script>

<E.SEO title="Icons" />

<div class="row">
  {#each Object.entries(icons) as [icon, key]}
    <div class="col-sm-4 mb-3">
      <button class="btn btn-dark btn-copy w-100 hstack gap-3 justify-content-between" on:click={() => copy(icon)}>
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

  <div class="my-4">
    <h2>Project Icons</h2>
    <div class="hstack gap-2 flex-wrap">
      {#each projectIcons as icon}
         <img src="/icons/{icon}.svg" alt="{icon}" style="max-width: 45px; height: 40px;">
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .copy{
    opacity: 0;
    transition: .2s;
  }
  .btn-copy{
    &:hover{
      .copy{
        opacity: .75;
      }
    }
  }
</style>
