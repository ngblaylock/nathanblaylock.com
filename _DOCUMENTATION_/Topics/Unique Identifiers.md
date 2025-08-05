# Unique Identifiers

When developing global (`G*`) components I started using `crypto.randomUUID()` to generate random IDs used for the frontend, specifically for `id`s. I ran into an issue while developing Scoresheet where I couldn't preview my site on a mobile device using the exposed IP address because the `crypto` library is [only available through a secure context](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API), meaning https or localhost. In theory it would work while deployed, but not in some development instances.

Instead of using `crypto` I decided to use `lodash.uniqueId`. Since I have Lodash as a dependency, I thought it would be best to use that. So far it seems to work well for my needs.

## Alternative Solutions

1. [nanoid](https://www.npmjs.com/package/nanoid) - the drawback is that it is another dependency.
2. [$props.id()](<https://svelte.dev/docs/svelte/$props#$props.id()>) - the drawback is that it is added in Svelte 5.20.0. I do use this on non-PACKAGE components.
