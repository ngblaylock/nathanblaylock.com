<script lang="ts">
  import { dev } from '$app/environment';
</script>

<svelte:head>
  {#if dev}
    <link
      rel="icon"
      type="image/png"
      href="/meta/dev/favicon.png"
    />
    <link
      rel="manifest"
      href="/meta/dev/site.webmanifest"
    />
		<link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/meta/dev/apple-touch-icon.png"
    />
  {:else}
    <link
      rel="icon"
      type="image/png"
      href="/meta/favicon.png"
    />
    <link
      rel="manifest"
      href="/meta/site.webmanifest"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/meta/apple-touch-icon.png"
    />
  {/if}
  <meta
    property="og:image"
    content="https://nathanblaylock.com/meta/og-img.jpg"
  />
</svelte:head>
