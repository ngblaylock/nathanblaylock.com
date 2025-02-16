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
      description: 'If true will visually hide the label. This is useful for accessibility when the label is not needed.',
    },
    {
      name: 'hint',
      type: 'string',
      default: '',
      description: 'The helper text that goes below the input.',
    },
    {
      name: 'id',
      type: 'string',
      default: '',
      description: 'The ID to use for the input and label. If none are provided a unique one will be created.',
    },
    {
      name: 'label',
      type: 'string',
      required: true,
      description: 'The label to display for the input.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: false,
      description: 'Makes the input required, and adds a red asterisk to the label.',
    },
    {
      name: 'value',
      bindable: true,
      type: 'string | number | null',
      default: '',
      description: 'The value of the input that can be bound to the parent component.',
    },
    {
      name: '...restProps',
      type: 'unknown',
      description: 'Any other props will be passed to the input element.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
    }
  ];
</script>

<Seo title="Text Inputs" hideHeader />

<h1>Text Inputs</h1>

<p>Text Inputs are the most generic uses of a form input.</p>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="TextInputs" />
<ComponentDoc title="Binding Values" component="TextInputValue" />