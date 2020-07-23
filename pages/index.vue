<template>
  <div>
    <div class="hero-dark-bg py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-4 align-self-start">
            <img
              src="/img/blaylock-nathan-square.jpg"
              alt="Nathan Blaylock"
              class="rounded-circle d-block mx-auto img-fluid"
            />
          </div>
          <div class="col-sm-8 text-white">
            <h1>Hi, I’m Nathan Blaylock.</h1>
            <p
              class="lead"
            >I am a Multimedia Developer at Utah State University where I improve the Emma Eccles Jones College of Education and Human Services’ presence through stunning web design and development, graphic design, and photography. With a focus on UX Design, I bring a lot to the table for the end users. See my work below!</p>
            <p>
              <nuxt-link class="btn btn-light" to="resume">Resume</nuxt-link>
              <nuxt-link class="btn btn-light" to="contact">Contact</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="row py-4">
          <div class="col-sm-4 text-center">
            <i class="fas fa-code fa-3x py-3 text-secondary"></i>
            <h2>Web Development</h2>
            <p>Focusing on front-end web development, I thoroughly enjoy using HTML, CSS, and JavaScript to provide the website's first impression.</p>
          </div>
          <div class="col-sm-4 text-center">
            <i class="fas fa-image fa-3x py-3 text-secondary"></i>
            <h2>Graphic Design</h2>
            <p>Experience in graphic design gives me a leg up on making sure the branding, design, and aesthetics of websites meet stakeholder expectations.</p>
          </div>
          <div class="col-sm-4 text-center">
            <i class="fas fa-camera fa-3x py-3 text-secondary"></i>
            <h2>Photography</h2>
            <p>Skill in photography and incorporating them in websites brings authenticity to websites in a way that stock photos could never really replace.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="h1 text-center pb-4">My Work</h2>
        </div>
        
        <div class="col-sm-4 pb-4" v-for="project in projects" :key="project.id">
          <a :href="project.link" target="_blank">
            <img :src="'/img/' + project.image" :alt="project.name + ' Webpage Graphic'" class="img-fluid" />
          </a>
        </div>

      </div>
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="row py-4">
          <div class="col-sm-12">
            <blockquote>
              <p
                class="h2 text-center"
              >“People react positively when things are clear and understandable.”</p>
              <footer class="blockquote-footer text-center">Dieter Rams</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nathan",
      projects: [
        {
          name: "Sorenson Center",
          image: "scce.png",
          link: "http://scce.usu.edu"
        },
        {
          name: "Psychology",
          image: "psychology.png",
          link: "http://psychology.usu.edu"
        },
        {
          name: "Nursing",
          image: "nursing.png",
          link: "http://nursing.usu.edu"
        },
        {
          name: "Jeffrey R Wangsgard",
          image: "jrwcpatax.png",
          link: "http://jrwcpatax.com"
        },
        {
          name: "Busy Bee Odd Jobs",
          image: "busy-bee-odd-jobs.png",
          link: "http://busybeeoddjobs.com"
        },
        {
          name: "Bingo Caller",
          image: "bingo.png",
          link: "http://bingo.nathanblaylock.com"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.hero-dark-bg {
  background: rgb(25, 24, 22);
  background: linear-gradient(
    180deg,
    rgba(25, 24, 22, 1) 0%,
    rgb(37, 35, 34) 100%
  );
}

blockquote > footer {
  font-size: 1.2em;
}
</style>
