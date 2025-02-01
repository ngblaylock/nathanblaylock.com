<script lang="ts">
  type Prop = {
    name: string;
    required?: boolean;
    type: string;
    default?: any;
    description: string;
  };
  type Props = {
    props: Prop[];
  };

  let { props: componentProps }: Props = $props();
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
            >{prop.name}</td
          >
          <td>{prop.type}</td>
          <td><code>{JSON.stringify(prop.default)}</code></td>
          <td>{prop.description}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
