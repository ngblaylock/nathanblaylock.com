<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'children',
      type: 'Snippet',
      required: true,
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
      default: 'unique ID',
      description: 'Sets the id of the modal element.',
    },
    {
      name: 'onShow',
      type: '() => void',
      description: 'Callback fired when the modal is starting to show.',
    },
    {
      name: 'onShown',
      type: '() => void',
      description: 'Callback fired when the modal is fully shown.',
    },
    {
      name: 'onHide',
      type: '() => void',
      description: 'Callback fired when the modal is starting to hide.',
    },
    {
      name: 'onHidden',
      type: '() => void',
      description: 'Callback fired when the modal is fully hidden.',
    },
    {
      name: 'show',
      type: 'boolean',
      default: false,
      description: 'Controls the visibility of the modal.',
    },
    {
      name: 'size',
      type: "'sm' | 'lg' | 'xl'",
      description: 'Changes the size of the modal.',
    },
    {
      name: 'title',
      required: true,
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
<p>
  Modals are primarily used for editing form elements or to show secondary
  content.
</p>

<ComponentApi {props} />
<ComponentDoc
  title="Basic Usage"
  component="Modal"
/>
<ComponentDoc
  title="Modal Events"
  component="ModalEvents"
>
  You can listen to modal events by passing in callback functions that align
  with <a
    href="https://getbootstrap.com/docs/5.3/components/modal/#events"
    target="_blank">Bootstrap events</a
  >.
</ComponentDoc>
<ComponentDoc
  title="Modal Sizes"
  component="ModalSizes"
>
  Show different size modals by using the <code>size</code> prop.
</ComponentDoc>
