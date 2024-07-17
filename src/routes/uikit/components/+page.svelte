<script lang="ts">
  import * as E from '$components/Elemental';
</script>

<E.SEO title="Components" />

<div class="container vstack gap-4">
  <div>
    <h2>E.Btn</h2>
    <p>Creates links or buttons</p>
    <E.Btn theme="primary" on:click={() => console.log('hi')}>Testing</E.Btn>
    <E.Btn theme="primary" href="/">Testing</E.Btn>
  </div>
  
  <div>
    <h2>E.Debug</h2>
    <E.Debug data={['one', 'two', 'three']} />
  </div>
  
  <div>
    <h2>E.Icon</h2>
    <E.Icon name="home" />
  </div>

  <div>
    <h2>E.SEO</h2>
  </div>
</div>