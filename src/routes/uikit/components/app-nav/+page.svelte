<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import ComponentDoc from '$components/ComponentDoc.svelte';
  import Seo from '$components/Seo.svelte';

  const props = [
    {
      name: 'appNavContent',
      type: 'Snippet',
      description:
        "The content within the red navigation section. This snippet will replace the <code>navItems</code> prop. Use this for edge case scenarios when programmatically adding items isn't helpful.",
    },
    {
      name: 'children',
      type: 'Snippet',
      description:
        'The main section content. This should primarily hold the <code>main</code> element.',
      required: true,
    },
    {
      name: 'navItems',
      type: `ApNavItems`,
      description: 'Adds items to the red app navigation bar.',
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
  SideNav component.
</p>

<p>
  This component is intended to be used in a <code>+layout.svelte</code> page,
  and should be the top-most level. If you run into scrolling issues in
  development mode, it is likely because of the <code>16px</code> height of the
  Development Toolbar. You need to manually add the CSS variable
  <code class="text-nowrap">--dev-toolbar-height: 16px;</code>
  to a high-level element, like <code>body</code>.
</p>

<ComponentApi {props} />

<ComponentDoc
  title="App Navigation"
  component="AppNav"
  fullPage
>
  <p>This example uses an object to fill in the links in the AppNav.</p>
</ComponentDoc>

<ComponentDoc
  title="App Navigation w/ Snippet"
  component="AppNavAlt"
  fullPage
>
  <p>
    This example uses a Snippet to render links in the AppNav. This is useful
    for advanced manipulation.
  </p>
</ComponentDoc>

<ComponentDoc
  title="GAppNav + GSideNav"
  component="AppNavSideNav"
  fullPage
>
  This example uses AppNav with the SideNav component.
</ComponentDoc>
