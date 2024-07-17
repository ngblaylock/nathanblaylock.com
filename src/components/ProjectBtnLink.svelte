<script lang="ts">
	export let href: string;
</script>

<div class="text-center mb-4">
	<a class="btn btn-secondary" {href} target="_blank"><slot>Visit Site</slot></a>
</div>
