<script lang="ts">
	import { dev } from '$app/environment';
</script>

<svelte:head>
	<!-- <link rel="icon" href="/favicon.ico" /> -->
	{#if dev}
		<link rel="icon" type="image/png" href="/meta/favicon-dev.png" />
	{:else}
		<link rel="icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
		<link rel="manifest" href="/meta/site.webmanifest" />
		<link rel="mask-icon" href="/meta/safari-pinned-tab.svg" color="#671110" />
		<meta property="og:image" content="https://nathanblaylock.com/meta/og-img.jpg" />
	{/if}
</svelte:head>
