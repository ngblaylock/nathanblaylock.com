<script lang="ts">import { codeToHtml } from 'shiki';
import { dev } from '$app/environment';
import GIcon from './GIcon.svelte';
let { class: classList = '', data, showInProd = false, title = 'Debug', } = $props();
let show = $derived(showInProd || dev);
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
    {#await codeToHtml( JSON.stringify(data, null, 2), { lang: 'json', theme: 'dark-plus' }, )}
      <div class="m-n4 shiki-example bg-dark">
        <pre style="background-color: #1E1E1E; color: #d4d4d4;">{JSON.stringify(
            data,
            null,
            2,
          )}</pre>
      </div>
    {:then value}
      <div class="m-n4 shiki-example">{@html value}</div>
    {/await}
  </div>
{/if}

<style>.shiki-example :global(pre) {
  padding: 1rem;
}</style>
