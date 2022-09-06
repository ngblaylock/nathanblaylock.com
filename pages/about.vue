<template>
  <b-container>
    <b-row>
      <div
        class="
          col-8
          offset-2 offset-sm-0
          col-sm-4 col-lg-3
          offset-lg-1
          text-center
        "
      >
        <NuxtImg
          src="/img/blaylock-nathan-1-square.png"
          class="img-fluid"
          alt="Nathan Blaylock Image"
        />
      </div>
      <div class="col-sm-8 col-lg-7 align-self-center">
        <p>
          I am a User Experience Engineer who didn't quite make the cut for the
          USU graphic design program. I found out that my design wasn't "Artsy"
          enough, but as I explored my options I learned that my design style
          was more problem-solving based rather than visually appealing. Not
          that I can't make things visually appealing. I do take in mind a lot
          of functional design. solves complex problems.
        </p>
        <p>
          I am a Frontend Website developer (JAMStack for personal projects) I
          used to be a multimedia specialist so I have skills in photography,
          video, branding, and graphic design. I decided to hone in on my skills
          as a web developer because that was my favorite. I have a Master’s
          degree where I studied UX and a bachelors degree where I studied art,
          computer science, and multimedia development. I am also certified in UX Design by the Nielsen Norman Group I like to be well versed
          in backend dev but frontend is where I shine.
        </p>
      </div>
    </b-row>
    <b-row class="mt-3 mt-md-5">
      <div class="col-md-6">
        <h3>Career</h3>
        <div class="grouping">
          <h4>Space Dynamics Laboratory</h4>
          <ul>
            <li>Internal Websites</li>
            <li>External Websites</li>
            <li>SmallSat Website (Virtual)</li>
            <li>Team UX/UI Lead</li>
          </ul>
          <h4 class="mt-4">Utah State University</h4>
          <ul>
            <li>Multimedia Lead</li>
            <li>Branding</li>
            <li>Websites</li>
            <li>Photography</li>
          </ul>
          <h4 class="mt-4">Freelance</h4>
          <ul>
            <li>Help small to medium size businesses with websites</li>
          </ul>
        </div>
        <h3>Education</h3>
        <div class="grouping">
          <h4>Utah State University</h4>
          <ul>
            <li>
              <strong>Master of Arts</strong> - Instructional Technology and
              Learning Sciences at Utah State University. Area of study: user
              experience design.
            </li>
            <li>
              <strong>Bachelor of Science</strong> - Major in Art and Design,
              minors in Computer Science and Multimedia Development at Utah
              State University. Areas of study: graphic design, web development,
              and other multimedia skills.
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <h3>Tools &amp; Technology</h3>
        <div class="grouping">
          <h4>Proficient In</h4>
          <ul>
            <li>Figma, XD, Sketch</li>
            <li>HTML, MD</li>
            <li>CSS, SASS</li>
            <li>Bootstrap 3, 4, 5, Bootstrap Vue, Vuetify</li>
            <li>JS, jQuery, Vue, Nunjucks, Alpine</li>
            <li>Eleventy, Nuxt</li>
            <li>
              Frontend JS Libraries (day.js, excel.js, chart.js, lodash, etc)
            </li>
            <li>NPM</li>
            <li>Git, GitHub, Bitbucket</li>
            <li>Jira, Asana, Trello</li>
            <li>Mac, Linux, Windows</li>
            <li>Photoshop, Illustrator, InDesign</li>
          </ul>
          <h4 class="mt-4">Dabbled In</h4>
          <ul>
            <li>Node.js, Express, PHP</li>
            <li>Rollup</li>
            <li>Strapi, Firebase, Postgres, MySQL</li>
            <li>Bash</li>
          </ul>
          <h4 class="mt-4">Interested to Try</h4>
          <ul>
            <li>Svelte, React, Angular</li>
            <li>SvelteKit, Gatsby, Astro</li>
            <li>Vite, Snowpack</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.grouping {
  border-left: 1px solid $gray-300;
  padding-left: 24px;
  padding-top: 6px;
  h4 {
    &::before {
      content: '';
      position: absolute;
      margin-top: 8px;
      width: 16px;
      height: 16px;
      border-radius: 20px;
      background: $primary;
      margin-left: -32px;
    }
  }
}
</style>

<script>
export default {
  mounted() {
    $nuxt.$emit('change-page-title', 'About')
  },
}
</script>