<script lang="ts">
	export let icons: string[] = [];
</script>

{#if icons.length}
	<div class="border-top pt-5 mt-5 text-center">
		<h2 class="mb-4">Key Technology Used</h2>
		<div class="d-flex flex-wrap gap-3 justify-content-center">
			{#each icons as icon}
				<img src="/icons/{icon}.svg" alt={icon.replace('-', ' ')} title={icon.replace('-', ' ')} />
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	img {
		max-height: 35px;
		max-width: 50px;
	}
</style>
