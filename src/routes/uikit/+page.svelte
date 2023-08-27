<script lang="ts">
	import { browser } from '$app/environment';
	import SEO from '$components/SEO.svelte';
	import chroma from 'chroma-js';
	let theme = ['primary', 'secondary', 'light', 'dark', 'gray'];
	let colors = ['red', 'blue', 'gray'];

	const getHex = (color: string) => {
		if (browser) {
			return getComputedStyle(document.documentElement).getPropertyValue(`--bs-${color}`);
		} else return '';
	};
	const getContrastColor = (color: string) => {
		if (browser) {
			const dark = getHex('dark');
			const light = getHex('light');
			const inputColor = getHex(color);
			const darkContrast = chroma.contrast(dark, inputColor);
			const lightContrast = chroma.contrast(light, inputColor);
			return darkContrast > lightContrast
				? { color: 'dark', contrast: darkContrast }
				: { color: 'light', contrast: lightContrast };
		}
		return {color: 'dark', contrast: 0};
	};
</script>

<SEO title="UI Kit" />

<h2>Colors</h2>
<div class="row">
	{#each theme as color}
		<div class="col">
			<div class="text-bg-{color} p-4">
				<p class="lead">${color}</p>
				<div>{getHex(color)}</div>
			</div>
		</div>
	{/each}
</div>

<div class="row mt-4">
	{#each colors as color}
		<div class="col">
			{#each Array(9) as _, i}
				{@const fullColor = `${color}-${i + 1}00`}
				<div
					class="p-2 d-flex justify-content-between text-{getContrastColor(fullColor).color}"
					style="background: var(--bs-{fullColor});"
				>
					<div>
						<span>{fullColor}</span>
						{#if getContrastColor(fullColor).contrast < 4.5}
							 <!-- content here -->
							 <span class="badge text-bg-light ms-2">Poor Contrast - {getContrastColor(fullColor).contrast.toFixed(1)}</span>
						{/if}
					</div>
					<span>{getHex(fullColor)}</span>
				</div>
			{/each}
		</div>
	{/each}
</div>

<h2 class="mt-5">Images</h2>

<h2 class="mt-5">Logos</h2>

<h2 class="mt-5">Font</h2>
<div class="card card-body bg-light lead">
	A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
	a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
	1 2 3 4 5 6 7 8 9 0<br />
	! @ # $ % ^ & * ( ) &#123; &#125; [ ] &lt; &gt; ? ~ ` " ' ; : + = - _
</div>

<h2 class="mt-5">Typography</h2>
<div class="card card-body bg-light">
	<h1>Header 1</h1>
	<h2>Header 2</h2>
	<h3>Header 3</h3>
	<h4>Header 4</h4>
	<h5>Header 5</h5>
	<h6>Header 6</h6>
	<p>
		Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eum laboriosam nihil
		debitis ex praesentium dolore quas illum dolorem alias, nobis dolorum neque omnis officiis
		quaerat error, repellendus voluptas cupiditate.
	</p>
	<p class="lead">
		Lead Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est obcaecati
		debitis quibusdam atque repellat unde assumenda cumque consequuntur tempora pariatur recusandae,
		odio reiciendis itaque numquam aperiam maiores esse voluptatum.
	</p>
</div>

<br />
