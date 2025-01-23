<script lang="ts">
	import * as P  from '$PACKAGE';
	import { onMount } from 'svelte';

	onMount(() => { // Load the cognito form
		const script = document.createElement('script');
		script.src = 'https://www.cognitoforms.com/f/seamless.js';
		script.setAttribute('data-key', 'y1TrDzCN_k6qMR1qGGW-pw');
		script.setAttribute('data-form', '1');
		document.querySelector('#cognito-form')?.appendChild(script);
	});
</script>

<P.SEO title="Contact" />

<div class="row">
	<div class="col-md-8">
		<div id="cognito-form" class="mb-5"></div>
	</div>
</div>
