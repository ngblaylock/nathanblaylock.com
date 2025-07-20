<script lang="ts">
  import Seo from '$components/Seo.svelte';
  let images = [
    'blaylock-nathan.jpg',
    'blaylock-nathan-1.png',
    'blaylock-nathan-2.png',
  ];
  let logoColors = ['red', 'black', 'white'];
</script>

<Seo title="UI Kit" />

<h1>UI Kit Home</h1>

<p>
  This UI Kit is a library of styles and components built in Svelte 5. This is
  set up where all styles reside in the main <code>nathanblaylock.css</code> file.
  To include this in any type of project use:
</p>

<small>
  <pre>&lt;link
  rel=&quot;stylesheet&quot;
  href=&quot;https://cdn.jsdelivr.net/gh/ngblaylock/nathanblaylock.com@{__APP_VERSION__}/dist/nathanblaylock.min.css&quot;
/&gt;</pre>
</small>

<p>For larger projects like with SvelteKit, see <code>_Documentation_/Topics/PACKAGE Components.md</code>.</p>

<h2 class="mt-5">Images</h2>
<div class="row">
  {#each images as image, index}
    <div class="col-md-4 text-center">
      <img
        src="/images/optimized/profile/{image}"
        alt="profile {index}"
        class="img-fluid mb-5"
      />
      <img
        src="/images/optimized/profile/{image.replace('.', '-square.')}"
        alt="square profile {index}"
        class="img-fluid"
      />
    </div>
  {/each}
</div>

<h2 class="mt-5">Logos</h2>
<div class="row mb-n4">
  {#each logoColors as color}
    <div class="col-md-4 text-center">
      <div class="card card-body mb-4">
        <div class="row">
          <div class="col-6">
            <img
              src="/images/logos/logo-{color}-nathan-blaylock-media.png"
              alt="{color} PNG logo"
              class="img-fluid"
            />
            <div class="mt-4">PNG</div>
          </div>
          <div class="col-6">
            <img
              src="/images/logos/logo-{color}-nathan-blaylock-media.svg"
              alt="{color} SVG logo"
              class="img-fluid"
            />
            <div class="mt-4">SVG</div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
