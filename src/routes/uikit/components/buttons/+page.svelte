<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'children',
      type: 'Snippet',
      required: true,
      description: 'The button text.',
    },
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Additional classes for the button.',
    },
    {
      name: 'href',
      type: 'string',
      default: '',
      description:
        'If provided, the button will be an anchor element with this href.',
    },
    {
      name: 'iconLeft',
      type: 'IconName',
      description:
        'The name of the icon to display on the left side of the button.',
    },
    {
      name: 'iconRight',
      type: 'IconName',
      description:
        'The name of the icon to display on the right side of the button.',
    },
    {
      name: 'outline',
      type: 'boolean',
      default: false,
      description: 'Makes the button an outlined style.',
    },
    {
      name: 'type',
      type: "'button' | 'submit' | 'reset'",
      default: 'button',
      description: 'Adds the type to the button element, if applicable.',
    },
    {
      name: 'variant',
      type: 'Variant',
      default: 'primary',
      description: 'The theme color of the button.',
    },
    {
      name: '...restProps',
      type: 'unknown',
      description:
        'Any other attributes or event handlers you want to pass to the button (not yet anchor).',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button',
    },
  ];
</script>

<Seo title="Buttons" hideHeader />

<h1>Buttons</h1>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="Btn" />
