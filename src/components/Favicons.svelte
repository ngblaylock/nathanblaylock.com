<script lang="ts">
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<!-- <link rel="icon" href="/favicon.ico" /> -->
	{#if dev}
		<link rel="icon" type="image/png" href="/favicons/favicon-dev.png" />
	{:else}
		<link rel="icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
		<link rel="manifest" href="/favicons/site.webmanifest" />
		<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#671110" />
	{/if}
</svelte:head>
