<script lang="ts">
  import { page } from '$app/stores';
  import * as E from '$components/Elemental';
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<a href="/" class="btn btn-secondary">Home Page</a>
