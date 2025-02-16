type $$ComponentProps = {
    class?: string;
    hideLabel?: boolean;
    hint?: string;
    id?: string;
    label: string;
    required?: boolean;
    value?: string | number | null;
    [key: string]: unknown;
};
declare const GTextInput: import("svelte").Component<$$ComponentProps, {}, "value">;
type GTextInput = ReturnType<typeof GTextInput>;
export default GTextInput;
