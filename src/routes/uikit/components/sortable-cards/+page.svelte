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

<Seo title="Sortable Cards" hideHeader />

<h1>Sortable Cards</h1>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="SortableCards" />
<ComponentDoc title="With Snippet" component="SortableCardsSnippets" />