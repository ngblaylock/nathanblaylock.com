<script lang="ts">
  export let data;
</script>

<div class="card text-bg-dark">
  <div class="card-body">
    <pre class="m-0 p-0">{JSON.stringify(data, null, 2)}</pre>
  </div>
</div>