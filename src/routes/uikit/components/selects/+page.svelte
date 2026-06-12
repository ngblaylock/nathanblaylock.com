<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
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
      description: 'The helper text that goes below the select.',
    },
    {
      name: 'id',
      type: 'string',
      default: '',
      description:
        'The ID to use for the select and label. If none are provided a unique one will be created.',
    },
    {
      name: 'label',
      type: 'string',
      required: true,
      description: 'The label to display for the select.',
    },
    {
      name: 'options',
      type: '(Option | string | number | undefined)[]',
      default: [],
      description: 'Options for the select.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: false,
      description:
        'Makes the select required, and adds a red asterisk to the label.',
    },
    {
      name: 'value',
      bindable: true,
      type: 'any',
      default: '',
      description:
        'The value of the select that can be bound to the parent component.',
    },
    {
      name: '...restProps',
      type: 'unknown',
      description: 'Any other props will be passed to the select element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select',
    },
  ];
</script>

<Seo title="Selects" hideHeader />

<h1>Selects</h1>

<p>Selects (often referred to as dropdown menus) are input components used to present a compact list of mutually exclusive options. When a user clicks or taps the component, it expands to reveal a scrollable menu from which a single choice can be made. This design system uses native selects under the hood.</p>

<ComponentApi {props} />
<ComponentDoc title="Basic Select" component="Select" />
