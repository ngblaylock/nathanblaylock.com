<script lang="ts">
  let data = $state(['Banana', 'Apple', 'Orange', 'Grapes']);
</script>

<GSortableCards bind:items={data} />

<GDebug {data} />
