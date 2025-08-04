import type { Snippet } from 'svelte';
import type { AppNavItems } from './';
type $$ComponentProps = {
    appNavContent?: Snippet;
    children: Snippet;
    navItems?: AppNavItems;
};
declare const GAppNav: import("svelte").Component<$$ComponentProps, {}, "">;
type GAppNav = ReturnType<typeof GAppNav>;
export default GAppNav;
