# Nathan Blaylock Portfolio

This project uses Nuxt to create a portfolio site. The only page that should be found via SEO is the homepage. Everything else is intensionally disabled from crawling. It is also a simple website that should be easy to maintain and really just showcase my abilities as a developer.

## Develop Site

Run `npm run dev` to develop the site. You will get a green toolbar at the top of the site and a green favicon to indicate that you are in development mode.

Important Things to Remember:

- The CSS framework is Bootstrap 4, but because this has little to no JS needs, I do not include Bootstrap's JS files, and do not use BootstrapVue.
- There is a Figma file with most of the raw imagery that you can continue to manipulate new assets.

## Deploy Process

Run `npm run generate` to build files to the `docs` directory. GitHub is configured to use this page for hosting on GitHub Pages.

The final website will be available at https://nathanblaylock.com