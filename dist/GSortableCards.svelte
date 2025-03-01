<script lang="ts">import Sortable from 'sortablejs';
import { onMount, tick } from 'svelte';
import cloneDeep from 'lodash/cloneDeep';
import GIcon from './GIcon.svelte';
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
        // Grabbing style
        forceFallback: true, // This fixes the grabbing style
        onStart: function (evt) {
            document.body.classList.add('sortable-js-grabbing');
        },
        onEnd: function (evt) {
            document.body.classList.remove('sortable-js-grabbing');
        },
    });
});
</script>

<div
  bind:this={el}
  class="vstack"
>
  {#each items as item, index (index)}
    <div class="card text-bg-base-2 hstack gap-0">
      <div
        class="handle cursor-grab bg-base-3 align-self-stretch d-flex align-items-center px-2"
      >
        <GIcon
          name="dragVertical"
          size={1.5}
        />
      </div>
      {#if children}
        {@render children(item, index)}
      {:else}
        {item}
      {/if}
    </div>
  {/each}
</div>
