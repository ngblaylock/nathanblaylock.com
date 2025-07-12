import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Components from 'unplugin-svelte-components/vite';

export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/PACKAGE/components'],
      dts: true,
      eslintrc: {
        enabled: false,
      },
    }),
    sveltekit(),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(
      process.env.npm_package_version || 'unknown',
    ),
  },
});
