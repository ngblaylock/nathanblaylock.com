<script lang="ts">
  import { browser } from '$app/environment';
  import Seo from '$components/Seo.svelte';
  import chroma from 'chroma-js';
  let theme = ['primary', 'secondary', 'light', 'dark', 'gray'];
  let colors = ['red', 'blue', 'gray'];
  let images = [
    'blaylock-nathan.jpg',
    'blaylock-nathan-1.png',
    'blaylock-nathan-2.png',
  ];
  let logoColors = ['red', 'black', 'white'];

  const getHex = (color: string) => {
    if (browser) {
      return getComputedStyle(document.documentElement).getPropertyValue(
        `--bs-${color}`
      );
    } else return '';
  };

  const getContrastColor = (color: string) => {
    if (browser) {
      const dark = getHex('dark');
      const light = getHex('light');
      const inputColor = getHex(color);
      const darkContrast = chroma.contrast(dark, inputColor);
      const lightContrast = chroma.contrast(light, inputColor);
      return darkContrast > lightContrast
        ? { color: 'dark', contrast: darkContrast }
        : { color: 'light', contrast: lightContrast };
    }
    return { color: 'dark', contrast: 0 };
  };
</script>

<Seo title="UI Kit" />

<div class="mb-5">
  <h2>Colors</h2>
  <div class="row">
    {#each theme as color}
      <div class="col">
        <div class="card card-body text-bg-{color}">
          <p class="lead">${color}</p>
          <div>{getHex(color)}</div>
        </div>
      </div>
    {/each}
  </div>

  <div class="row mt-4">
    {#each colors as color}
      <div class="col">
        {#each Array(9) as _, i}
          {@const fullColor = `${color}-${i + 1}00`}
          <div
            class="p-2 d-flex justify-content-between text-{getContrastColor(
              fullColor
            ).color}"
            style="background: var(--bs-{fullColor});"
          >
            <div>
              <span>{fullColor}</span>
              {#if getContrastColor(fullColor).contrast < 4.5}
                <!-- content here -->
                <span class="badge text-text-bg-base-3 ms-2"
                  >Poor Contrast - {getContrastColor(
                    fullColor
                  ).contrast.toFixed(1)}</span
                >
              {/if}
            </div>
            <span>{getHex(fullColor)}</span>
          </div>
        {/each}
      </div>
    {/each}
  </div>

  <div class="row mt-4">
    <div class="col-md-6">
      <div class="p-2 text-bg-base-1">base-1</div>
      <div class="p-2 text-bg-base-2">base-2</div>
      <div class="p-2 text-bg-base-3">base-3</div>
      <div class="p-2 text-bg-base-4">base-4</div>
    </div>
    <div class="col-md-6">
      <div class="p-2 text-bg-base-i1">base-i1</div>
      <div class="p-2 text-bg-base-i2">base-i2</div>
      <div class="p-2 text-bg-base-i3">base-i3</div>
      <div class="p-2 text-bg-base-i4">base-i4</div>
    </div>
  </div>

  <h2 class="mt-5">Images</h2>
  <div class="row">
    {#each images as image, index}
      <div class="col-md-4 text-center">
        <img
          src="/images/optimized/profile/{image}"
          alt="profile {index}"
          class="img-fluid mb-4"
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

  <h2 class="mt-5">Typography</h2>
  <div class="card card-body">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>
      Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
      eum laboriosam nihil debitis ex praesentium dolore quas illum dolorem
      alias, nobis dolorum neque omnis officiis quaerat error, repellendus
      voluptas cupiditate.
    </p>
    <p class="lead">
      Lead Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quasi est obcaecati debitis quibusdam atque repellat unde assumenda cumque
      consequuntur tempora pariatur recusandae, odio reiciendis itaque numquam
      aperiam maiores esse voluptatum.
    </p>
  </div>

  <h2 class="mt-5">Font</h2>

  {#snippet fontFamily(fontFamily: string, fontType: string)}
    <div class="font-{fontType.toLowerCase()}">
      <h3>{fontFamily}</h3>
      <div class="text-gray mt-n2">
        {fontType} <code class="small">.font-{fontType.toLowerCase()}</code>
      </div>

      <div class="ps-4">
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
        a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
        1 2 3 4 5 6 7 8 9 0<br />
        ! @ # $ % ^ & * ( ) &#123; &#125; [ ] &lt; &gt; ? ~ ` " ' ; : + = - _
      </div>
    </div>
  {/snippet}

  <div class="card card-body gap-3">
    {@render fontFamily('Urbanist', 'Sans-Serif')}
    {@render fontFamily('Merriweather', 'Serif')}
    {@render fontFamily('Patrick Hand', 'Cursive')}
    {@render fontFamily('Fira Code', 'Monospace')}
  </div>

  <div class="mt-4">
    <h2>Tables</h2>
    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="mt-4">
    <h2>TESTS!!</h2>
    <div class="dropdown">
      <!-- <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
        Dropdown link
      </a> -->

      <GIconBtn
        icon="home"
        title="Test"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
