<script lang="ts">
  import { dev } from '$app/environment';
  import DevToolbarSeo from './DevToolbarSeo.svelte';
</script>

<svelte:head>
  {#if dev}
    <style>
      body {
        --dev-toolbar-offset: 16px;
      }
    </style>
  {/if}
</svelte:head>

{#if dev}
  <div class="dev-toolbar-collapse-container z-3 position-sticky top-0">
    <div class="dev-toolbar-collapse">
      <div class="dev-toolbar">
        <div class="dev-toolbar-body">
          Development
          <span class="flex-fill"></span>
          <div class="hstack gap-2">
            <a
              href="https://github.com/ngblaylock/nathanblaylock.com"
              class="link-light"
              target="_blank">GitHub</a
            >
            <a
              href="https://www.figma.com/design/gUpl3smnXgtPlhdIGjNWvq/Portfolio?node-id=0-1"
              class="link-light"
              target="_blank">Figma</a
            >
            <DevToolbarSeo />
            <a href="/uikit" class="btn btn-sm btn-light">UI Kit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dev-mq-helper"></div>
{/if}
