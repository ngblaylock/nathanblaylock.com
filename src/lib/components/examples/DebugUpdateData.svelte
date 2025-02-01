<script lang="ts">
  import { Btn, Debug } from '$PACKAGE';

  let data = $state(['Item 0', 'Item 1', 'Item 2']);
</script>

<div class="mb-2">
  <Btn onclick={() => data.push(`Item ${data.length}`)}>Add Item</Btn>
  <Btn onclick={() => data.pop()}>Remove Item</Btn>
</div>

<Debug title="Custom Title" {data} class="mb-0" />
