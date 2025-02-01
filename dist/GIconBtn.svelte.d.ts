import { type IconName } from './icons';
interface Props {
    class?: string;
    href?: string;
    icon: IconName;
    outline?: boolean;
    title: string;
    variant?: Variant;
    [key: string]: unknown;
}
declare const GIconBtn: import("svelte").Component<Props, {}, "">;
type GIconBtn = ReturnType<typeof GIconBtn>;
export default GIconBtn;
