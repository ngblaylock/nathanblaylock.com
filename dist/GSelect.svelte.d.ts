interface Option {
    text: string | number;
    value: unknown;
    disabled?: boolean;
    hidden?: boolean;
}
type $$ComponentProps = {
    class?: string;
    hideLabel?: boolean;
    hint?: string;
    id?: string;
    label: string;
    options: (Option | string | number | undefined)[];
    required?: boolean;
    value?: any;
    [key: string]: unknown;
};
declare const GSelect: import("svelte").Component<$$ComponentProps, {}, "value">;
type GSelect = ReturnType<typeof GSelect>;
export default GSelect;
