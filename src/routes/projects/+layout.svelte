<script lang="ts">
	import { onMount } from "svelte";

  onMount(() => {
    // Set all external anchor links to go to a new tab. Markdown doesn't support it.
    let anchors = document.querySelectorAll('.project a:not([target="_blank"])')
    anchors.forEach(a => {
      let href = a.getAttribute('href')
      if(href?.startsWith('http')){
        // change target to blank
        a.setAttribute('target', '_blank')
      }
    })
  })
</script>


<div class="project mb-5 pb-3">
  <div class="row">
    <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
      <slot />
    </div>
  </div>
</div>

<style lang="scss">
  :global(img){
    display: block;
    margin: 0 auto 16px auto;
    max-width: 100%;
  }
</style>