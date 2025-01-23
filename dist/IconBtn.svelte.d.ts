import { type IconName } from './icons';
interface Props {
    href?: string;
    variant?: Variant;
    class?: string;
    icon: IconName;
    outline?: boolean;
    title: string;
    [key: string]: unknown;
}
declare const IconBtn: import("svelte").Component<Props, {}, "">;
type IconBtn = ReturnType<typeof IconBtn>;
export default IconBtn;
