<script lang="ts">
  export let href:string = '';
  export let theme = 'primary';
</script>

{#if href}
   <a class="btn btn-{theme} {$$restProps.class || ''}" href="{href}"><slot /></a>
{:else}
  <button class="btn btn-{theme} {$$restProps.class || ''}" on:click><slot /></button>
{/if}