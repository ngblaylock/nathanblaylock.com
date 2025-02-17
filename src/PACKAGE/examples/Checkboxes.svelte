<script lang="ts">
  let checks = $state({
    check1: true,
    check2: true,
    check3: false,
    check4: false,
  });
</script>

<GCheckbox bind:checked={checks.check1} label="Checkbox 1" />
<GCheckbox
  bind:checked={checks.check2}
  id="foo"
  label="Checkbox 2"
  hint="This is a hint for this selection."
/>
<GCheckbox bind:checked={checks.check3} hideLabel label="Checkbox 3" />
<GCheckbox bind:checked={checks.check4} disabled label="Disabled Checkbox" />

<GDebug data={checks} showInProd />
