<script lang="ts">
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
        
        <h3 class="mt-4">Inner Icon Buttons</h3>
        <div>
          <E.Btn variant="primary" iconLeft="arrowLeft">Button</E.Btn>
          <E.Btn variant="primary" iconRight="arrowRight">Button</E.Btn>
          <E.Btn variant="primary" iconLeft="arrowLeft" iconRight="arrowRight">Button</E.Btn>
        </div>
        
        <h3 class="mt-4">Icon Buttons</h3>
        <div>
          <E.IconBtn variant="primary" icon="home">Button</E.IconBtn>
          <E.IconBtn variant="secondary" icon="home">Button</E.IconBtn>
          <E.IconBtn variant="dark" icon="home">Button</E.IconBtn>
          <E.IconBtn variant="gray" icon="home">Button</E.IconBtn>
          <E.IconBtn variant="light" icon="home">Button</E.IconBtn>
          <E.IconBtn variant="base-1" icon="home">Button</E.IconBtn>
          <E.IconBtn variant="base-i1" icon="home">Button</E.IconBtn>
        </div>
        <div>
          <h4>Active</h4>
          <E.IconBtn class="active" variant="primary" icon="home">Button</E.IconBtn>
          <E.IconBtn class="active" variant="secondary" icon="home">Button</E.IconBtn>
          <E.IconBtn class="active" variant="dark" icon="home">Button</E.IconBtn>
          <E.IconBtn class="active" variant="gray" icon="home">Button</E.IconBtn>
          <E.IconBtn class="active" variant="light" icon="home">Button</E.IconBtn>
          <E.IconBtn class="active" variant="base-1" icon="home">Button</E.IconBtn>
          <E.IconBtn class="active" variant="base-i1" icon="home">Button</E.IconBtn>
        </div>
        <div>
          <h4>Disabled</h4>
          <E.IconBtn disabled variant="primary" icon="home">Button</E.IconBtn>
          <E.IconBtn disabled variant="secondary" icon="home">Button</E.IconBtn>
          <E.IconBtn disabled variant="dark" icon="home">Button</E.IconBtn>
          <E.IconBtn disabled variant="gray" icon="home">Button</E.IconBtn>
          <E.IconBtn disabled variant="light" icon="home">Button</E.IconBtn>
          <E.IconBtn disabled variant="base-1" icon="home">Button</E.IconBtn>
          <E.IconBtn disabled variant="base-i1" icon="home">Button</E.IconBtn>
        </div>
        
        <h3 class="mt-4">Outline Icon Buttons</h3>
        <div>
          <E.IconBtn variant="primary" outline icon="home">Button</E.IconBtn>
          <E.Btn variant="primary" outline>Button</E.Btn>
          <E.Btn variant="primary" outline iconRight="arrowRight" iconLeft="arrowLeft">Button</E.Btn>
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
