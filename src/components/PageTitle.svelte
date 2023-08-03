<script lang="ts">
  export let title: string;
  import {pageTitle} from '$lib/stores';
	import { onMount } from 'svelte';

  function increment() {
		pageTitle.update((n) => title);
	}
  onMount(() => {
    increment()
  })
</script>

<svelte:head>
  <title>{title ? title + ' | Nathan Blaylock' : 'Nathan Blaylock'}</title>
</svelte:head>
