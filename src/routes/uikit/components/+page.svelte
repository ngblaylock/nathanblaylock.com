<script lang="ts">
  import * as P from '$PACKAGE';
  import SEO from '$components/SEO.svelte';
  import ComponentDoc from './ComponentDoc.svelte';
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

<SEO title="Components" />

<div class="container vstack gap-4">
  <ComponentDoc title="Btn" component="Btn" />

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
