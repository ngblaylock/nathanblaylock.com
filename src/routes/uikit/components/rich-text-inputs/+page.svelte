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
      description: 'The helper text that goes below the rich text input.',
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
      description: 'The label to display for the rich text input.',
    },
    {
      name: 'placeholder',
      type: 'string',
      default: '',
      description:
        'The placeholder text inside the Tiptap editor if no text is selected.',
    },
    {
      name: 'required',
      type: 'boolean',
      default: false,
      description:
        'Makes the rich text input required, and adds a red asterisk to the label.',
    },
    {
      name: 'value',
      bindable: true,
      type: 'string',
      default: '',
      description:
        'The HTML value of the rich text input that can be bound to the parent component. This expects HTML. If the string is not HTML it will default it to a paragraph.',
    },
  ];
</script>

<Seo
  title="Rich Text Inputs"
  hideHeader
/>

<h1>Rich Text Inputs</h1>

<p>
  Rich Text Inputs use <a
    href="https://tiptap.dev/docs"
    target="_blank">TipTap 3.x</a
  > under the hood. The output is always HTML and not JSON.
</p>

<ComponentApi {props} />
<ComponentDoc
  title="Overview Usage"
  component="RichTextInput"
/>
