<script lang="ts">
  import * as P  from '$PACKAGE';
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

<P.SEO title="Components" />

<div class="container vstack gap-4">
  <!-- E.Btn -->
  <div>
    <h2>E.Btn</h2>
    <div class="card card-body">
      <div class="vstack gap-4">
        <div>
          <h3>Links and Button</h3>
          <P.Btn onclick={() => console.log('hi')}>Button</P.Btn>
          <P.Btn href="/">Link</P.Btn>
        </div>
        <div>
          <h3>Variants</h3>
          {#each variants as variant}
            <P.Btn {variant}>Button</P.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Active</h3>
          {#each variants as variant}
            <P.Btn class="active" {variant}>Button</P.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Disabled</h3>
          {#each variants as variant}
            <P.Btn disabled {variant}>Button</P.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Outline</h3>
          {#each variants as variant}
            <P.Btn outline {variant}>Button</P.Btn>&nbsp;
          {/each}
        </div>
        <div>
          <h3>Inner Icon Buttons</h3>
          <P.Btn variant="primary" iconLeft="arrowLeft">Button</P.Btn>
          <P.Btn variant="primary" iconRight="arrowRight">Button</P.Btn>
          <P.Btn variant="primary" iconLeft="arrowLeft" iconRight="arrowRight">Button</P.Btn>
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
          <P.IconBtn title="Example Title" {variant} icon="home" />&nbsp;
        {/each}
      </div>

      <div>
        <h3>Active</h3>
        {#each variants as variant}
          <P.IconBtn title="Example Title" {variant} icon="home" class="active" />&nbsp;
        {/each}
      </div>

      <div>
        <h3>Disabled</h3>
        {#each variants as variant}
          <P.IconBtn title="Example Title" {variant} icon="home" disabled />&nbsp;
        {/each}
      </div>

      <div>
        <h3>Outline</h3>
        {#each variants as variant}
          <P.IconBtn title="Example Title" {variant} icon="home" outline />&nbsp;
        {/each}
      </div>
    </div>
  </div>

  <!-- E.Debug -->
  <div>
    <h2>E.Debug</h2>
    <P.Debug data={['one', 'two', 'three']} />
  </div>

  <!-- E.Icon -->
  <div>
    <h2>E.Icon</h2>
    <P.Icon name="home" />
  </div>

  <!-- E.SEO -->
  <div>
    <h2>E.SEO</h2>
  </div>
</div>
