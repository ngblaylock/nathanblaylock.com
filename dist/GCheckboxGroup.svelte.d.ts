type $$ComponentProps = {
    class?: string;
    group?: unknown[];
    id?: string;
    items: {
        hint?: string;
        label: string;
        value: unknown;
    }[];
    legend?: string;
    [key: string]: unknown;
};
declare const GCheckboxGroup: import("svelte").Component<$$ComponentProps, {}, "group">;
type GCheckboxGroup = ReturnType<typeof GCheckboxGroup>;
export default GCheckboxGroup;
