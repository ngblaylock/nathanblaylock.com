type $$ComponentProps = {
    class?: string;
    group?: unknown;
    id?: string;
    items: {
        hint?: string;
        label: string;
        value: unknown;
    }[];
    legend?: string;
};
declare const GRadioGroup: import("svelte").Component<$$ComponentProps, {}, "group">;
type GRadioGroup = ReturnType<typeof GRadioGroup>;
export default GRadioGroup;
