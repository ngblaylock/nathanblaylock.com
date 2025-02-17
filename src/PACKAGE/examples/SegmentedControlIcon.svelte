<script lang="ts">
  import { type IconName } from 'nathanblaylock.com/icons';
  let items: { label: string; value: unknown; icon?: IconName }[] = $state([
    {
      label: 'Podium View',
      value: 'podium',
      icon: 'poll',
    },
    {
      label: 'Table View',
      value: 'table',
      icon: 'table',
    },
    {
      label: 'Graph View',
      value: 'graph',
      icon: 'chartLine',
    },
  ]);
  let group = $state(items[1].value);
</script>

<div class="vstack">
  <div>
    <GSegmentedControl {items} bind:group />
  </div>
  <GDebug data={group} showInProd />
</div>
