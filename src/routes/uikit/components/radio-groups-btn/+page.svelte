<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';
  const props = [
    {
      name: 'class',
      type: 'string',
      default: '',
      description: 'Any classes to apply to the outer container element.',
    },
    {
      name: 'group',
      bindable: true,
      type: 'unknown',
      description: 'The group where the selected value binds to.',
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
  icon?: string;
  label: string;
  value: unknown;
}[]`,
      default: '',
      description:
        "Each radio button item's information. Icons are for adding the specified icon as the option, the label fills in the label, and the value is what is bound to the group. If any item has an icon omitted, all options will fallback to a text style.",
    },
  ];
</script>

<Seo title="Button Radio Groups" hideHeader />

<h1>Button Radio Groups</h1>

<p>
  Radio Buttons can be displayed as buttons if there is a need for a more
  stylized toggle. This component allows for both text and icon styles. If you
  want to use the icons style, each item passed in to the <code>items</code> prop
  must have an icon associated with it. If one icon is missing, it will render to
  the all text version. These cannot be mixed and matched.
</p>

<ComponentApi {props} />
<ComponentDoc title="Text Style" component="RadioGroupBtn" />
<ComponentDoc title="Icon Style" component="RadioGroupBtnIcon" />
