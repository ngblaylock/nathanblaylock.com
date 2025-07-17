<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';

  import icons, { type IconName } from 'nathanblaylock.com/icons';

  function copy(iconName: string) {
    navigator.clipboard
      .writeText(iconName)
      .then(() => {
        alert(`"${iconName}" copied to the clipboard`);
      })
      .catch((err) => {
        console.error('Failed to copy text to clipboard:', err);
      });
  }

  const props = [
    {
      name: 'name',
      required: true,
      type: 'IconName',
      description: 'Name of the icon to display.',
    },
    {
      name: 'size',
      default: 1,
      type: 'number',
      description: 'Size of the icon measured in rem.',
    },
  ];

  let searchIcons = $state('');
</script>

<Seo
  title="Icons"
  hideHeader
/>

<h1>Icons</h1>

<ComponentApi {props} />
<ComponentDoc
  title="Overview Usage"
  component="Icon"
/>

<div class="mb-4">
  <div class="hstack">
    <h2 class="mt-4 me-auto">Package Icons</h2>
    <GTextInput
      hideLabel
      label="Search Icons"
      placeholder="Search Icons"
      bind:value={searchIcons}
      type="search"
    />
  </div>
  <div class="row row-gap-4">
    {#each Object.entries(icons) as [icon, key]}
      {#if icon.toLowerCase().includes(searchIcons.toLowerCase())}
        <div class="col-lg-6 col-xl-4">
          <GBtn
            variant="base-4"
            class="btn-copy w-100 hstack"
            onclick={() => copy(icon)}
            iconLeft={icon as IconName}
          >
            {icon}
            <div class="copy ms-auto">
              <GIcon name="copy" />
            </div>
          </GBtn>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .copy {
    opacity: 0;
    transition: 0.2s;
  }
  :global(.btn-copy) {
    &:hover {
      .copy {
        opacity: 0.75;
      }
    }
  }
</style>
