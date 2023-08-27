<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/Navbar.svelte';
	import Favicons from '$components/Favicons.svelte';
	import BgAngle from '$components/BgAngle.svelte';
	import MqHelper from '$components/MqHelper.svelte';
</script>

<svelte:head>
	<style lang="scss">
		@import '../sass/style';
		body {
			overflow-y: scroll;
			background-image: url('/images/optimized/bg/bg_texture.jpg');
			background-position: top;
			background-repeat: no-repeat;
			background-size: 100%;
			min-height: 100vh;
		}
	</style>
</svelte:head>
<Favicons />
<BgAngle />
<MqHelper />

<div class="site">
	<Navbar />

	<main>
		<div class="container">
			<div class="title-container">
				<div class="display">
					Nathan<br />Blaylock
				</div>
				<h1>{$pageTitle}</h1>
			</div>
			<slot />
		</div>
	</main>

	<Footer />
</div>

<style lang="scss">
	.site {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		main {
			flex: 1 1 0;
		}
	}
	.title-container {
		display: inline-block;
		margin-bottom: 6rem;
		position: relative;
	}
	.display {
		color: $primary;
		display: inline-block;
		font-size: 7em;
		font-weight: 700;
		line-height: 0.85em;
	}
	h1 {
		bottom: -1.2em;
		color: $primary;
		font-weight: 400;
		position: absolute;
		right: 0;
	}
</style>
