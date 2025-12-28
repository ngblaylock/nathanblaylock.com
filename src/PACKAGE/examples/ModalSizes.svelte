<script lang="ts">
  let showModal = $state(false);
  let size: 'sm' | 'lg' | 'xl' | undefined = $state();
</script>

<GBtn
  onclick={() => {
    showModal = true;
    size = 'sm';
  }}>Show Small Modal</GBtn
>
<GBtn
  onclick={() => {
    showModal = true;
    size = undefined;
  }}>Show Medium (default) Modal</GBtn
>
<GBtn
  onclick={() => {
    showModal = true;
    size = 'lg';
  }}>Show Large Modal</GBtn
>
<GBtn
  onclick={() => {
    showModal = true;
    size = 'xl';
  }}>Show X-Large Modal</GBtn
>

<GModal
  bind:show={showModal}
  title="Example Modal"
  {size}
>
  Here is the modal content!
</GModal>
