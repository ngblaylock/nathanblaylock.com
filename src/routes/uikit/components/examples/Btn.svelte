<script lang="ts">
  import { Btn } from '$PACKAGE';
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
    <Btn onclick={() => console.info('hi')}>Button</Btn>
    <Btn href="/">Link</Btn>
  </div>
  <div>
    <h3>Variants</h3>
    {#each variants as variant}
      <Btn {variant}>Button</Btn>
    {/each}
  </div>
  <div>
    <h3>Active</h3>
    {#each variants as variant}
      <Btn class="active" {variant}>Button</Btn>
    {/each}
  </div>
  <div>
    <h3>Disabled</h3>
    {#each variants as variant}
      <Btn disabled {variant}>Button</Btn>
    {/each}
  </div>
  <div>
    <h3>Outline</h3>
    {#each variants as variant}
      <Btn outline {variant}>Button</Btn>
    {/each}
  </div>
  <div>
    <h3>Inner Icon Buttons</h3>
    <Btn variant="primary" iconLeft="arrowLeft">Button</Btn>
    <Btn variant="primary" iconRight="arrowRight">Button</Btn>
    <Btn variant="primary" iconLeft="arrowLeft" iconRight="arrowRight">Button</Btn>
  </div>
</div>
