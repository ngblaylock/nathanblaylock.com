<script lang="ts">
  let {
    props: componentProps,
  }: {
    props: {
      bindable?: boolean;
      default?: any;
      description: string;
      link?: string;
      name: string;
      required?: boolean;
      type: string;
    }[];
  } = $props();
</script>

<h2>Props</h2>
<div class="table-responsive mb-4">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each componentProps as prop}
        <tr>
          <td
            ><span class="code-color">{prop.required ? '* ' : ''}</span
            >{#if prop.link}
              <a href={prop.link} target="_blank">{prop.name}</a>
            {:else}
              {prop.name}
            {/if}
          </td>
          <td><pre class="code-color mb-0">{prop.type}</pre></td>
          <td>
            <code>
              {#if prop.bindable}
                $bindable({JSON.stringify(prop.default)})
              {:else}
                {JSON.stringify(prop.default)}
              {/if}
            </code>
          </td>
          <td>
            {prop.description}
          </td>
        </tr>
      {/each}
    </tbody>
    {#if componentProps.some((cp) => cp.required)}
      <tfoot>
        <tr
          ><td colspan="4" class="bg-base-4"
            ><span class="code-color">*</span> <small>Required Prop</small></td
          ></tr
        >
      </tfoot>
    {/if}
  </table>
</div>

<style lang="scss">
  .code-color {
    color: var(--bs-code-color);
  }
</style>
