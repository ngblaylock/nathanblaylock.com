<script>
	import SEO from '$components/SEO.svelte';

	let projects = [
		{
			alt: 'Space Dynamics Laboratory',
			route: 'sdl',
		},
		{
			alt: 'Cookbook',
			route: 'cookbook',
		},
		{
			alt: 'Greater Smithfield Chamber of Commerce',
			route: 'smithfield-chamber-of-commerce',
		},
		{
			alt: 'Scoresheet App',
			route: 'scoresheet',
		},
		{
			alt: 'Extract GSheet',
			route: 'extract-gsheet',
		},
		{
			alt: 'Placeholdate Figma Plugin',
			route: 'placeholdate',
		},
		{
			alt: 'Small Satellite Conference',
			route: 'smallsat',
		},
		{
			alt: 'Group Sale Tracker',
			route: 'group-sale-tracker',
		},
		{
			alt: 'Jeffrey R. Wangsgard and Associates',
			route: 'jrwcpatax',
		},
		{
			alt: 'Busy Bee Odd Jobs',
			route: 'busy-bee-odd-jobs',
		},
		{
			alt: 'Bingo Caller',
			route: 'bingo-caller',
		},
		{
			alt: 'Sorenson Center',
			route: 'scce',
		},
		// {
		// 	alt: 'Psychology Department Website',
		// 	route: 'psychology',
		// },
		// {
		// 	alt: 'Enoch Initiative',
		// 	route: 'enoch-initiative',
		// },
	];
</script>

<SEO title="Projects" robots />

<div class="row mb-5">
	{#each projects as project}
		<div class="col-sm-4 mb-2">
			<a href="/projects/{project.route}"
				><img
					src="/images/optimized/projects/{project.route}/lg_{project.route}.jpg"
					alt={project.alt}
					class="img-fluid rounded shadow"
				/></a
			>
		</div>
	{/each}
</div>
