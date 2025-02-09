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
            ><span class="text-primary">{prop.required ? '*' : ''}</span
            >{#if prop.link}
              <a href={prop.link} target="_blank">{prop.name}</a>
            {:else}
              {prop.name}
            {/if}
          </td>
          <td><code>{prop.type}</code></td>
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
  </table>
</div>
