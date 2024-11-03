<script>
  import * as E from '$components/Elemental';
  import MyStack from './MyStack.svelte';
</script>

<E.SEO title="About" />

<div class="row align-items-center" data-aos="fade-up">
  <div class="col-sm-3">
    <img
      src="/images/optimized/profile/sm_blaylock-nathan.jpg"
      alt="Nathan Blaylock Portrait"
      class="rounded img-fluid"
    />
  </div>
  <div class="col-sm-9">
    <p>
      Nathan Blaylock is a User Experience Engineer who loves finding creative solutions for complex
      problems. Nathan began his journey as a graphic designer who found his passion for designing
      usable and functional websites. Combining that design skill with his interest in web
      development has truly set him apart among his peers. In website development, Nathan has worked
      extensively with <a href="https://jamstack.org/" target="_blank">Jamstack</a> technology in both
      professional and personal projects.
    </p>
    <p>
      Nathan has experience with a variety of multimedia skills including graphic design,
      photography, branding, videography, and more. Nathan has a Master's of Arts from Utah State
      University where he studied User Experience Design. Nathan is also UX Certified by the <a
        href="https://www.nngroup.com/"
        target="_blank">Nielsen Norman Group</a
      >, the world leader in research-based user experience design.
    </p>
  </div>
</div>

<div class="row mt-3 mt-md-5" data-aos="fade-up">
  <div class="col-md-6">
    <h3>Career</h3>
    <div class="grouping">
      <h4>Space Dynamics Laboratory</h4>
      <ul>
        <li>Developed and designed internal web applications and external websites.</li>
        <li>
          Implemented the Small Satellite Conference virtual conference website for 2020 and 2021
          during the pandemic.
        </li>
        <li>UX/UI Lead</li>
      </ul>
      <h4 class="mt-4">Utah State University</h4>
      <ul>
        <li>
          Lead multimedia efforts through graphic design, videography, branding, basic tech support,
          and photography.
        </li>
        <li>Lead design and development on various department and program websites.</li>
      </ul>
      <h4 class="mt-4">Freelance</h4>
      <ul>
        <li>Designed and developed small to medium size websites for businesses.</li>
        <li>Delivered quality branding and graphic design when needed.</li>
      </ul>
    </div>
    <h3 class="mt-5">Education</h3>
    <div class="grouping">
      <h4>Utah State University</h4>
      <ul>
        <li>
          <strong>Master of Arts</strong> - Instructional Technology and Learning Sciences. Area of study:
          User Experience Design.
        </li>
        <li>
          <strong>Bachelor of Science</strong> - Major in Art and Design, double minor in Computer Science
          and Multimedia Development. Areas of study: Graphic Design, Web Development, and other multimedia
          skills.
        </li>
      </ul>
    </div>
  </div>
  <div class="col-md-6 mt-5 mt-md-0 mb-5" data-aos="fade-up">
    <h3>Tools &amp; Technology</h3>
    <div class="grouping">
      <h4>Proficient In</h4>
      <ul>
        <li>Figma, Adobe XD, Sketch</li>
        <li>HTML, Markdown</li>
        <li>CSS, SASS</li>
        <li>Bootstrap 3, 4, 5, Bootstrap Vue, Vuetify</li>
        <li>JS, jQuery, Vue, Svelte, Nunjucks, Alpine</li>
        <li>Eleventy, Nuxt, SvelteKit</li>
        <li>Frontend JS Libraries (day.js, excel.js, chart.js, lodash, etc)</li>
        <li>NPM</li>
        <li>Git, GitHub, Bitbucket</li>
        <li>Jira, Asana, Trello</li>
        <li>Mac, Linux, Windows</li>
        <li>Photoshop, Illustrator, InDesign</li>
        <li>Visual Studio Code</li>
      </ul>
      <h4 class="mt-4">Dabbled In</h4>
      <ul>
        <li>Node.js, Express, PHP</li>
        <li>TypeScript</li>
        <li>Rollup</li>
        <li>Strapi, Firebase, PostgreSQL, MySQL</li>
        <li>Bash, GitHub Actions</li>
      </ul>
      <h4 class="mt-4">Interested to Try</h4>
      <ul>
        <li>React, Angular</li>
        <li>Gatsby, Astro</li>
        <li>Vite, Snowpack</li>
        <li>Electron, NodeGUI</li>
        <li>MongoDB</li>
      </ul>
    </div>
  </div>
  <div class="col">
    <MyStack />
  </div>
</div>

<style lang="scss">
  .grouping {
    border-left: 1px solid $gray-300;
    padding-left: 24px;
    padding-top: 6px;
    h4 {
      margin-top: 0.25em;
      &::before {
        content: '';
        position: absolute;
        margin-top: 8px;
        width: 16px;
        height: 16px;
        border-radius: 20px;
        // background: $primary;
        margin-left: -32px;
        [data-bs-theme='dark'] & {
          background: $red-500;
        }
      }
    }
  }
</style>
