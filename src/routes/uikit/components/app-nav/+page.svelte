<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import Seo from '$components/Seo.svelte';

  const props = [
    {
      name: 'temp',
      default: 48,
      type: 'ba',
      description: 'des',
    },
  ];
</script>

<Seo
  title="AppNav"
  hideHeader
/>

<h1>AppNav</h1>

<p>
  The AppNav component is used for structured application navigation, and is
  fully mobile responsive. On a mobile screen the navigation is along the
  bottom, and on larger screens it is on the left side. When on an extra large
  size screen it allows the user to toggle the navigation to provide more
  horizontal space.
</p>

<p>
  This component was well thought through, and is designed to work well with the
  left navigation.
</p>

<ComponentApi {props} />

<h2>Example</h2>

<GBtn
  variant="secondary"
  href="/uikit/components/app-nav/example"
  target="_blank"
>
  Full Page Example
</GBtn>
