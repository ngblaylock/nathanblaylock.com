<script lang="ts">
  import { dev } from '$app/environment';

  interface Props {
    data: any;
  }
  let { data } : Props = $props();
</script>

{#if dev}
  <div class="dev-note">
    <pre class="text-bg-dark m-0 p-3 rounded">{JSON.stringify(data, null, 2)}</pre>
  </div>
{/if}
