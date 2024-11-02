<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<div class="card text-bg-secondary mb-4 overflow-hidden">
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/uikit">UI Kit</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/uikit">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/uikit/components">Components</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/uikit/icons">Icons</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
{@render children?.()}