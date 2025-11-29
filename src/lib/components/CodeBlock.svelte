<script lang="ts">
  import { codeToHtml } from 'shiki';
  import { onMount } from 'svelte';
  let codeHtml = $state('');
  let {code, lang, class: classList}: {code: string; lang: string; class?: string} = $props();

  onMount(async () => {
    codeHtml = await codeToHtml(
      code,
      {
        lang,
        theme: 'material-theme',
      },
    );
  });
</script>

<div class="shiki-example {classList}">{@html codeHtml}</div>

<style lang="scss">
  .shiki-example {
    margin-bottom: 16px;
    :global(pre) {
      padding: $spacer;
      border-radius: $border-radius;
      border: 1px solid $dark;
      margin: 0;
    }
  }
</style>
