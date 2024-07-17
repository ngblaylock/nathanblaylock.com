<!-- This is just called SEO for standardization. The only page that should be shown on search engines is the homepage. This also updates the page title -->
<script lang="ts">
	import { page } from '$app/stores';
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';
	export let robots: boolean = false;
	export let title: string = '';
	export let description: string =
		'Nathan Blaylock is a User Experience Engineer who loves to creatively solve complex problems. This portfolio is a showcase of some of his work.';
	export let hideHeader: boolean = false;

	onMount(() => {
		hideHeader ? pageTitle.update((n) => '') : pageTitle.update((n) => title);
	});

	$: titleTemplate = title ? title + ' | Nathan Blaylock' : 'Nathan Blaylock';
</script>

<svelte:head>
	<title>{titleTemplate}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={titleTemplate} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://nathanblaylock.com{$page.route.id}" />
	{#if !robots}
		<meta name="robots" content="noindex,nofollow" />
	{/if}
</svelte:head>
