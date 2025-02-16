# New Package Component

Package components are shared components between multiple applications. They are bundled when running `npm run build` in the deploy steps. Only files and components within the `src/PACKAGE/components` directory will be bundled. All components should be prefixed with a `G` which stands for "Global".

When adding a component:

1. Prefix the component with a `G`
2. Any other global component references should be manually imported with a relative file path
3. Add the import to the `PACKAGE/index.ts` file
4. Add a code snippet to `.vscode/nathanblaylock.code-snippets`