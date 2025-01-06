<script lang="ts">
  import * as E from '$components/Elemental';
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

<E.SEO title="Components" />

<div class="container vstack gap-4">
  <!-- E.Btn -->
  <div>
    <h2>E.Btn</h2>
    <div class="card card-body">
      <div class="vstack gap-4">
        <div>
          <h3>Links and Button</h3>
          <E.Btn onclick={() => console.log('hi')}>Button</E.Btn>
          <E.Btn href="/">Link</E.Btn>
        </div>
        <div>
          <h3>Variants</h3>
          {#each variants as variant}
            <E.Btn {variant}>Button</E.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Active</h3>
          {#each variants as variant}
            <E.Btn class="active" {variant}>Button</E.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Disabled</h3>
          {#each variants as variant}
            <E.Btn disabled {variant}>Button</E.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Outline</h3>
          {#each variants as variant}
            <E.Btn outline {variant}>Button</E.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Inner Icon Buttons</h3>
          <E.Btn variant="primary" iconLeft="arrowLeft">Button</E.Btn>
          <E.Btn variant="primary" iconRight="arrowRight">Button</E.Btn>
          <E.Btn variant="primary" iconLeft="arrowLeft" iconRight="arrowRight">Button</E.Btn>
        </div>
      </div>
    </div>
  </div>

  <!-- E.IconBtn -->
  <div>
    <h2>E.IconBtn</h2>
    <div class="card card-body gap-4">
      <div>
        <h3>Variants</h3>
        {#each variants as variant}
          <E.IconBtn title="Example Title" {variant} icon="home" />&nbsp;
        {/each}
      </div>

      <div>
        <h3>Active</h3>
        {#each variants as variant}
          <E.IconBtn title="Example Title" {variant} icon="home" class="active" />&nbsp;
        {/each}
      </div>

      <div>
        <h3>Disabled</h3>
        {#each variants as variant}
          <E.IconBtn title="Example Title" {variant} icon="home" disabled />&nbsp;
        {/each}
      </div>

      <div>
        <h3>Outline</h3>
        {#each variants as variant}
          <E.IconBtn title="Example Title" {variant} icon="home" outline />&nbsp;
        {/each}
      </div>
    </div>
  </div>

  <!-- E.Debug -->
  <div>
    <h2>E.Debug</h2>
    <E.Debug data={['one', 'two', 'three']} />
  </div>

  <!-- E.Icon -->
  <div>
    <h2>E.Icon</h2>
    <E.Icon name="home" />
  </div>

  <!-- E.SEO -->
  <div>
    <h2>E.SEO</h2>
  </div>
</div>
