declare const GDebug: import("svelte").Component<{
    class?: string;
    data: any;
    showInProd?: boolean;
    title?: string;
}, {}, "">;
type GDebug = ReturnType<typeof GDebug>;
export default GDebug;
