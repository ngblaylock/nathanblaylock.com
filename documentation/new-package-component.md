# New Package Component

Package components are shared components between multiple applications. They are bundled when running `npm run build` in the deploy steps. Only files and components within the `src/lib/PACKAGE` component will be bundled. All components should be prefixed with a `G` which stands for `Global`.

When adding a component:

- Prefix the component with a `G`
- Any other global component references should be manually imported with a relative file path
- Add the import to the `PACKAGE/index.ts` file
- Add a code snippet