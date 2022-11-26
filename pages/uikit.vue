<template>
  <div>
    <SEO title="UI Kit" norobots />
    <b-container>
      <h3>Colors</h3>
      <b-row class="mb-5">
        <div class="col-md" v-for="color in theme" :key="color.color">
          <div
            :style="`background-color: var(--${color.color});`"
            class="p-4"
            :class="`text-${color.text}`"
          >
            <div class="mb-3 h5">
              <strong>${{ color.color }}</strong>
            </div>
            <div>{{ getHex(color.color) }}</div>
          </div>
        </div>
      </b-row>
      <b-row>
        <div class="col-md-4" v-for="color in colors" :key="color">
          <div
            v-for="x in 9"
            :key="x"
            :style="`background-color: var(--${color}-${x}00);`"
            class="px-3 py-1 d-flex justify-content-between"
            :class="x > 3 ? 'text-white' : 'text-dark'"
          >
            <span>${{ color }}-{{ x }}00</span>
            <span>{{ getHex(color, x) }}</span>
          </div>
        </div>
      </b-row>
    </b-container>
    <b-container>
      <h3 class="mt-5">Images</h3>
      <b-row>
        <div class="col-sm-3">
          <NuxtImg
            src="/img/blaylock-nathan-1-square.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-sm-3">
          <NuxtImg src="/img/blaylock-nathan-1.png" alt="" class="img-fluid" />
        </div>
        <div class="col-sm-3">
          <NuxtImg
            src="/img/blaylock-nathan-2-square.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-sm-3">
          <NuxtImg src="/img/blaylock-nathan-2.png" alt="" class="img-fluid" />
        </div>
      </b-row>
    </b-container>
    <b-container>
      <h3 class="mt-5">Logos</h3>
      <b-row>
        <div v-for="(logo, index) in logos" :key="index" class="col-sm-2">
          <div class="bg-light p-3">
            <NuxtImg
              :src="`/img/logo-${logo.color}-nathan-blaylock-media.${logo.extension}`"
              alt=""
              class="img-fluid"
            />
            <div class="mt-2 text-center">
              {{ logo.extension.toUpperCase() }}
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
    <b-container>
      <h3 class="mt-5">
        Font -
        <a
          href="https://fonts.google.com/specimen/Urbanist?query=urbanist"
          target="_blank"
          >Urbanist</a
        >
      </h3>
      <div class="bg-light p-3">
        <p class="lead mb-0">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
          a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
          1 2 3 4 5 6 7 8 9 0<br />
          ! @ # $ % ^ &amp; * ( ) { } [ ] &lt; &gt; ? ~ &grave; &quot; &apos; ;
          : + = - _
        </p>
      </div>
    </b-container>
    <b-container>
      <h3 class="mt-5">Typography</h3>
      <div class="bg-light p-3">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
      </div>
    </b-container>
    <b-container>
      <Debug>{{$router.options}}</Debug>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['red', 'blue', 'gray'],
      theme: [
        { color: 'primary', text: 'white' },
        { color: 'secondary', text: 'white' },
        { color: 'light', text: 'dark' },
        { color: 'dark', text: 'white' },
        { color: 'gray', text: 'white' },
      ],
      logos: [
        { color: 'red', extension: 'png' },
        { color: 'red', extension: 'svg' },
        { color: 'black', extension: 'png' },
        { color: 'black', extension: 'svg' },
        { color: 'white', extension: 'png' },
        { color: 'white', extension: 'svg' },
      ],
    }
  },
  mounted() {
    $nuxt.$emit('change-page-title', 'UI Kit')
  },
  methods: {
    getHex(color, num) {
      if (process.client) {
        if (num) {
          return getComputedStyle(document.documentElement).getPropertyValue(
            `--${color}-${num}00`
          )
        } else {
          return getComputedStyle(document.documentElement).getPropertyValue(
            `--${color}`
          )
        }
      }
    },
  },
}
</script>