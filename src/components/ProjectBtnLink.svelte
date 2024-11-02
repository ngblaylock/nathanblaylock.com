<!--
  @component
  ## Title
	You can use `markdown` in this.
-->

<script lang="ts">
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
	}

	let { href, children }: Props = $props();
</script>

<div class="text-center mb-4">
	<a class="btn btn-secondary" {href} target="_blank">{#if children}{@render children()}{:else}Visit Site{/if}</a>
</div>
