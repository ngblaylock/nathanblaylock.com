<script lang="ts">
  const variants: Variant[] = [
    'primary',
    'secondary',
    'dark',
    'gray',
    'light',
    'base-1',
    'base-i1',
  ];
</script>

<div class="vstack gap-4">
  <div>
    <h3>Links and Button</h3>
    <GBtn onclick={() => console.info('hi')}>Button</GBtn>
    <GBtn href="/">Link</GBtn>
  </div>
  <div>
    <h3>Variants</h3>
    {#each variants as variant}
      <GBtn {variant}>Button</GBtn>
    {/each}
  </div>
  <div>
    <h3>Active</h3>
    {#each variants as variant}
      <GBtn class="active" {variant}>Button</GBtn>
    {/each}
  </div>
  <div>
    <h3>Disabled</h3>
    {#each variants as variant}
      <GBtn disabled {variant}>Button</GBtn>
    {/each}
  </div>
  <div>
    <h3>Outline</h3>
    {#each variants as variant}
      <GBtn outline {variant}>Button</GBtn>
    {/each}
  </div>
  <div>
    <h3>Inner Icon Buttons</h3>
    <GBtn variant="primary" iconLeft="arrowLeft">Button</GBtn>
    <GBtn variant="primary" iconRight="arrowRight">Button</GBtn>
    <GBtn variant="primary" iconLeft="arrowLeft" iconRight="arrowRight">Button</GBtn>
  </div>
</div>
