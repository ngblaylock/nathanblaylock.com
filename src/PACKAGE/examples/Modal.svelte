<script lang="ts">
  let showModal = $state(false);
</script>

<GBtn onclick={() => showModal = true}>Show Modal</GBtn>

<GModal
  bind:show={showModal}
  title="Example Modal"
>
  Here is the modal content!
  {#snippet footer()}
    <GBtn
      variant="base-1"
      onclick={() => showModal = false}>Close</GBtn
    >
  {/snippet}
</GModal>
