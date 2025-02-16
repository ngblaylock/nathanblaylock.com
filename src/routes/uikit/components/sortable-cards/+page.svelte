<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'children',
      type: 'Snippet<[item: any, index: number]>',
      description: 'Allows for customization inside the card content.',
    },
    {
      name: 'items',
      required: true,
      bindable: true,
      type: 'unknown[]',
      description: 'An array of items to be sorted.',
    },
  ];
</script>

<Seo title="Sortable Cards" hideHeader />

<h1>Sortable Cards</h1>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="SortableCards" />
<ComponentDoc title="With Snippet" component="SortableCardsSnippets" />