<script lang="ts">
  import Sortable from 'sortablejs';
  import { onMount, tick, type Snippet } from 'svelte';
  import cloneDeep from 'lodash/cloneDeep';
  import GIcon from './GIcon.svelte';
  let {
    children,
    items = $bindable(),
  }: {
    children?: Snippet<[item: any, index: number]>;
    items: unknown[];
  } = $props();

  let el: HTMLElement | undefined = $state();
  onMount(() => {
    Sortable.create(el!, {
      animation: 150,
      handle: '.handle',
      onUpdate: async (evt) => {
        const newItems = cloneDeep(items);
        const moveItem = newItems.splice(evt.oldIndex as number, 1)[0];
        newItems.splice(evt.newIndex as number, 0, moveItem);
        // Fix reactivity
        items = [];
        await tick();
        items = cloneDeep(newItems);
      },
    });
  });
</script>

<div
  bind:this={el}
  class="vstack"
>
  {#each items as item, index (index)}
    <div class="card hstack gap-0">
      <div
        class="handle bg-base-4 align-self-stretch d-flex align-items-center px-2"
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
