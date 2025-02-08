<script lang="ts">
  let data = $state([
    { fruit: 'Banana', price: 2.5 },
    { fruit: 'Apple', price: 3 },
    { fruit: 'Orange', price: 1.5 },
    { fruit: 'Grapes', price: 2.75 },
  ]);

  let newItem = $state('');
</script>

<GSortableCards bind:items={data}>
  {#snippet children(item, index)}
    <div class="py-2 px-3">
      <div class="hstack align-items-end">
        <GTextInput
          label="{item.fruit} Price"
          bind:value={item.price}
          type="number"
        />
        <GIconBtn
          icon="close"
          title="Remove"
          onclick={() => {
            data.splice(index, 1);
          }}
        />
      </div>
    </div>
  {/snippet}
</GSortableCards>

<div class="hstack align-items-end mt-4">
  <GTextInput label="Add Fruit" bind:value={newItem} />
  <GBtn
    disabled={!newItem}
    onclick={() => {
      data.push({ fruit: newItem, price: 0 });
      newItem = '';
    }}>Add</GBtn
  >
</div>

<GDebug class="mt-4" {data} />
