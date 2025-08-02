import type { Snippet } from 'svelte';
import type { IconName } from './';
type $$ComponentProps = {
    children: Snippet;
    class?: string;
    disabled?: boolean;
    href?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    loading?: boolean;
    outline?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
    [key: string]: unknown;
};
declare const GBtn: import("svelte").Component<$$ComponentProps, {}, "">;
type GBtn = ReturnType<typeof GBtn>;
export default GBtn;
