<script lang="ts">
  import { codeToHtml } from 'shiki';
  import { dev } from '$app/environment';
  import GIcon from './GIcon.svelte';
  let {
    class: classList = '',
    data,
    showInProd = false,
    title = 'Debug',
  } = $props();

  let show = $derived(showInProd || dev);

  let htmlData = $state(
    `<pre style="background-color: #1E1E1E; color: #d4d4d4;">${JSON.stringify(
      // fixes HTML strings to not render as HTML
      typeof data === 'string' ? data.replaceAll('<', '&lt;') : data,
      null,
      2,
    )}</pre>`,
  );

  $effect(() => {
    codeToHtml(JSON.stringify(data, null, 2), {
      lang: 'json',
      theme: 'dark-plus',
    }).then((val) => {
      htmlData = val;
    });
  });
</script>

{#if show}
  <div
    class="dev-note pb-0 {classList}"
    style="--bse-dev-note-title: '{title}'"
  >
    <div class="dev-note-icon">
      <GIcon
        name="json"
        size={1.5}
      />
    </div>
    <div class="m-n4 shiki-example">{@html htmlData}</div>
  </div>
{/if}

<style lang="scss">
  .shiki-example {
    :global(pre) {
      padding: $spacer;
    }
  }
</style>
