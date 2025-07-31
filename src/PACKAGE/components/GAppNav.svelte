<script lang="ts">
  let { children, appNav } = $props();

  let expanded = $state(false);
</script>

<div
  class="app-nav-container"
  class:expanded
>
  <nav class="app-nav">
    {@render appNav?.()}
    <div
      class="d-none d-xl-block mt-auto {expanded
        ? 'align-self-end'
        : 'align-self-center'}"
    >
      <GIconBtn
        icon={expanded ? 'chevronLeft' : 'chevronRight'}
        variant="light"
        title={expanded ? 'Collapse' : 'Expand'}
        onclick={() => (expanded = !expanded)}
      />
    </div>
  </nav>
  <div class="app-nav-content">
    {@render children?.()}
  </div>
</div>
