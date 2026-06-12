<script lang="ts">
  let options = $state([
    'One',
    2,
    { text: 'Three', value: 3 },
    { text: 'Four', value: { id: 4, name: 'Four' } },
    { text: 'Five', value: { id: 5, name: 'Five' } },
  ]);
  let d = $state('');
</script>

<form>
  <div class="vstack">
    <GSelect
      label="Select an option"
      required
      bind:value={d}
      {options}
    />
    <div>
      <GBtn type="submit">Submit</GBtn>
    </div>
    <GDebug
      data={d}
      class="mb-0"
    />
  </div>
</form>
