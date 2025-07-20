<script lang="ts">
  let html = $state(/* html */ `
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>
      Paragraph - Lorem ipsum <s>strike</s> sit amet consectetur <mark>mark</mark>
      elit. Quos, eum <b>bold</b> nihil <u>underline</u> ex praesentium
      <i>italic</i> quas illum dolorem alias, nobis <code>code</code> neque omnis
      <a
        href="https://nathanblaylock.com"
        target="_blank">link</a
      > quaerat error, repellendus voluptas cupiditate.
    </p>
    <ul>
      <li><p>List 1</p></li>
      <li><p>List 2</p></li>
      <li><p>List 3</p></li>
    </ul>
    <ol>
      <li><p>List 1</p></li>
      <li><p>List 2</p></li>
      <li><p>List 3</p></li>
    </ol>
    <blockquote>
      <h2>Blockquote</h2>
      <p>Blockquote Paragraph</p>
    </blockquote>
  `);
</script>

<GDebug data={html} showInProd />

<form
  onsubmit={(e) => {
    e.preventDefault();
    alert('Valid!');
  }}
>
  <div class="vstack">
    <GRichTextInput
      label="Basic Example"
      required
      bind:value={html}
      placeholder="Add something..."
      hint="This supports markdown shortcuts!"
    />
    <div>
      <GBtn type="submit">Submit</GBtn>
    </div>
  </div>
</form>

<div class="mt-6">
  <h2>Dynamically Change Values</h2>
  <GBtn
    variant="base-2"
    onclick={() => (html = '<h2>Lorem</h2><p>ipsum <b>dolor</b>...</p>')}
  >
    Lorem
  </GBtn>
  <GBtn
    variant="base-2"
    onclick={() => (html = '')}
    >Clear Content
  </GBtn>
</div>
