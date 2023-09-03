<script lang="ts">
	import { dev } from '$app/environment';
</script>

{#if dev}
	<div class="mq-helper">
		<div class="d-flex d-sm-none">XS</div>
		<div class="d-none d-sm-flex d-md-none">SM</div>
		<div class="d-none d-md-flex d-lg-none">MD</div>
		<div class="d-none d-lg-flex d-xl-none">LG</div>
		<div class="d-none d-xl-flex d-xxl-none">XL</div>
		<div class="d-none d-xxl-flex">XXL</div>
	</div>
{/if}

<style lang="scss">
	.mq-helper {
		background: $dev;
		color: white;
		border-radius: 100px;
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 12px;
		right: 12px;
		z-index: 8;
	}
</style>
