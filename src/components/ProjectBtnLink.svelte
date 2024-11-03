<script>
	let { href, children } = $props();
</script>

<div class="text-center mb-4">
	<a class="btn btn-secondary" {href} target="_blank">{#if children}{@render children()}{:else}Visit Site{/if}</a>
</div>
