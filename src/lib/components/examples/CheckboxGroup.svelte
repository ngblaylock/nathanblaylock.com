<script lang="ts">
  let items = $state([
    {
      label: 'Checkbox 1',
      value: [22, 33, 44],
      hint: 'This is a hint.',
    },
    {
      label: 'Checkbox 2',
      value: [1, 2, 3],
    },
    {
      label: 'Checkbox 3',
      value: [100, 102, 303],
    },
  ]);
  let group = $state([]);
</script>

<GCheckboxGroup {items} bind:group={group} legend="Checkbox Group" />

<GDebug data={group} />