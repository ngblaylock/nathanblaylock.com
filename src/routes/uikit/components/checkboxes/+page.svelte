<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'checked',
      bindable: true,
      type: 'boolean',
      default: '',
      description: 'Determines if the checkbox is checked.',
    },
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Classes to add to the outer component wrapper.',
    },
    {
      name: 'hideLabel',
      type: 'boolean',
      default: false,
      description:
        'If true will visually hide the label. This is useful for accessibility when the label is not needed.',
    },
    {
      name: 'hint',
      type: 'string',
      default: '',
      description: 'The helper text that goes below the checkbox.',
    },
    {
      name: 'id',
      type: 'string',
      default: '',
      description:
        'The ID to use for the input and label. If none are provided a unique one will be created.',
    },
    {
      name: 'label',
      type: 'string',
      required: true,
      description: 'The label to display for the checkbox.',
    },
    {
      name: '...restProps',
      type: 'unknown',
      description: 'Any other props will be passed to the input element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
    },
  ];
</script>

<Seo title="Checkboxes" hideHeader />

<h1>Checkboxes</h1>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="Checkboxes" />
