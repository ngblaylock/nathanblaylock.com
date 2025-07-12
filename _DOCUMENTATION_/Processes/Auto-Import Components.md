# Auto Import Components

## Locally

This is already set up, but this is what is required:

1. First run `npm install unplugin-svelte-components -D`
2. Update your vite.config.js to look like the following:

```js
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
      }
    }),
    sveltekit(),
  ],
});
```

3. In the `tsconfig.json` file add the `files` property:

```json
{
  "files" : ["./components.d.ts"],
}
```

## In Another Package

For other repositories like Scoresheet, you can manually import components using `import { Btn } from 'nathanblaylock.com'`. Alternatively you can configure auto-importing with the following.

1. First run 
   - `npm install github:ngblaylock/nathanblaylock.com#v<tag>` where tag is the current version number.
   - `npm install unplugin-svelte-components @types/node -D`
2. Second add the styles in `+layout.svelte`

```svelte
<script lang="ts">
	let { children } = $props();
	import 'nathanblaylock.com/styles';
</script>

{@render children()}
```

3. Then add the following to your `vite.config.ts` file:

```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Components from 'unplugin-svelte-components/vite'; // https://github.com/Mohamed-Kaizen/unplugin-svelte-components
import fs from 'fs';
import path from 'path';

// For auto-importing nathanblaylock.com components
// Path to the third-party components
const componentsDir = path.resolve('node_modules/nathanblaylock.com/dist/');

// Get all Svelte file names dynamically
const componentNames = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.svelte'))
  .map(file => file.replace('.svelte', ''));

export default defineConfig({
  plugins: [
    Components({
      dirs: [], // This will throw a warning "no components found" but that is just for local files.
      allowOverrides: true,
      external: [
        {
          from: 'nathanblaylock.com',
          names: componentNames, // Otherwise you have to manually pass in components you want auto-imported.
          defaultImport: false
        }
      ],
      eslintrc: { enabled: false }
    }),
    sveltekit()
  ],
});
```

4. In the `tsconfig.json` file add the `files` property:

```json
{
  "files" : ["./components.d.ts"],
}
```

5. Copy over snippets when appropriate. For example

```json
{
  "scripts": {
    "predev": "cp -f ./node_modules/nathanblaylock.com/.vscode/nathanblaylock.code-snippets .vscode/"
  }
}
```