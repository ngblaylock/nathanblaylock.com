# Icons

Icons are primarily pulled from [Material Design Icons](https://pictogrammers.com/library/mdi/) but any icon that may be needed can be added. Some examples of added icons are:

- Brands
- Custom Icons

## Adding Icons

Icons can be added to `src/lib/PACKAGE/components/icons.ts`. If it is a MDI icon, import it like the rest in the list. Add the icon to the `icons` object. The name doesn't need to exactly follow the MDI name, for example `mdiMarker` is `formatHighlight`.

Custom icons are defined separately. When adding an icon, you only need the path value. This should be a [minified SVG](https://www.svgminify.com/) with a single path. For example, `<path d="..."`. Icons should also be added to Figma's UI Kit.

## Icon Types

If you need to get the types for icon names, you can import them like:

```ts
 import { type IconName } from 'nathanblaylock.com/icons';
```