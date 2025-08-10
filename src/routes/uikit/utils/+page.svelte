<script lang="ts">
  import { getClientEnvironment } from 'nathanblaylock.com';
  import { onMount } from 'svelte';

  let deviceInfo = $state();

  onMount(() => {
    deviceInfo = getClientEnvironment();
  });
</script>

<h1>Utils</h1>

<div>
  <h2><code>getClientEnvironment()</code></h2>

  <p>
    This utility method can only be called on the frontend. Use <code
      >onMount</code
    >, <code>$effect</code>, or <code>browser</code> to ensure this is called on
    the client and not the server. This returns information about the device.
  </p>

  <GDebug
    title="Client Environment"
    data={deviceInfo}
  />
</div>
