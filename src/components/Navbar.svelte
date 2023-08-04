<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
  let currentRoute: string;
	const isCurrentRoute = (route:string) => {
			currentRoute = route;
	};
  $: isCurrentRoute($page.route.id || '')
</script>

<nav>
	<div class="container py-3 d-flex flex-wrap gap-3 justify-content-end">
		<a href="/" class={currentRoute == '/' ? 'active' : ''}>Projects</a>
		<a href="/about" class={currentRoute == '/about' ? 'active' : ''}>About Nathan</a>
		<a href="/contact" class={currentRoute == '/contact' ? 'active' : ''}>Contact</a>
	</div>
</nav>

<style lang="scss">
	nav {
		display: block;
		font-size: 1.25rem;
		font-weight: 600;
		padding: 8px 12px;
		a {
			text-decoration: none;
      border-bottom: 2px solid transparent;
      &.active{
        border-bottom: 2px solid $secondary;
      }
		}
	}
</style>
