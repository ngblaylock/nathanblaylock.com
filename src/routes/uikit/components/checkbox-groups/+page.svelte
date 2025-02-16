<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Any classes to apply to the outer fieldset element.',
    },
    {
      name: 'group',
      bindable: true,
      type: 'unknown[]',
      default: [],
      description: 'The group where the selected values bind to.',
    },
    {
      name: 'id',
      type: 'string',
      default: '',
      description:
        "The base ID for each identifier for the group. Each item's ID will be appended by the item's index. If no ID is set, a UID will be generated.",
    },
    {
      name: 'items',
      required: true,
      type: `{
  hint?: string;
  label: string;
  value: unknown;
}[]`,
      default: '',
      description:
        "Each checkbox item's information. Hints are for helper text, the label fills in the label, and the value is what is bound to the group.",
    },
    {
      name: 'legend',
      type: 'string',
      default: '',
      description:
        'Sets the legend for the fieldset describing the checkbox group.',
    },
  ];
</script>

<Seo title="Checkbox Group" hideHeader />

<h1>Checkbox Group</h1>

<p>Checkbox Groups are different from checkboxes in that checkboxes bindable value is either <code>true</code> or <code>false</code>, and checkbox groups bind the items value, which could be anything. This always binds to an array of values.</p>

<ComponentApi {props} />
<ComponentDoc title="Overview Usage" component="CheckboxGroup" />
