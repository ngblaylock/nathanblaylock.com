<script lang="ts">
  import ComponentApi from '$components/ComponentApi.svelte';
  import Seo from '$components/Seo.svelte';

  const props = [
    {
      name: 'appNav',
      type: 'Snippet',
      description:
        "This snippet will replace the <code>navItems</code> prop. Use this for edge case scenarios when programmatically adding items isn't helpful.",
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
      type: `{
  brand: { 
    href: string;
    label: string; 
    src: string; 
  };
  links: {
    active?: boolean;
    href: string;
    icon?: string;
    label: string;
    src?: string;
  }[];
};`,
      description: 'Adds items to the red app navigation bar.',
      required: true,
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

<p>
  This component is intended to be used in a <code>+layout.svelte</code> page,
  and should be the top-most level. If you run into scrolling issues in
  development mode, it is likely because of the <code>16px</code> height of the
  Development Toolbar. You need to manually add the CSS variable
  <code class="text-nowrap">--dev-toolbar-height: 16px;</code>
  to a high-level element, like <code>body</code>.
</p>

<ComponentApi {props} />

<h2>Example</h2>

<GDevNote>
  Need to add a <code>fullPage</code> prop to the <code>ComponentDoc</code> component.
</GDevNote>

<GBtn
  variant="secondary"
  href="/uikit/components/app-nav/example"
  target="_blank"
>
  Full Page Example
</GBtn>
