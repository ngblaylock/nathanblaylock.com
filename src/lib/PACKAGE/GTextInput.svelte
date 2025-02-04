<script lang="ts">
  let {
    class: classList = '',
    hideLabel = false,
    id = '',
    label,
    required = false,
    value = $bindable(),
    ...restProps
  } = $props();

  let uid = $derived(id || crypto.randomUUID());
</script>

<div class={classList}>
  <label for={uid} class="form-label" class:visually-hidden={hideLabel}
    >{#if required}<span class="text-primary">*</span>{/if}{label}</label
  >
  <input class="form-control" id={uid} {required} bind:value {...restProps} />
</div>
