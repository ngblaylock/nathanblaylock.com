import type { IconName } from './';
type $$ComponentProps = {
    class?: string;
    group?: unknown;
    id?: string;
    items: {
        icon?: IconName;
        label: string;
        value: unknown;
    }[];
    [key: string]: unknown;
};
declare const GSegmentedControl: import("svelte").Component<$$ComponentProps, {}, "group">;
type GSegmentedControl = ReturnType<typeof GSegmentedControl>;
export default GSegmentedControl;
