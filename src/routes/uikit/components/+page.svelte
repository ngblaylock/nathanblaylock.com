<script>
  import * as E from '$components/Elemental';
</script>

<E.SEO title="Components" />

<div class="container vstack gap-4">
  <div>
    <h2>E.Btn</h2>
    <div class="card card-body">
      <p>Creates links or buttons</p>
      <div class="vstack gap-2">
        <div>
          <E.Btn theme="primary" on:click={() => console.log('hi')}>Button</E.Btn>
          <E.Btn theme="primary" href="/">Link</E.Btn>
        </div>
        <div>
          <E.Btn theme="primary">Button</E.Btn>
          <E.Btn theme="secondary">Button</E.Btn>
          <E.Btn theme="light">Button</E.Btn>
          <E.Btn theme="gray">Button</E.Btn>
          <E.Btn theme="dark">Button</E.Btn>
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
