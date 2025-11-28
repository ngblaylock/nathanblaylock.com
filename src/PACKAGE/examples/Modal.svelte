<script lang="ts">
  let show = $state(false);
  let onShown = () => {
    console.log('Modal is fully shown!');
  };
  let onShow = () => {
    console.log('Modal is starting to show!');
  };
  let onHide = () => {
    console.log('Modal is starting to hide!');
  };
  let onHidden = () => {
    console.log('Modal is fully hidden!');
  };
</script>

<GBtn onclick={() => (show = !show)}>Show Modal</GBtn>

<GModal
  bind:show
  {onShown}
  {onShow}
  {onHidden}
  {onHide}
  size="lg"
  title="Example Modal"
>
  here is the modal content!
  {#snippet footer()}
    <GBtn
      variant="base-1"
      onclick={() => (show = false)}>Close</GBtn
    >
  {/snippet}
</GModal>
