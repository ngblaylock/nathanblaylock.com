import adapterStatic from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import {sveltePreprocess} from 'svelte-preprocess';
// import { mdsvex } from 'mdsvex'; // https://youtu.be/RhScu3uqGd0

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapterStatic({
      fallback: '404.html',
    }),
    alias: {
      $components: 'src/lib/components',
    },
  },
  preprocess: [
    mdsvex({ extensions: ['.svelte.md', '.svx'] }),
    sveltePreprocess({
      scss: {
        prependData: `
          @import './src/sass/_variables.scss';
          @import './node_modules/bootstrap/scss/mixins/_breakpoints.scss';
          // @import './node_modules/bootstrap/scss/_functions.scss';
          // @import './node_modules/bootstrap/scss/_variables.scss';
          // @import './node_modules/bootstrap/scss/_mixins.scss';
        `,
      },
    }),
  ],
};

export default config;
