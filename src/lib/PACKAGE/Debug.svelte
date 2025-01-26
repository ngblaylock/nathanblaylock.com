<script lang="ts">
  import { codeToHtml } from 'shiki';
  import { dev } from '$app/environment';
  let { data, title = 'Debug' } = $props();
</script>

{#if dev}
  <div class="dev-note pb-0" style="--bse-dev-note-title: '{title}'">
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

<style lang="scss">
  .shiki-example {
    :global(pre) {
      padding: $spacer;
    }
  }
</style>
