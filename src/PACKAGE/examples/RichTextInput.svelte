<script lang="ts">
  let html = $state('<h2>Tiptap!</h2><p>Starting HTML</p>')
</script>


<div class="vstack">
  <GRichTextInput label="Basic Example" required bind:value={html} />
  <GDebug data={html} />
</div>

<div class="mt-8">
  <button onclick={() => html = '<h1><b>oops</b></h1>'}>oops</button>
  <button onclick={() => html = '<p>forgoe</p>'}>forgoe</button>
  <button onclick={() => html = '<h2>asdf</h2>'}>asdf</button>
</div>