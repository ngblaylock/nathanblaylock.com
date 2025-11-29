<script lang="ts">
  let showModal = $state(false);
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

<GBtn onclick={() => (showModal = !showModal)}>Show Modal</GBtn>

<GModal
  bind:show={showModal}
  title="Modal Events Example"
  {onShown}
  {onShow}
  {onHidden}
  {onHide}
>
  Here is the modal content!
</GModal>
