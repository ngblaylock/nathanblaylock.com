<script>
  import * as E from '$lib/components/Elemental';
</script>

<E.SEO title="Components" />

<div class="container vstack gap-4">
  <div>
    <h2>E.Btn</h2>
    <div class="card card-body">
      <p>Creates links or buttons</p>
      <div class="vstack gap-2">
        <div>
          <E.Btn onclick={() => console.log('hi')}>Button</E.Btn>
          <E.Btn href="/">Link</E.Btn>
        </div>
        <div>
          <E.Btn variant="primary">Button</E.Btn>
          <E.Btn variant="secondary">Button</E.Btn>
          <E.Btn variant="light">Button</E.Btn>
          <E.Btn variant="gray">Button</E.Btn>
          <E.Btn variant="dark">Button</E.Btn>
        </div>
      </div>
    </div>
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
