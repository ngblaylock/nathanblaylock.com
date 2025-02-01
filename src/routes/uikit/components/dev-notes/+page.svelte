<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'children',
      required: true,
      type: 'Snippet',
      description: 'The content within the development note.',
    },
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Any classes to add to the component.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'Debug',
      description: 'A custom title that goes before the data section.',
    },
  ];
</script>

<Seo title="Dev Notes" hideHeader />

<h1>Dev Notes</h1>

<p>
  The DevNote component is used to display notes in the development environment.
  These do not display in a production build if accidentally left in. This is
  useful for developers to leave notes for themselves or other developers.
</p>

<ComponentApi {props} />

<ComponentDoc title="Overview Usage" component="DevNote" />
