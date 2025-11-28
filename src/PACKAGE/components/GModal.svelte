<script lang="ts">
  import uniqueId from 'lodash/uniqueId';
  import { onMount, type Snippet } from 'svelte';
  import { Modal } from 'bootstrap';
  import GIconBtn from './GIconBtn.svelte';
  let {
    children,
    footer,
    id = `u${uniqueId()}`,
    onHidden = () => {},
    onHide = () => {},
    onShow = () => {},
    onShown = () => {},
    show = $bindable(false),
    size,
    title,
  }: {
    children: Snippet;
    footer?: Snippet;
    id?: string;
    onHidden?: () => void;
    onHide?: () => void;
    onShow?: () => void;
    onShown?: () => void;
    show?: boolean;
    size?: 'sm' | 'lg' | 'xl';
    title: string;
  } = $props();

  let bsModal = $state<Modal | null>(null);

  onMount(() => {
    const modalEl = document.getElementById(id)!;
    bsModal = Modal.getOrCreateInstance(modalEl);

    modalEl.addEventListener('shown.bs.modal', () => {
      onShown();
      show = true;
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
      onHidden();
      show = false;
    });

    modalEl.addEventListener('show.bs.modal', () => {
      onShow();
    });

    modalEl.addEventListener('hide.bs.modal', () => {
      onHide();
    });
  });

  $effect(() => {
    if (bsModal) {
      if (show) {
        bsModal.show();
      } else {
        bsModal.hide();
      }
    }
  });
</script>

<div
  class="modal fade"
  {id}
  tabindex="-1"
  aria-labelledby="{id}-label"
  aria-hidden="true"
>
  <div class="modal-dialog modal-{size}">
    <div class="modal-content">
      <div class="modal-header">
        <h1
          class="modal-title fs-5"
          id="{id}-label"
        >
          {title}
        </h1>
        <GIconBtn
          class="ms-auto"
          icon="close"
          title="Close Modal"
          variant="base-i4"
          onclick={() => (show = false)}
        />
      </div>
      <div class="modal-body">
        {@render children()}
      </div>
      {#if footer}
        <div class="modal-footer">
          {@render footer()}
        </div>
      {/if}
    </div>
  </div>
</div>
