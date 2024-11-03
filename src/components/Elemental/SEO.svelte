<!-- This is just called SEO for standardization. The only page that should be shown on search engines is the homepage. This also updates the page title -->
<script>
  import { page } from '$app/stores';
  import { global } from '$lib/global.svelte';
  import { onMount } from 'svelte';

	/**
	 * @type {{
	 *  robots?: boolean, // In this project, robots are false by default since the homepage is the only page I want visible
	 *  title?: string,
	 *  description?: string,
	 *  hideHeader?: boolean, // If `true` it will not show the main h1 under the large Nathan Blaylock text
	 * }}
	 */
  let {
    robots = false,
    title = '',
    description = 'Nathan Blaylock is a User Experience Engineer who loves to creatively solve complex problems. This portfolio is a showcase of some of his work.',
    hideHeader = false,
  } = $props();

  onMount(() => {
    hideHeader ? (global.pageTitle = '') : (global.pageTitle = title);
  });

  let titleTemplate = $derived(title ? title + ' | Nathan Blaylock' : 'Nathan Blaylock');
</script>

<svelte:head>
  <title>{titleTemplate}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={titleTemplate} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://nathanblaylock.com{$page.route.id}" />
	<link rel="canonical" href="https://nathanblaylock.com{$page.route.id}">
  {#if !robots}
    <meta name="robots" content="noindex,nofollow" />
  {/if}
</svelte:head>
