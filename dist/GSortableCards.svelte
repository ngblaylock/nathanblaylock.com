<script lang="ts">import Sortable from 'sortablejs';
import { onMount, tick } from 'svelte';
import cloneDeep from 'lodash/cloneDeep';
let { children, items = $bindable(), } = $props();
let el = $state();
onMount(() => {
    Sortable.create(el, {
        animation: 150,
        handle: '.handle',
        onUpdate: async (evt) => {
            const newItems = cloneDeep(items);
            const moveItem = newItems.splice(evt.oldIndex, 1)[0];
            newItems.splice(evt.newIndex, 0, moveItem);
            // Fix reactivity
            items = [];
            await tick();
            items = cloneDeep(newItems);
        },
    });
});
</script>

<div bind:this={el} class="vstack">
  {#each items as item, index (index)}
    <div class="card hstack gap-0">
      <div
        class="handle bg-base-4 align-self-stretch d-flex align-items-center px-2"
      >
        <GIcon name="dragVertical" size={1.5} />
      </div>
      {#if children}
        {@render children( item, index )}
      {:else}
        {item}
      {/if}
    </div>
  {/each}
</div>
