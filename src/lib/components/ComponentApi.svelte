<script lang="ts">
  let {
    props: componentProps,
  }: {
    props: {
      name: string;
      required?: boolean;
      type: string;
      default?: any;
      description: string;
      link?: string;
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
            {/if}</td
          >
          <td>{prop.type}</td>
          <td><code>{JSON.stringify(prop.default)}</code></td>
          <td>{prop.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
