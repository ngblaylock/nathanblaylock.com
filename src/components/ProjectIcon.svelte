<script lang="ts">
  export let name: string;
  export let width: string = '50px';
  export let height: string = '45px';

  $: svgStyle = `
  max-width: ${width};
  max-height: ${height};
  `;
</script>

{#await import(`../lib/assets/${name}.svg?raw`) then value}
  <div>
    <span class="visually-hidden">{name}</span>
    {@html value.default.replace('<svg ', `<svg style="${svgStyle}"`)}
  </div>
{/await}

<style lang="scss">
  :global([data-bs-theme='dark'] svg .white-on-dark) {
    fill: white !important;
  }
</style>
