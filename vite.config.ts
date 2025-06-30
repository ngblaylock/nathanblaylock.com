import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Components from 'unplugin-svelte-components/vite';

export default defineConfig({
	plugins: [
		Components({
			dirs: ['src/PACKAGE/components'],
			dts: true,
			eslintrc: {
				enabled: false
			}
		}),
		sveltekit()
	]
});
