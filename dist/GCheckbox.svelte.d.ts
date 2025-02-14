type $$ComponentProps = {
    checked: boolean;
    class?: string;
    hideLabel?: boolean;
    hint?: string;
    id?: string;
    label: string;
    [key: string]: unknown;
};
declare const GCheckbox: import("svelte").Component<$$ComponentProps, {}, "checked">;
type GCheckbox = ReturnType<typeof GCheckbox>;
export default GCheckbox;
