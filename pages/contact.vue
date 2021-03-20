<template>
  <div class="container py-5">
    <Seo
      title="Contact"
      description="Contact Nathan Blaylock regarding pricing, services, or to send an encouraging message."
    />
    <div class="row">
      <div class="col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 bg-light p-3">
        <h1 class="mt-0">Contact Me</h1>
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style="display:none;"
        ></iframe>
        <form
          :action="formActionLink"
          method="POST"
          target="hidden_iframe"
          @submit="submitted = true"
        >
          <div class="form-group">
            <label for="name" class="required-field">Name</label>
            <input
              type="text"
              class="form-control"
              name="entry.1993431129"
              id="name"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="required-field">Email address</label>
            <input
              type="email"
              class="form-control"
              name="entry.1054982356"
              id="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="text"
              class="form-control"
              name="entry.849497172"
              id="phone"
            />
          </div>
          <div class="form-group">
            <label for="message" class="required-field">Message</label>
            <textarea
              class="form-control"
              rows="5"
              name="entry.2018583779"
              id="message"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="solve" class="required-field">1+2=</label>
            <input
              type="text"
              class="form-control"
              name="solve"
              id="solve"
              required
              v-model="solveAnswer"
            />
            <p class="small text-muted">Help me keep down on the spam</p>
          </div>
          <div
            v-if="solveAnswer && solveAnswer != 3"
            class="mt-4 alert alert-warning"
          >
            <i class="fas fa-exclamation-triangle"></i>
            Looks like your math is wrong. Try again.
          </div>
          <button type="submit" class="btn btn-danger">Submit</button>
        </form>
        <div v-if="submitted" class="mt-4 alert alert-success">
          Thanks for your submission. I will get back to you as soon as I can.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formActionLink: "https://docs.google.com/forms/spam",
      correctFormActionLink:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRkPhc4WCR3vDvX0l1fvCuq-_2EE1uq6mlVoivGOfdfwSmXw/formResponse",
      incorrectFormAcitonLink: "https://docs.google.com/forms/spam",
      solveAnswer: "",
      submitted: false,
    };
  },
  watch: {
    solveAnswer: function() {
      this.solveAnswer == 3
        ? (this.formActionLink = this.correctFormActionLink)
        : (this.formActionLink = this.incorrectFormAcitonLink);
    },
  },
};
</script>

<style lang="scss">
@import "~assets/style/_custom-vars.scss";

label.required-field::before {
  content: "*";
  color: $danger;
}
</style>
