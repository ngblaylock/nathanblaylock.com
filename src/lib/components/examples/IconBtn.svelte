<script lang="ts">
  import {IconBtn} from '$PACKAGE';
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
    <h3>Variants</h3>
    <div class="hstack">
      {#each variants as variant}
        <IconBtn title="Example Title" {variant} icon="home" />
      {/each}
    </div>
  </div>
  
  <div>
    <h3>Active</h3>
    <div class="hstack">
      {#each variants as variant}
        <IconBtn title="Example Title" {variant} icon="home" class="active" />
      {/each}
    </div>
  </div>
  
  <div>
    <h3>Disabled</h3>
    <div class="hstack">
      {#each variants as variant}
        <IconBtn title="Example Title" {variant} icon="home" disabled />
      {/each}
    </div>
  </div>
  
  <div>
    <h3>Outline</h3>
    <div class="hstack">
      {#each variants as variant}
        <IconBtn title="Example Title" {variant} icon="home" outline />
      {/each}
    </div>
  </div>
</div>
