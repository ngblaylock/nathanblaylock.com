<script>
	interface Props {
		href: string;
	}

	let { href }: Props = $props();
</script>

<div class="p-4 text-center mb-4">
	<a {href} class="btn btn-secondary" target="_blank">Visit Website</a>
	<div class="mt-3">
		<strong>Note:</strong> this is a web archive of the closest date to the site I developed.
	</div>
</div>
