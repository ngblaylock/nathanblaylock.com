# New Package Component

Package components are shared components between multiple applications. They are bundled when running `npm run build` in the deploy steps. Only files and components within the `src/lib/PACKAGE` component will be bundled.

When adding a component, it needs to be added to the `PACKAGE/index.ts` file.