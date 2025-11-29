<script lang="ts">
  let showModal = $state(false);
  let onShow = () => {
    console.info('Modal is starting to show');
  };
  let onShown = () => {
    console.info('Modal is fully shown');
  };
  let onHide = () => {
    console.info('Modal is starting to hide');
  };
  let onHidden = () => {
    console.info('Modal is fully hidden');
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
