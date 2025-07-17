<script lang="ts">
  import Seo from '$components/Seo.svelte';
</script>

<Seo title="Loaders" />

<h1>Loaders</h1>

<p>Use <code>span.loader</code> to create this loader. Sizes might come later...</p>

<div class="text-bg-dark">
  <span class="loader"></span>
  Not pretty, but shows behavior.
</div>

<div class="text-center py-5">
  <span class="loader"></span>
  <div class="text-gray">Loading Content</div>
</div>

<div class="text-center text-secondary py-5">
  <span class="loader"></span>
  Loading Content
</div>

<div class="hstack py-5">
  <span class="loader"></span>
  Loading Content
</div>

<div class="py-5">
  <button
    class="btn btn-primary d-flex align-items-center justify-content-center"
    disabled
  >
    <div class="position-absolute"><span class="loader"></span></div>
    <span style="opacity: .15;">Button That has longer text</span>
  </button>
</div>
