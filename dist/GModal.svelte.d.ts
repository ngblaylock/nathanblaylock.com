import { type Snippet } from 'svelte';
type $$ComponentProps = {
    children: Snippet;
    footer?: Snippet;
    id?: string;
    onHidden?: () => void;
    onHide?: () => void;
    onShow?: () => void;
    onShown?: () => void;
    show?: boolean;
    size?: 'sm' | 'lg' | 'xl';
    title: string;
};
declare const GModal: import("svelte").Component<$$ComponentProps, {}, "show">;
type GModal = ReturnType<typeof GModal>;
export default GModal;
