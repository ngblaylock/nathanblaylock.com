<script lang="ts">import uniqueId from 'lodash/uniqueId';
let { checked = $bindable(), class: classList = '', hideLabel = false, hint = '', id = '', label, ...restProps } = $props();
let uid = $derived(id || uniqueId('u'));
</script>

<div class="form-check {classList}">
  <input
    bind:checked
    class="form-check-input"
    type="checkbox"
    id={uid}
    aria-describedby={hint ? `${uid}-hint` : null}
    {...restProps}
  />
  <label
    class="form-check-label"
    class:visually-hidden={hideLabel}
    for={uid}
  >
    {label}
  </label>
  {#if hint}
    <div
      id="{uid}-hint"
      class="form-text"
    >
      {hint}
    </div>
  {/if}
</div>
