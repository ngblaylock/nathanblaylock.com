<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 bg-light my-4 p-3">
        <h1>Contact Me</h1>
        <div id="submission" v-if="submitted">
          <div
            class="alert alert-success"
          >Thanks for your submission. I will get back to you as soon as I can.</div>
        </div>

        <iframe name="hidden_iframe" style="display:none;" ></iframe>

        <!-- onload="if(submitted) {alert('Thanks,');}" -->
        <form
          :action="formActionLink"
          method="post"
          @submit="submitted = true"
          target="hidden_iframe" 
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="entry.1993431129" id="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" name="entry.1054982356" id="email" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="text" class="form-control" name="entry.849497172" id="phone" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" rows="5" name="entry.2018583779" id="message" required></textarea>
          </div>
          <div class="form-group">
            <label for="solve">5-2=</label>
            <input
              type="text"
              class="form-control"
              name="solve"
              id="solve"
              required
              v-model="solveAnswer"
            />
            <p class="small text-muted">Help us keep down on the spam</p>
          </div>
          <button type="submit" class="btn btn-danger">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      submitted: false,
      formActionLink: "https://docs.google.com/forms/spam",
      correctFormActionLink:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRkPhc4WCR3vDvX0l1fvCuq-_2EE1uq6mlVoivGOfdfwSmXw/formResponse",
      incorrectFormAcitonLink: "https://docs.google.com/forms/spam",
      solveAnswer: ""
    };
  },
  methods: {
    ud() {
      console.log("Submitted");
    }
  },
  watch: {
    solveAnswer: function() {
      this.solveAnswer == 3
        ? (this.formActionLink = this.correctFormActionLink)
        : (this.formActionLink = this.incorrectFormAcitonLink);
    }
  }
};
</script>

<style lang="scss">
.honeyHide {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
}
</style>