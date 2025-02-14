<script lang="ts">
  let data = $state(['Banana', 'Apple', 'Orange', 'Grapes']);
</script>

<div class="vstack">
  <GSortableCards bind:items={data} />
  <GDebug {data} />
</div>
