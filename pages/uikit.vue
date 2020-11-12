<template>
  <div class="container pb-5">
    <div class="row">
      <div class="col-sm-12">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <p>
          Paragraph — Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Blanditiis sed necessitatibus repellat maiores quibusdam suscipit
          culpa veritatis rerum laboriosam aut quia animi, adipisci nemo nam
          voluptas molestiae facere molestias officiis!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          sed necessitatibus repellat maiores quibusdam suscipit culpa veritatis
          rerum laboriosam aut quia animi, adipisci nemo nam voluptas molestiae
          facere molestias officiis!
        </p>

        <h2>Colors</h2>
      </div>
      <div class="col-sm-3">
        <div class="p-3 bg-danger text-white">
          #680909
        </div>
      </div>
      <div class="col-sm-3">
        <div class="p-3 bg-primary text-white">
          #093589
        </div>
      </div>
      <div class="col-sm-3">
        <div class="p-3 bg-secondary text-white">
          #6C757D
        </div>
      </div>
      <div class="col-sm-3">
        <div class="p-3 bg-light">
          #F8F8F8
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h2>Profile Images</h2>
      </div>
      <div class="col-sm-3">
        <img src="/img/blaylock-nathan-1.png" class="img-fluid" />
        <small class="text-muted">PNG 800x600</small>
      </div>
      <div class="col-sm-3">
        <img src="/img/blaylock-nathan-1-square.png" class="img-fluid" />
        <small class="text-muted">PNG 400x400</small>
      </div>
      <div class="col-sm-3">
        <img src="/img/blaylock-nathan-2.png" class="img-fluid" />
        <small class="text-muted">PNG 800x600</small>
      </div>
      <div class="col-sm-3">
        <img src="/img/blaylock-nathan-2-square.png" class="img-fluid" />
        <small class="text-muted">PNG 400x400</small>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h2>Logos</h2>
      </div>
      <div class="col-sm-2">
        <div class="bg-light p-3">
          <img src="/img/logo-red-nathan-blaylock-media.svg" class="img-fluid">
        </div>
          <small class="text-muted">SVG</small>
      </div>
      <div class="col-sm-2">
        <div class="bg-light p-3">
          <img src="/img/logo-red-nathan-blaylock-media.png" class="img-fluid">
        </div>
          <small class="text-muted">PNG</small>
      </div>
      <div class="col-sm-2">
        <div class="bg-light p-3">
          <img src="/img/logo-black-nathan-blaylock-media.svg" class="img-fluid">
        </div>
          <small class="text-muted">SVG</small>
      </div>
      <div class="col-sm-2">
        <div class="bg-light p-3">
          <img src="/img/logo-black-nathan-blaylock-media.png" class="img-fluid">
        </div>
          <small class="text-muted">PNG</small>
      </div>
      <div class="col-sm-2">
        <div class="bg-secondary p-3">
          <img src="/img/logo-white-nathan-blaylock-media.svg" class="img-fluid">
        </div>
          <small class="text-muted">SVG</small>
      </div>
      <div class="col-sm-2">
        <div class="bg-secondary p-3">
          <img src="/img/logo-white-nathan-blaylock-media.png" class="img-fluid">
        </div>
          <small class="text-muted">PNG</small>
      </div>
    </div>

    <h2>Gallery <code>&lt;BaguetteBox ></code></h2>
    <BaguetteBox :gallery="gallery" name="gallery-3" />
    <div class="text-center">
      <BaguetteBox :gallery="gallery" button />
      <BaguetteBox :gallery="gallery" name="gallery-2" button button-text='Launch Gallery 2' button-color="danger" />
    </div>
      <table class="table table-sm table-hover mt-3">
        <thead class="bg-light">
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gallery</td>
            <td>Array of Objects: object.img, object.thumbnail, object.title</td>
            <td></td>
            <td>*</td>
          </tr>
          <tr>
            <td>name</td>
            <td>String</td>
            <td>"gallery"</td>
            <td></td>
          </tr>
          <tr>
            <td>button</td>
            <td>Boolean</td>
            <td>false</td>
            <td></td>
          </tr>
          <tr>
            <td>button-color</td>
            <td>String</td>
            <td>"primary"</td>
            <td></td>
          </tr>
          <tr>
            <td>button-text</td>
            <td>String</td>
            <td>"Launch Gallery"</td>
            <td></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "UiKit",
  head: {
    title: "UI Kit",
    meta: [
      {
        name: "robots",
        content: "noindex,nofollow",
      },
    ],
  },
  data: function(){
    return {
      gallery: [
        {
          img: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
          thumbnail: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
          title: 'Test'
        },
        {
          img: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg',
          thumbnail: 'https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg',
          title: 'Test'
        },
        {
          img: 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg',
          thumbnail: 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg',
          title: 'Test'
        },
      ]
    }
  },
};
</script>