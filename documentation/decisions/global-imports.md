# Global Imports

Perhaps the biggest annoyance of non-auto-imported components is the debug component. I would temporarily put it in, then remove it after a bit and the import would just hang out doing nothing until it was cleaned up. 

I truly do like global imports in Nuxt, and want to use something like that in SvelteKit. However, I do realize that sometimes it is hard to trace where things come from, so I came up with a plan.

I want to use `unplugin-svelte-components` which auto imports components from a specified directory. I don't feel like it is necessary to import ALL components, just the ones that are in the package and are more elemental. Anything that is more snippet based can be manually imported.

To distinguish auto-imported components from PACKAGE from other components I prefix my components with `G`. This stands for "Global" but is also a fun play on my middle initial. So when seeing `<GBtn>Button</GBtn>` it implies that it is a Global Button.

## Obstacles

I tried to use this before for all components and ran into a few issues which is why I stopped using it. First, when manually importing it you can cmd + click and open the file. With auto-imports it opens the `.d.ts` file instead. My solution here is to simply document it well in the UI Kit. If I can go there for a reference I don't need to open up the actual file. And if for some reason that isn't enough, I can go to the `.d.ts` file then click the link to go to the actual file.

There also aren't emmet abbreviations available here, so writing it out is a little bit of a pain. To get around this there is a snippet file dedicated to the PACKAGE code. This can optionally be auto-added to each repo through a postinstall script (code TBD but probably using `cp`).