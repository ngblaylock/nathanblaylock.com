<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';

  import icons, { type IconName } from 'nathanblaylock.com/icons';

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
          <div class="card hstack px-4 py-2">
            <GIcon
              name={icon as IconName}
              size={2}
            />
            {icon}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>
