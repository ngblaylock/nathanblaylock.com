<script lang="ts">import uniqueId from 'lodash/uniqueId';
let { class: classList = '', hideLabel = false, hint = '', id = '', label, required = false, value = $bindable(''), ...restProps } = $props();
let uid = $derived(id || uniqueId('u'));
</script>

<div class={classList}>
  <label
    for={uid}
    class="form-label"
    class:visually-hidden={hideLabel}
    >{#if required}<span class="text-primary">*</span>{/if}{label}</label
  >
  <input
    bind:value
    class="form-control"
    id={uid}
    aria-describedby={hint ? `${uid}-hint` : null}
    {required}
    {...restProps}
  />
  {#if hint}
    <div
      id="{uid}-hint"
      class="form-text"
    >
      {hint}
    </div>
  {/if}
</div>
