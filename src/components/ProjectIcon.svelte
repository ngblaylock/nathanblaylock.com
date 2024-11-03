<script>
  interface Props {
    name: string;
    width?: string;
    height?: string;
  }

  let { name, width = '50px', height = '45px' }: Props = $props();

  let svgStyle = $derived(`
  max-width: ${width};
  max-height: ${height};
  `);
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
