# nathanblaylock.com

## Develop: 
1. Create a new branch for what you are working on
2. `npm run dev`

## Deploy:
1. Create a new branch from an issue and checkout locally
2. Test the build with `npm run build` and `npm run preview`
3. Update package.json version
4. Merge in to `master` branch. This triggers a GitHub action to deploy the site on gh-pages
5. Check the actions status at https://github.com/ngblaylock/nathanblaylock.com/actions