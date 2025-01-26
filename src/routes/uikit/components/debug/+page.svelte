<script lang="ts">
  import ComponentDoc from '$components/ComponentDoc.svelte';
</script>

<h1>Debug</h1>

<p>
  This debug component will only show up in a development environment. It will display the data passed to it in a JSON format. It can also handle number, string, and boolean values. Under the hood, this uses Shiki for syntax highlighting. 
</p>

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
      <tr>
        <td>data</td>
        <td>any</td>
        <td><code></code></td>
        <td>The data to display.</td>
      </tr>
      <tr>
        <td>title</td>
        <td>string</td>
        <td><code>'Debug'</code></td>
        <td>The title that goes before</td>
      </tr>
    </tbody>
  </table>
</div>

<ComponentDoc title="Overview Usage" component="Debug" />

<ComponentDoc title="Updating Data" component="DebugUpdateData" />
