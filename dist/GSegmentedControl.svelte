<script lang="ts">import GIcon from './GIcon.svelte';
import {} from './icons';
import uniqueId from 'lodash/uniqueId';
let { class: classList = '', group = $bindable(), id = '', items, } = $props();
let uid = $derived(id || uniqueId('u'));
let iconVariant = $derived(items.every((item) => item.icon));
</script>

<div
  class="btn-check-group {classList}"
  class:rounded-pill={iconVariant}
>
  {#each items as item, index}
    <input
      bind:group
      type="radio"
      value={item.value}
      class="btn-check"
      id={`${uid}-${index}`}
      autocomplete="off"
      name={uid + '-group'}
    />
    {#if iconVariant}
      <label
        class="btn btn-icon"
        for={`${uid}-${index}`}
      >
        <GIcon
          name={item.icon as IconName}
          size={1.5}
        />
        <span class="visually-hidden">{item.label}</span>
      </label>
    {:else}
      <label
        class="btn"
        for={`${uid}-${index}`}
      >
        {item.label}
      </label>
    {/if}
  {/each}
</div>
