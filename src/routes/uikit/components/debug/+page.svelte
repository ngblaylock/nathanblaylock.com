<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Any classes to add to the component.',
    },
    {
      name: 'data',
      required: true,
      type: 'any',
      description: 'The data to display.',
    },
    {
      name: 'title',
      type: 'string',
      default: 'Debug',
      description: 'A custom title that goes before the data section.',
    },
  ];
</script>

<Seo title="Debug" hideHeader />

<h1>Debug</h1>

<p>
  This debug component will only show up in a development environment. It will
  display the data passed to it in a JSON format. It can also handle number,
  string, and boolean values. Under the hood, this uses Shiki for syntax
  highlighting.
</p>

<ComponentApi {props} />

<ComponentDoc title="Overview Usage" component="Debug" />

<ComponentDoc title="Updating Data" component="DebugUpdateData" />
