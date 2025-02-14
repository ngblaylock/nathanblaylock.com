<script lang="ts">
  let items = $state([
    {
      label: 'Toyota',
      value: { id: 1, models: ['Camry', 'Sienna', 'Rav4'] },
      hint: 'These are trustworthy cars.',
    },
    {
      label: 'Honda',
      value: { id: 2, models: ['Accord', 'Odyssey'] },
    },
    {
      label: 'Kia',
      value: { id: 3, models: ['EV6', 'Soul', 'Carnival', 'EV9'] },
    },
  ]);
  let group = $state(items[1].value);
</script>

<div class="vstack">
  <GRadioGroup {items} bind:group legend="Car Brands" />
  <GDebug data={group} />
</div>
