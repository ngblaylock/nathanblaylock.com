<script lang="ts">
  let d = $state({ id: 4, name: 'Four' });
  let options = $state([
    'One',
    2,
    { text: 'Three', value: 3 },
    { text: 'Four', value: { id: 4, name: 'Four' } },
    { text: 'Five', value: { id: 5, name: 'Five' } },
  ]);
</script>

<form>
  <div class="vstack">
    <GSelect
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
    <GDevNote
      title="Known Issues"
      class="mb-0"
    >
      <ul>
        <li>Need dropdown icon</li>
        <li>Need closeable option</li>
        <li>Need searchability</li>
        <li>
          When submitting this and it is null and required, the error shows up
          in the right place, but the button is not focusable.
        </li>
        <li>Dropdown border color can't be translucent</li>
        <li>Dropdown active color shouldn't be red</li>
      </ul>
    </GDevNote>
  </div>
</form>
