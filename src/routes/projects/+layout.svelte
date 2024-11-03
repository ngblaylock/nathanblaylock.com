<script>
  import * as E from '$components/Elemental';

  /** @type {{children: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<div class="project mb-5 pb-3">
  <div class="row" data-aos="fade-up">
    <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
      {@render children?.()}
      <!-- {#if getPrevProject().route && getNextProject().route}
        <div class="d-flex justify-content-between mt-5">
          <a
            href="/projects/{getPrevProject().route}"
            class="btn btn-outline-contrast btn-inner-icon text-end"
          >
            <E.Icon name="arrowLeft" />
            {getPrevProject().alt}</a
          >
          <a href="/projects/{getNextProject().route}" class="btn btn-outline-contrast btn-inner-icon text-end">
            {getNextProject().alt}
            <E.Icon name="arrowRight" /></a
          >
        </div>
      {/if} -->
    </div>
  </div>
</div>

<style lang="scss">
  :global(img) {
    display: block;
    margin: 0 auto 16px auto;
    max-width: 100%;
  }
</style>
