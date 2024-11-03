<script>
  import { dev } from '$app/environment';
</script>

{#if dev}
  <div class="dev-toolbar-collapse-container">
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
            <a href="/uikit" class="btn btn-sm btn-light">UI Kit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dev-mq-helper"></div>
{/if}
