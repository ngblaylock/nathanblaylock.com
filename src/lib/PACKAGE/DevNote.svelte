<script lang="ts">
  import { dev } from '$app/environment';
  import { Icon } from '$PACKAGE';
  let { children, class: classList = '', title = 'Dev Note' } = $props();
</script>

{#if dev}
  <div class="dev-note {classList}" style="--bse-dev-note-title: '{title}'">
    <div class="dev-note-icon">
      <Icon name="tools" size={1.5} />
    </div>
    {@render children()}
  </div>
{/if}
