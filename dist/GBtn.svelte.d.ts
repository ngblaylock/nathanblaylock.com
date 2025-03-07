import type { Snippet } from 'svelte';
import { type IconName } from './icons';
type $$ComponentProps = {
    [key: string]: unknown;
    children: Snippet;
    class?: string;
    disabled?: boolean;
    href?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
};
declare const GBtn: import("svelte").Component<$$ComponentProps, {}, "">;
type GBtn = ReturnType<typeof GBtn>;
export default GBtn;
