<script lang="ts">
  let myValues = $state({
    value1: 'Hello',
    value2: 'World',
    value3: 1,
  });
</script>

<div class="vstack">
  <GTextInput label="Value 1" bind:value={myValues.value1} />
  <GTextInput label="Value 2" bind:value={myValues.value2} />
  <GTextInput label="Value 3" type="number" bind:value={myValues.value3} />
  <GDebug data={myValues} />
</div>
