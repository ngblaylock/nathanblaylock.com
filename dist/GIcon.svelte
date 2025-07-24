<script lang="ts">import icons, {} from './icons';
let { name, size = 1 } = $props();
let deprecations = [
    { old: 'pencil', new: 'edit' },
    { old: 'nbMedia', new: 'brandNbMedia' },
    { old: 'firebase', new: 'brandFirebase' },
    { old: 'gitHub', new: 'brandGitHub' },
];
let path = $derived.by(() => {
    const deprecatedIcon = deprecations.find((deprecation) => deprecation.old === name);
    if (deprecatedIcon) {
        console.warn(`The "${deprecatedIcon.old}" icon has been deprecated. Please use "${deprecatedIcon.new}"`);
        return icons[deprecatedIcon.new];
    }
    return icons[name] || '';
});
</script>

{#if path}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style="width: {size}rem; height: {size}rem;"
  >
    <path d={path} />
  </svg>
{/if}
