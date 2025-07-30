<script lang="ts">
  let {children, appNav} = $props();
</script>

<div class="app-nav-container">
  <nav class="app-nav">
    {@render appNav?.()}
  </nav>
  <div class="app-nav-content">
    {@render children?.()}
  </div>
</div>
