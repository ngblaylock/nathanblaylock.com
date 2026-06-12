<script lang="ts">
  import uniqueId from 'lodash/uniqueId';

  interface Option {
    text: string | number;
    value: unknown;
    disabled?: boolean;
    hidden?: boolean;
  }

  let {
    class: classList = '',
    hideLabel = false,
    hint = '',
    id = '',
    label,
    options = [],
    required = false,
    value = $bindable(null),
    ...restProps
  }: {
    class?: string;
    hideLabel?: boolean;
    hint?: string;
    id?: string;
    label: string;
    options: (Option | string | number | undefined)[];
    required?: boolean;
    value?: any;
    [key: string]: unknown;
  } = $props();

  let uid = $derived(id || uniqueId('u'));

  let formattedOptions = $derived(
    options.map((option) => {
      if (!option) return { text: '', value: undefined };
      if (typeof option === 'string' || typeof option === 'number') {
        return { text: option, value: option };
      }
      return option;
    }),
  );
</script>

<div class={classList}>
  <label
    for={uid}
    class="form-label"
    class:visually-hidden={hideLabel}
    >{#if required}<span class="text-primary">*</span>{/if}{label}</label
  >

  <select
    bind:value
    class="form-select"
    id={uid}
    {required}
    {...restProps}
  >
    {#each formattedOptions as option}
      <option
        value={option.value}
        disabled={option.disabled}
        hidden={option.hidden}
      >
        {option.text}
      </option>
    {/each}
  </select>
  {#if hint}
    <div
      id="{uid}-hint"
      class="form-text"
    >
      {hint}
    </div>
  {/if}
</div>
