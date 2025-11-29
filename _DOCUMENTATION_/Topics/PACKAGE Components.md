# PACKAGE Components

## Background

There was a folder in my components called "Elemental" which was intended to be used as basic elemental components tht would be used all throughout the application. The top-level components were more of snippet components that were used usually once.

While developing Scoresheet I found that I needed those components and some other files. I found @sveltejs/package and thought that would be a good way to share my code between these two projects. So I moved everything that I plan to use between projects under a new folder at `src/PACKAGE` which can also be imported internally with the `$PACKAGE` alias.

Since deciding to auto-import components in the `src/PACKAGE/components` directory I don't use the `$PACKAGE` alias often, but it is helpful for non-components.

---

# Create New Package Component

Package components are shared components between multiple applications. They are bundled when running `npm run build` in the deploy steps. Only files and components within the `src/PACKAGE/components` directory will be bundled. All components should be prefixed with a `G` which stands for "Global".

When creating a component:

1. Prefix the component with a `G` in `./src/PACKAGE/components`
2. Any other global component references should be manually imported with a relative file path
3. Add the import to the `src/PACKAGE/components/index.ts` file
4. Add a code snippet to `.vscode/nathanblaylock.code-snippets`
5. Create a component page in `src/routes/uikit/components`
   - Add a meaningful description
   - Add props to a `ComponentApi.svelte` component
   - Add component examples to `ComponentDoc.svelte` components (housed in `src/PACKAGE/examples`)
   - Add the page to the UI Kit navigation

---

## Locally Auto-imported Components

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
      },
    }),
    sveltekit(),
  ],
});
```

1. In the `tsconfig.json` file add the `files` property:

```json
{
  "files": ["./components.d.ts"]
}
```

---

## Usage In Another Package

Regardless of the usage, run `npm install github:ngblaylock/nathanblaylock.com#v<tag>` where tag is the current version number.

### Styles

Add the styles in `+layout.svelte`

```svelte
<script lang="ts">
  let { children } = $props();
  import 'nathanblaylock.com/styles';
</script>

{@render children()}
```

### JavaScript

Components that require scripts need to have the bootstrap script script loaded in the window object. To do this, add the following to `src/hooks.client.js` which will load before any layout, page, or component:

```ts
// @ts-ignore
import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
  window.bootstrap = bootstrap;
});
```

### Components

For other repositories like Scoresheet, you can manually import components using `import { Btn } from 'nathanblaylock.com'`. Alternatively you can configure auto-importing with the following.

1. First `npm install unplugin-svelte-components @types/node -D`
2. Then add the following to your `vite.config.ts` file:

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
const componentNames = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith('.svelte'))
  .map((file) => file.replace('.svelte', ''));

export default defineConfig({
  plugins: [
    Components({
      dirs: [], // This will throw a warning "no components found" but that is just for local files.
      allowOverrides: true,
      external: [
        {
          from: 'nathanblaylock.com',
          names: componentNames, // Otherwise you have to manually pass in components you want auto-imported.
          defaultImport: false,
        },
      ],
      eslintrc: { enabled: false },
    }),
    sveltekit(),
  ],
});
```

3. In the `tsconfig.json` file add the `files` property:

```json
{
  "files": ["./components.d.ts"]
}
```

4. Copy over snippets when appropriate. For example

```json
{
  "scripts": {
    "predev": "cp -f ./node_modules/nathanblaylock.com/.vscode/nathanblaylock.code-snippets .vscode/"
  }
}
```
