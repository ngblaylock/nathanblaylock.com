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
