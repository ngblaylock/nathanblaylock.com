import { type IconName } from './icons';
type $$ComponentProps = {
    class?: string;
    href?: string;
    icon: IconName;
    outline?: boolean;
    title: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
    [key: string]: unknown;
};
declare const GIconBtn: import("svelte").Component<$$ComponentProps, {}, "">;
type GIconBtn = ReturnType<typeof GIconBtn>;
export default GIconBtn;
