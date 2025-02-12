<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'name',
      type: 'string',
      default: '',
      description: 'Prop description.',
    },
  ];
</script>

<Seo title="Checkbox Group" hideHeader />

<h1>Checkbox Group</h1>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="CheckboxGroup" />