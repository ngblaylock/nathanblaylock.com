import adapterStatic from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { sveltePreprocess } from 'svelte-preprocess';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapterStatic({
      fallback: '404.html',
    }),
    alias: {
      $components: 'src/lib/components',
      $PACKAGE: 'src/PACKAGE',
      "nathanblaylock.com": 'src/PACKAGE/components',
    },
  },
  preprocess: [
    mdsvex({
      extensions: ['.svx'],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: '_blank', rel: ['noopener', 'noreferrer'] },
        ],
      ],
    }),
    sveltePreprocess({
      scss: {
        prependData: `
          @import './src/sass/_variables.scss';
          @import './node_modules/bootstrap/scss/mixins/_breakpoints.scss';
        `,
      },
    }),
  ],
};

export default config;
