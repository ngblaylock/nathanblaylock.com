import { type IconName } from './icons';
import type { Snippet } from 'svelte';
interface Props {
    href?: string;
    variant?: Variant;
    class?: string;
    children: Snippet;
    [key: string]: unknown;
    iconLeft?: IconName;
    iconRight?: IconName;
    outline?: boolean;
}
declare const Btn: import("svelte").Component<Props, {}, "">;
type Btn = ReturnType<typeof Btn>;
export default Btn;
