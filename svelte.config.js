import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'; // https://youtu.be/RhScu3uqGd0

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components'
		}
	},
	preprocess: [
		mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
		preprocess({
			scss: {
				prependData: `@import './src/sass/_variables.scss';`
			}
		})
	]
};

export default config;
