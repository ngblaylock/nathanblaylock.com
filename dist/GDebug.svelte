<script lang="ts">import { codeToHtml } from 'shiki';
import { dev } from '$app/environment';
import GIcon from './GIcon.svelte';
let { class: classList = '', data, title = 'Debug' } = $props();
</script>

{#if dev}
  <div
    class="dev-note pb-0 {classList}"
    style="--bse-dev-note-title: '{title}'"
  >
    <div class="dev-note-icon">
      <GIcon name="json" size={1.5} />
    </div>
    {#await codeToHtml( JSON.stringify(data, null, 2), { lang: 'json', theme: 'material-theme' } )}
      <div class="m-n3 shiki-example bg-dark">
        <pre style="background-color: #263238; color: #EEFFFF;">{JSON.stringify(
            data,
            null,
            2
          )}</pre>
      </div>
    {:then value}
      <div class="m-n3 shiki-example">{@html value}</div>
    {/await}
  </div>
{/if}

<style>.shiki-example :global(pre) {
  padding: 1rem;
}</style>
