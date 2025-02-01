<script lang="ts">
  let data = $state(['Item 0', 'Item 1', 'Item 2']);
</script>

<div class="mb-2">
  <GBtn onclick={() => data.push(`Item ${data.length}`)}>Add Item</GBtn>
  <GBtn onclick={() => data.pop()}>Remove Item</GBtn>
</div>

<GDebug title="Custom Title" {data} class="mb-0" />
