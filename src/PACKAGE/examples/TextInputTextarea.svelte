<script lang="ts">
  let values = $state({
    input: '',
    textarea: '',
    textareaRows: '',
  });
</script>

<div class="vstack">
  <GTextInput
    label="Input"
    bind:value={values.input}
  />
  <GTextInput
    label="Textarea"
    multiline
    bind:value={values.textarea}
  />
  <GTextInput
    label="Textarea With Rows"
    multiline
    rows="5"
    hint="This one changes how tall the input is with the native `rows` attribute."
    bind:value={values.textareaRows}
  />
  <GDebug data={values} />
</div>
