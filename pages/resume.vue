<template>
  <div>
    <div class="container py-5 resume">
      <div class="row">
        <div class="col-sm-4">
          <img src="/img/blaylock-nathan.jpg" alt="Nathan Blaylock" class="d-block img-fluid mx-auto" />
        </div>
        <div class="col-sm-8">
          <h1>Resume</h1>

          <h2 class="text-danger">Experience</h2>

          <h3>Multimedia Developer</h3>
          <h4>Utah State University, Emma Eccles Jones College of Education and Human Services</h4>
          <h5>2015–Present</h5>
          <ul>
            <li>Developed and maintained websites to provide a better user experience and interface on 10+ major college websites</li>
            <li>Designed web solutions and responded to feedback from key stakeholders</li>
            <li>Collaborated with USU Trademark and Licensing and ensured proper branding on the college, department, and unit levels</li>
            <li>Created thousands of printed and online marketing and informational materials in multiple team settings</li>
          </ul>

          <h3>Freelance Web and Media Developer</h3>
          <h4>Nathan Blaylock Media</h4>
          <h5>July 2017–Present</h5>
          <ul>
            <li>Designed, optimized, and deployed websites for small businesses</li>
            <li>Designed various print materials for small businesses or customer needs based off of new or existing branding</li>
            <li>Captured photos for special events or marketing content for the client’s personal or business needs</li>
          </ul>

          <h3>USU Web Conference Presenter</h3>
          <h4>Title: Feeding Your Website, Audience-Focused Website Redesign</h4>
          <h5>May 2019</h5>
          <ul>
            <li>Presented to other USU webmasters and content editors the college’s process to design and re-design websites, including details about the kickoff meeting, information architecture, wireframes, mockups, prototypes, and launch</li>
            <li>Taught a workshop on using Adobe XD to web designers on USU campus</li>
          </ul>

          <h2 class="text-danger">Education</h2>

          <h3>Master’s Degree</h3>
          <h4>December 2017, Utah State University</h4>
          <h5>3.96 GPA</h5>
          <ul>
            <li>MLTID – Instructional Technology &amp; Learning Sciences</li>
            <li>Focused on User Experience Design</li>
            <li>Creative Project: Lead designer for a new UX course called “Design Thinking” which is currently a required course for all ITLS graduate students.</li>
          </ul>

          <h3>Bachelor’s Degree</h3>
          <h4>May 2016, Utah State University</h4>
          <h5>3.92 GPA</h5>
          <ul>
            <li>BS – Art &amp; Design</li>
            <li>Minor – Computer Science</li>
            <li>Minor – Multimedia Development</li>
          </ul>

          <h2 class="text-danger">Skills</h2>
          <ul>
            <li>HTML, CSS, Sass, Bootstrap, JavaScript, jQuery, Vue.js</li>
            <li>Photoshop, Illustrator, XD, InDesign</li>
            <li>Visual Studio Code, GitHub, OU Campus, Slack</li>
            <li>Project management software</li>
            <li>Problem solving and communication</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// CUSTOM VARS
@import "~assets/style/_custom-vars.scss";

$fa-spacing: 1.3em;
.resume {
  h2 {
    text-transform: uppercase;
    border-top: 3px solid $secondary;
    padding-top: 7px;
    margin-top: 30px;
  }
  h3 {
    border-top: 1px solid $secondary;
    padding-top: 7px;
  }
  h4 {
    color: $secondary;
    margin-bottom: 2px;
  }
  h5 {
    color: $secondary;
  }
  ul {
    list-style: none;
    padding: 0;
    padding-left: 7px;
  }
  li {
    padding-left: $fa-spacing;
  }
  li:before {
    content: '\f0da'; /* FontAwesome Unicode */
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -$fa-spacing; /* same as padding-left set on li */
    width: $fa-spacing; /* same as padding-left set on li */
    color: $danger;
  }
}
</style>
