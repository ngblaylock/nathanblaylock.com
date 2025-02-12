<script lang="ts">
  let {
    id = '',
    items,
    legend,
    group = $bindable([]),
  }: {
    id?: string;
    items: {
      hint?: string;
      label: string;
      value: unknown;
    }[];
    group?: unknown[];
    legend?: string;
  } = $props();

  let uid = $derived(id || crypto.randomUUID());
</script>

<fieldset>
  {#if legend}
    <legend>{legend}</legend>
  {/if}
  {#each items as item}
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={item.value}
        id={uid}
        bind:group
      />
      <label class="form-check-label" for={uid}>
        {item.label}
      </label>
    </div>
  {/each}
</fieldset>
