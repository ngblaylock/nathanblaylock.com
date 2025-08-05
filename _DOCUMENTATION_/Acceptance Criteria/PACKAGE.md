# PACKAGE

## Bundle reusable components and related files to be used in other packages.

Typescript support is important. 

This won't be available on NPM, so this will need to be installed with a GitHub URL.

```bash
npm i github:ngblaylock/nathanblaylock.com#v2.4.0 # <-- Change the version to the latest tag
```

## Create snippets for components.

These can be copied into each project with a simple `predev` NPM script.

```json
{
  "scripts": {
    "dev": "vite dev --open --host",
    "predev": "cp -f ./node_modules/nathanblaylock.com/.vscode/nathanblaylock.code-snippets .vscode/"
  }
}
```

## Provide a standard CSS file.

This is minified. I don't include Sass because I want this to be the source of truth for everything.

## Allow dark theme to be used for all components.