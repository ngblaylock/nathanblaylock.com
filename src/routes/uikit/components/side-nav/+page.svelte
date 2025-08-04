<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';

  const props = [
    {
      name: 'children',
      type: 'Snippet',
      description:
        'The main section content. This should primarily hold the <code>main</code> element.',
      required: true,
    },
    {
      name: 'header',
      type: 'string',
      description: 'The header text of the side navigation.',
      required: true,
    },
    {
      name: 'sideNavContent',
      type: 'Snippet',
      description:
        'The content within the side navigation under the header and tools.',
      required: true,
    },
    {
      name: 'sideNavTools',
      type: 'Snippet',
      description:
        'The space to the right of the header. This should primarily be icon buttons.',
    },
  ];
</script>

<Seo
  title="SideNav"
  hideHeader
/>

<h1>SideNav</h1>

<p>
  The <code>GSideNav</code> component creates a mobile-responsive left navigation
  that opens as a drawer on mobile devices.
</p>

<p>
  This component is intended to be used in a <code>+layout.svelte</code> page,
  and should be the top-most level unless nested inside a <code>AppNav</code>.
  If you run into scrolling issues in development mode, it is likely because of
  the <code>16px</code> height of the Development Toolbar. You need to manually
  add the CSS variable
  <code class="text-nowrap">--dev-toolbar-height: 16px;</code>
  to a high-level element, like <code>body</code>.
</p>

<p>
  There is a known style issue where a sticky footer does not work when using <code
    >GAppNav</code
  >with <code>GSideNav</code> on a smaller screen. This can be handled with some
  custom CSS injected if needed, but typically a sticky footer shouldn't be used
  with a <code>GAppNav</code> component.
</p>

<ComponentApi {props} />

<ComponentDoc
  title="Side Navigation"
  component="SideNav"
  fullPage
/>

<ComponentDoc
  title="GAppNav + GSideNav"
  component="AppNavSideNav"
  fullPage
>
  This example uses GSideNav with the GAppNav component.
</ComponentDoc>
