<script>
  // @ts-nocheck
  import { dev } from '$app/environment';
  import { afterNavigate } from '$app/navigation';

  afterNavigate(() => {
    if (!dev) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-1GELWP8WME');
    }
  });
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-1GELWP8WME"></script>
</svelte:head>
