<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';

  const props = [
    {
      name: 'size',
      default: 48,
      type: 'string | number',
      description: "The size of the Avatar. If the value is a number, it will be measured in pixels."
    },
    {
      name: 'src',
      type: 'string',
      description: "The URL of the image. The fallback is used while the image loads."
    },
    {
      name: '...restProps',
      type: 'unknown',
      description:
        'Any other attributes to pass to the div containing the avatars.',
    },
  ];
</script>

<Seo
  title="Avatars"
  hideHeader
/>

<h1>Avatars</h1>

<ComponentApi {props} />

<ComponentDoc
  title="Overview Usage"
  component="Avatars"
/>