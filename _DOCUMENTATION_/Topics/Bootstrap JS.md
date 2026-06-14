## Bootstrap JS

Components requiring Bootstrap's interactive features (like Modals or Dropdowns) rely on the global `window.bootstrap` object. To ensure Bootstrap is loaded safely on the client side without throwing `window is not defined` errors on a production build, use an on-demand utility loader.

```ts
import { getBootstrap } from '$PACKAGE/utils';

onMount(async () => {
  const bootstrap = await getBootstrap(); 
  // returns the window.bootstrap object when it has loaded.
  // It must be done in `onMount` or `if(browser)` since that is where window is.
  // Do something like bootstrap.Modal.getOrCreateInstance(someEl)
})
```

## Techniques that didn't work

1. I tried using a CDN for JS, but the issue was the version may not line up with the CSS.
2. I tried shoving it in to the `+layout.svelte` file but the promise to get the file caused race conditions.
3. I tried adding it to the `hooks.client.ts` file, but the race conditions caused issues.