<script lang="ts">
  import type { Variant } from 'nathanblaylock.com';
  const variants: Variant[] = [
    'primary',
    'secondary',
    'dark',
    'gray',
    'light',
    'base-1',
    'base-2',
    'base-3',
    'base-4',
    'base-i1',
    'base-i2',
    'base-i3',
    'base-i4',
  ];
</script>

<div class="vstack gap-4">
  <div>
    <h3>Variants</h3>
    <div class="hstack gap-1 flex-wrap">
      {#each variants as variant}
        <GBtn {variant}>Button</GBtn>
      {/each}
    </div>
  </div>
  <div>
    <h3>Active</h3>
    <div class="hstack gap-1 flex-wrap">
      {#each variants as variant}
        <GBtn
          class="active"
          {variant}>Button</GBtn
        >
      {/each}
    </div>
  </div>
  <div>
    <h3>Disabled</h3>
    <div class="hstack gap-1 flex-wrap">
      {#each variants as variant}
        <GBtn
          disabled
          {variant}>Button</GBtn
        >
      {/each}
    </div>
  </div>
  <div>
    <h3>Outline</h3>
    <div class="hstack gap-1 flex-wrap">
      {#each variants as variant}
        <GBtn
          outline
          {variant}>Button</GBtn
        >
      {/each}
    </div>
  </div>
  <div>
    <h3>Inner Icon Buttons</h3>
    <div class="hstack gap-1 flex-wrap">
      <GBtn
        variant="primary"
        iconLeft="arrowLeft">Button</GBtn
      >
      <GBtn
        variant="primary"
        iconRight="arrowRight">Button</GBtn
      >
      <GBtn
        variant="primary"
        iconLeft="arrowLeft"
        iconRight="arrowRight">Button</GBtn
      >
    </div>
  </div>
</div>
