<script lang="ts">
  import { onMount } from 'svelte';
  import { codeToHtml } from 'shiki';
  import { componentData } from '$lib/component-docs.svelte';
  import uniqueId from 'lodash/uniqueId';

  let { component, title } = $props();

  let DynamicComponent: any = $state();
  let codeHTML = $state('');

  let uid = uniqueId('u');

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
                <GIcon size={1.5} name="code" />
                Code Example
              </div>
            </button>
          </h2>
          <div id={uid} class="accordion-collapse collapse">
            <div class="shiki-example">{@html codeHTML}</div>
          </div>
        </div>
      </div>
      <div class="bg-base-1 p-4">
        <DynamicComponent />
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
