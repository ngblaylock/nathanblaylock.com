<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/SEO.svelte';
  const props = [
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Additional classes to add to the button.',
    },
    {
      name: 'href',
      type: 'string',
      default: '',
      description:
        'If provided, the button will be rendered as an anchor element with the given href.',
    },
    {
      name: 'icon',
      required: true,
      type: 'IconName',
      description: 'The name of the icon to display.',
    },
    {
      name: 'outline',
      type: 'boolean',
      default: false,
      description:
        'If true, the button will be rendered with an outline style.',
    },
    {
      name: 'title',
      required: true,
      type: 'string',
      description: 'The title attribute of the button.',
    },
    {
      name: 'variant',
      type: 'Variant',
      default: 'primary',
      description: 'The color variant of the button.',
    },
  ];
</script>

<Seo title="Icon Buttons" hideHeader />

<h1>Icon Buttons</h1>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="IconBtn" />
