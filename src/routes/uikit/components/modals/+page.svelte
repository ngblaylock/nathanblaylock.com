<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'children',
      type: 'Snippet',
      description: 'Content to be displayed inside the modal body.',
    },
    {
      name: 'footer',
      type: 'Snippet',
      description: 'Content to be displayed inside the modal footer.',
    },
    {
      name: 'id',
      type: 'string',
      default: '(unique ID)',
      description: 'Sets the id of the modal element.',
    },
    {
      name: 'onShow',
      type: '() => void',
      default: '() => {}',
      description: 'Callback fired when the modal is starting to show.',
    },
    {
      name: 'onShown',
      type: '() => void',
      default: '() => {}',
      description: 'Callback fired when the modal is fully shown.',
    },
    {
      name: 'onHide',
      type: '() => void',
      default: '() => {}',
      description: 'Callback fired when the modal is starting to hide.',
    },
    {
      name: 'onHidden',
      type: '() => void',
      default: '() => {}',
      description: 'Callback fired when the modal is fully hidden.',
    },
    {
      name: 'show',
      type: 'boolean',
      default: 'false',
      description: 'Controls the visibility of the modal.',
    },
    {
      name: 'size',
      type: "'sm' | 'lg' | 'xl'",
      description: 'Changes the size of the modal.',
    },
    {
      name: 'title',
      type: 'string',
      description: 'Sets the title of the modal.',
    },
  ];
</script>

<Seo
  title="Modals"
  hideHeader
/>

<h1>Modals</h1>
<p>Modals are primarily used for editing form elements or to show secondary content.</p>

<ComponentApi {props} />
<ComponentDoc
  title="Overview Usage"
  component="Modal"
/>
