<script lang="ts">
  import Seo from '$components/Seo.svelte';
</script>

<Seo title="Typography" />

<h1>Typography</h1>
<div class="card card-body">
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
  <p>
    Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
    eum laboriosam nihil debitis ex praesentium dolore quas illum dolorem alias,
    nobis dolorum neque omnis officiis quaerat error, repellendus voluptas
    cupiditate.
  </p>
  <p class="lead">
    Lead Paragraph - Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quasi est obcaecati debitis quibusdam atque repellat unde assumenda cumque
    consequuntur tempora pariatur recusandae, odio reiciendis itaque numquam
    aperiam maiores esse voluptatum.
  </p>
</div>

<h2 class="mt-5">Fonts</h2>

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
