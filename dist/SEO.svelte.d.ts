interface Props {
    robots?: boolean;
    title?: string;
    description?: string;
    hideHeader?: boolean;
}
/** This is just called SEO for standardization. The only page that should be shown on search engines is the homepage. This also updates the page title */
declare const Seo: import("svelte").Component<Props, {}, "">;
type Seo = ReturnType<typeof Seo>;
export default Seo;
