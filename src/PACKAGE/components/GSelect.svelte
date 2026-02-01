<script lang="ts">
  import isEqual from 'lodash/isequal';
  interface Option {
    text: string | number;
    value: unknown;
  }
  let {
    options = [],
    value = $bindable(),
  }: { options: (string | number | Option)[]; value: unknown } = $props();

  let formattedOptions = $derived(
    options.map((option) => {
      if (typeof option === 'string' || typeof option === 'number') {
        return { text: option, value: option };
      } else {
        return option;
      }
    }),
  );
  let foundOption = $derived(
    formattedOptions.find((option) => {
      return isEqual($state.snapshot(option.value), value);
    }),
  );
</script>

<div class="dropdown">
  <button
    class="form-control text-start"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {#if foundOption}
      {foundOption.text}
    {:else}
      &nbsp;
    {/if}
  </button>
  <input
    type="text"
    {value}
    class="visually-hidden"
    tabindex="-1"
    style="width: 100% !important"
    required
  />
  <ul class="dropdown-menu w-100">
    {#each formattedOptions as option}
      <li>
        <button
          type="button"
          class="dropdown-item"
          class:active={isEqual(value, option.value)}
          onclick={() => (value = option.value)}>{option.text}</button
        >
      </li>
    {/each}
  </ul>
</div>
