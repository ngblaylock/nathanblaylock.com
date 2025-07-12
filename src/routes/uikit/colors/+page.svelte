<script lang="ts">
  import { browser } from '$app/environment';
  import Seo from '$components/Seo.svelte';
  import chroma from 'chroma-js';
  let theme = ['primary', 'secondary', 'light', 'dark', 'gray'];
  let colors = ['red', 'blue', 'gray'];

  const getHex = (color: string) => {
    if (browser) {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--bs-${color}`,
      );
    } else return '';
  };

  const getContrastColor = (color: string) => {
    if (browser) {
      const dark = getHex('dark');
      const light = getHex('light');
      const inputColor = getHex(color);
      const darkContrast = chroma.contrast(dark, inputColor);
      const lightContrast = chroma.contrast(light, inputColor);
      return darkContrast > lightContrast
        ? { color: 'dark', contrast: darkContrast }
        : { color: 'light', contrast: lightContrast };
    }
    return { color: 'dark', contrast: 0 };
  };
</script>

<Seo title="Colors" />

<h1>Colors</h1>
<div class="row">
  {#each theme as color}
    <div class="col">
      <div class="card card-body text-bg-{color}">
        <p class="lead">${color}</p>
        <div>{getHex(color)}</div>
      </div>
    </div>
  {/each}
</div>

<div class="row mt-5">
  {#each colors as color}
    <div class="col">
      {#each Array(9) as _, i}
        {@const fullColor = `${color}-${i + 1}00`}
        <div
          class="p-2 d-flex justify-content-between text-{getContrastColor(
            fullColor,
          ).color}"
          style="background: var(--bs-{fullColor});"
        >
          <div>
            <span>{fullColor}</span>
            {#if getContrastColor(fullColor).contrast < 4.5}
              <!-- content here -->
              <span class="badge text-text-bg-base-3 ms-2"
                >Poor Contrast - {getContrastColor(fullColor).contrast.toFixed(
                  1,
                )}</span
              >
            {/if}
          </div>
          <span>{getHex(fullColor)}</span>
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="row mt-5">
  <div class="col-md-6">
    <div class="p-2 text-bg-base-1">base-1</div>
    <div class="p-2 text-bg-base-2">base-2</div>
    <div class="p-2 text-bg-base-3">base-3</div>
    <div class="p-2 text-bg-base-4">base-4</div>
  </div>
  <div class="col-md-6">
    <div class="p-2 text-bg-base-i1">base-i1</div>
    <div class="p-2 text-bg-base-i2">base-i2</div>
    <div class="p-2 text-bg-base-i3">base-i3</div>
    <div class="p-2 text-bg-base-i4">base-i4</div>
  </div>
</div>
