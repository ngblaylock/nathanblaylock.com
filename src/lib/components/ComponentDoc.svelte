<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { codeToHtml } from 'shiki';
  import { componentData } from '$lib/component-docs.svelte';

  let {
    children,
    component,
    fullPage,
    title,
  }: {
    children?: Snippet;
    component: string;
    fullPage?: boolean;
    title: string;
  } = $props();

  let DynamicComponent: any = $state();
  let codeHTML = $state('');

  const uid = $props.id();

  onMount(async () => {
    const module = await import(`$PACKAGE/examples/${component}.svelte`);
    if (!module) return;
    DynamicComponent = module.default;
    const fileContent = componentData.componentDoc[component];
    codeHTML = await codeToHtml(fileContent, {
      lang: 'svelte',
      theme: 'dark-plus',
    });
  });
</script>

{#if DynamicComponent}
  <div>
    <h2>{title}</h2>
    <div class="card gap-0 mb-4">
      {#if children}
        <div class="card-body border-bottom border-base-4 bg-base-2 pb-0">
          {@render children()}
        </div>
      {/if}
      <div class="accordion accordion-flush">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#{uid}"
              aria-controls={uid}
            >
              <div class="hstack">
                <GIcon
                  size={1.5}
                  name="code"
                />
                Code Example
              </div>
            </button>
          </h2>
          <div
            id={uid}
            class="accordion-collapse collapse"
          >
            <div class="shiki-example">{@html codeHTML}</div>
          </div>
        </div>
      </div>
      <div class="bg-base-1 p-4">
        {#if fullPage}
          <p>
            This component can only be previewed in a full page environment.
          </p>
          <GBtn
            variant="secondary"
            href="/uikit/full-page-example?component={component}"
            target="_blank"
            iconRight="openInNew"
          >
            Full Page Example
          </GBtn>
        {:else}
          <DynamicComponent />
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .shiki-example {
    :global(pre) {
      padding: $spacer;
      border-radius: $border-radius;
      border: 1px solid $dark;
      margin: 0;
    }
  }
</style>
