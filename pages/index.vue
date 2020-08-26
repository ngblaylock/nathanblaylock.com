<template>
  <div>
    <div class="hero-dark-bg py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-4 align-self-start">
            <img
              src="/img/blaylock-nathan-1-square.png"
              alt="Nathan Blaylock"
              class="rounded-circle d-block mx-auto img-fluid"
            />
          </div>
          <div class="col-sm-8 text-white">
            <h1>Hi, I’m Nathan Blaylock.</h1>
            <p class="lead">
              I am a creative professional who helps small businesses reach
              goals on a budget through stunning photography, unique graphic
              design, and a strong web presence.
            </p>
            <p>
              <nuxt-link to="/contact" class="btn btn-light">Request a Quote</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="row py-4">
          <div class="col-sm-4">
            <i class="fas fa-code fa-3x py-3 text-secondary"></i>
            <h2>Web Development</h2>
            <p>
              In a digital age, it is important to reach customers through a
              strong web presence. I take pride in building high quality,
              engaging, and user friendly websites for your target audience.
              Each website I build is custom built, so whether you need a single
              page website, or a few dozen pages, I can help.
            </p>
          </div>
          <div class="col-sm-4">
            <i class="fas fa-image fa-3x py-3 text-secondary"></i>
            <h2>Graphic Design</h2>
            <p>
              A strong brand is important to any size business because it
              provides a cohesive identity and style. Having worked with large
              and small scale businesses, I can help ensure that you have a
              professional and consistent design. Already have a brand? I can
              work with it and suggest improvements.
            </p>
          </div>
          <div class="col-sm-4">
            <i class="fas fa-camera fa-3x py-3 text-secondary"></i>
            <h2>Photography</h2>
            <p>
              Purposeful photos increases trust and communication between a
              business and their clients. Although stock photos can increase
              communication, it can never replace authentic photos. Through well
              planned photo sessions, you will be surprised how authentic photos
              will improve your business.
            </p>
          </div>
          <div class="col-sm-12">
            <p class="text-center">
              <nuxt-link class="btn btn-primary" to="services">More About Services</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center pb-4">My Work</h2>
        </div>

        <div class="col-sm-4 pb-4" v-for="project in projects" :key="project.id">
          <a :href="project.link" target="_blank">
            <img
              :src="'/img/' + project.image"
              :alt="project.name + ' Webpage Graphic'"
              class="img-fluid"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container">
        <div class="row py-5">
          <div class="col-sm-8 offset-sm-2">
            <h2 class="text-center">Testimonial</h2>
            <div class="testimonial testimonial-start d-none d-sm-block">
              <i class="fas fa-quote-left"></i>
            </div>
            <div class="testimonial testimonial-end d-none d-sm-block">
              <i class="fas fa-quote-right"></i>
            </div>
            <p
              class="lead"
            >When I separated from my prior partnership and formed my own CPA firm I knew that one of the first things I would need was a website. Nathan helped me get my website up and going in the short time frame I had to work with.</p>
            <p>He has also been very responsive to website changes. Our firm and many of our clients have been very pleased with the look and functionality of the website. I would definitely recommend using Nathan to develop a website for any purpose.</p>
            <div class="d-flex align-items-center">
              <img
                src="/img/people/jeff.png"
                alt="Jeff Wangsgard"
                class="rounded-circle mr-2"
                style="width: 75px;"
              />
              <p class="mb-0">
                Jeffrey R Wangsgard, Managing Member
                <br />
                <small>Jeffrey R Wangsgard &amp; Associates LLC</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-center pb-4">Request a Quote</h2>
        </div>
        <div class="col-sm-8 offset-sm-2">
          <p
            class="lead text-center"
          >Because every business is different, there is no cookie-cutter pricing guide to display. Get in contact and we will talk about your company goals, and the results you would like to see. I love providing my clients with quality products while keeping my prices below market value. And in case you are wondering, yes, the quote is free, as it should be.</p>
          <p class="text-center">
            <nuxt-link to="/contact" class="btn btn-danger">Request a Quote</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  }
};
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
.testimonial {
  color: #e9e9e9;
  position: absolute;
  font-size: 5em;
  &.testimonial-start {
    left: -0.6em;
    top: 0;
  }
  &.testimonial-end {
    bottom: 0.5em;
    right: -0.6em;
  }
  & ~ p {
    position: relative;
  }
}
</style>
