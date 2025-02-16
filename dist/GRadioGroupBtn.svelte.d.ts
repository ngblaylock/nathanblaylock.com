import { type IconName } from './icons';
type $$ComponentProps = {
    class?: string;
    group?: unknown;
    id?: string;
    items: {
        icon?: IconName;
        label: string;
        value: unknown;
    }[];
};
declare const GRadioGroupBtn: import("svelte").Component<$$ComponentProps, {}, "group">;
type GRadioGroupBtn = ReturnType<typeof GRadioGroupBtn>;
export default GRadioGroupBtn;
