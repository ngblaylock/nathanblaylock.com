<!-- This is just called SEO for standardization. The only page that should be shown on search engines is the homepage. This also updates the page title -->
<script>
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';

	let {
		robots = false,
		title = '',
		description = 'Nathan Blaylock is a User Experience Engineer who loves to creatively solve complex problems. This portfolio is a showcase of some of his work.',
		hideHeader = false
	} = $props();

	onMount(() => {
		hideHeader ? pageTitle.update((n) => '') : pageTitle.update((n) => title);
	});

	let titleTemplate = $derived(title ? title + ' | Nathan Blaylock' : 'Nathan Blaylock');
</script>

<svelte:head>
	<title>{titleTemplate}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={titleTemplate} />
	<meta property="og:description" content={description} />
	{#if !robots}
		<meta name="robots" content="noindex,nofollow" />
	{/if}
</svelte:head>
