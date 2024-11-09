<script lang="ts">
  import * as E from '$lib/components/Elemental';
  import Logo from '$components/Logo.svelte';
  import icons, {type IconName} from '$lib/icons';
  import { logos } from '$lib/assets/logos';

  function copy(iconName: string, componentName: 'E.Icon' | 'Logo') {
    navigator.clipboard
      .writeText(`<${componentName} name="${iconName}" />`)
      .then(() => {
        alert('Icon copied to the clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy text to clipboard:', err);
      });
  }
</script>

<E.SEO title="Icons" />

<div class="mb-4">
  <h2 class="mt-4">E.Icon</h2>
  <div class="row row-gap-4">
    {#each Object.entries(icons) as [icon, key]}
      <div class="col-sm-4">
        <button
          class="btn btn-base-4 btn-copy w-100 hstack gap-3 justify-content-between"
          onclick={() => copy(icon, 'E.Icon')}
        >
          <div>
            <E.Icon name={icon as IconName} />
            <span>{icon}</span>
          </div>
          <div class="copy">
            <E.Icon name="copy" />
          </div>
        </button>
      </div>
    {/each}
  </div>
  <h2 class="mt-4">Logos</h2>
  <div class="row row-gap-4">
    {#each logos as logo}
      <div class="col-sm-6">
        <button
          class="btn btn-base-4 btn-copy w-100 hstack gap-3 justify-content-between"
          onclick={() => copy(logo, 'Logo')}
        >
          <div class="hstack gap-3">
            <Logo name={logo} />
            {logo}
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
