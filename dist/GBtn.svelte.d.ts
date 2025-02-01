import type { Snippet } from 'svelte';
import { type IconName } from './icons';
interface Props {
    [key: string]: unknown;
    children: Snippet;
    class?: string;
    href?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    outline?: boolean;
    variant?: Variant;
}
declare const GBtn: import("svelte").Component<Props, {}, "">;
type GBtn = ReturnType<typeof GBtn>;
export default GBtn;
