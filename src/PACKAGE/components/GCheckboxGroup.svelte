<script lang="ts">
  import uniqueId from 'lodash/uniqueId';
  let {
    class: classList = '',
    group = $bindable([]),
    id = '',
    items,
    legend,
    ...restProps
  }: {
    class?: string;
    group?: unknown[];
    id?: string;
    items: {
      hint?: string;
      label: string;
      value: unknown;
    }[];
    legend?: string;
    [key: string]: unknown;
  } = $props();

  let uid = $derived(id || uniqueId('u'));
</script>

<fieldset class={classList}>
  {#if legend}
    <legend>{legend}</legend>
  {/if}
  {#each items as item, index}
    <div class="form-check">
      <input
        bind:group
        class="form-check-input"
        type="checkbox"
        value={item.value}
        id={uid + index}
        aria-describedby={item.hint ? `${uid + index}-hint` : null}
        {...restProps}
      />
      <label
        class="form-check-label"
        for={uid + index}
      >
        {item.label}
      </label>
      {#if item.hint}
        <div
          id="{uid + index}-hint"
          class="form-text"
        >
          {item.hint}
        </div>
      {/if}
    </div>
  {/each}
</fieldset>
