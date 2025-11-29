<script lang="ts">
  import uniqueId from 'lodash/uniqueId';
  import { onDestroy, onMount, tick, type Snippet } from 'svelte';
  import GIconBtn from './GIconBtn.svelte';
  import type { Modal } from 'bootstrap';
  import Portal from 'svelte-portal';
  let {
    children,
    footer,
    id = `u${uniqueId()}`,
    onHidden,
    onHide,
    onShow,
    onShown,
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
  let activatingElement: Element | null = null;

  onMount(async () => {    
    // const { Modal } = await import('bootstrap');
    const modalEl = document.getElementById(id)!;    
    
    bsModal = window.bootstrap.Modal.getOrCreateInstance(modalEl);

    modalEl.addEventListener('show.bs.modal', () => {
      activatingElement = document.activeElement;
      show = true;
      onShow?.();
    });

    modalEl.addEventListener('shown.bs.modal', () => {
      onShown?.();
    });

    modalEl.addEventListener('hide.bs.modal', () => {
      onHide?.();
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
      if (activatingElement instanceof HTMLElement) {
        activatingElement.focus();
      }
      show = false;
      onHidden?.();
    });
  });

  onDestroy(() => {
    if (show) {
      document.querySelector('.modal-backdrop')?.remove();
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('padding-right');
    }
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

<Portal target="body">
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
</Portal>
