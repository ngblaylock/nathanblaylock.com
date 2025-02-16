# Packaging

There was a folder in my components called "Elemental" which was intended to be used as basic elemental components tht would be used all throughout the application. The top-level components were more of snippet components that were used usually once.

While developing Scoresheet I found that I needed those components and some other files. I found @sveltejs/package and thought that would be a good way to share my code between these two projects. So I moved everything that I plan to use between projects under a new folder at `src/PACKAGE` which can also be imported internally with the `$PACKAGE` alias.

Since deciding to auto-import components in the `src/PACKAGE/components` directory I don't use the `$PACKAGE` alias often, but it is helpful for non-components.