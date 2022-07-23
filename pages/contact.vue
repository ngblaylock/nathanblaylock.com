<template>
  <b-container>
    <b-row>
      <div class="col-md-5 order-md-last">
        <p class="h4 text-gray">Think my work is interesting? Let me know what you think.</p>
      </div>
      <div class="col-md-7">
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style="display: none"
        ></iframe>
        <div v-if="submitted" class="mt-4 p-3 rounded border border-secondary text-secondary">
          <div v-if="solveAnswer == 3">Thanks for your submission. I will get back to you as soon as I can.</div>
          <div v-else>Looks like you didn't solve the answer correctly. That message is probably lost in space somewhere.</div>
        </div>
        <form
          v-show="!submitted"
          :action="formActionLink"
          method="POST"
          target="hidden_iframe"
          @submit="submitted = true"
        >
          <div class="form-group">
            <label for="contact-name">Name</label>
            <input
              type="text"
              class="form-control"
              id="contact-name"
              name="entry.1993431129"
              required
            />
          </div>
          <div class="form-group">
            <label for="contact-email">Email</label>
            <input
              type="email"
              class="form-control"
              id="contact-email"
              name="entry.1054982356"
              required
            />
          </div>
          <div class="form-group">
            <label for="contact-message">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="contact-message"
              rows="6"
              name="entry.2018583779"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="contact-email">1+2=</label>
            <input
              type="text"
              class="form-control"
              id="contact-email"
              name="entry.1054982356"
              v-model="solveAnswer"
              required
            />
            <small class="text-gray">Help me keep down on spam.</small>
          </div>
          <button class="btn btn-secondary" type="submit">Submit</button>
        </form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      formActionLink: 'https://docs.google.com/forms/spam',
      correctFormActionLink:
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfRkPhc4WCR3vDvX0l1fvCuq-_2EE1uq6mlVoivGOfdfwSmXw/formResponse',
      incorrectFormAcitonLink: 'https://docs.google.com/forms/spam',
      solveAnswer: '',
      submitted: false,
    }
  },
  watch: {
    solveAnswer: function () {
      this.solveAnswer == 3
        ? (this.formActionLink = this.correctFormActionLink)
        : (this.formActionLink = this.incorrectFormAcitonLink)
    },
  },
  mounted() {
    $nuxt.$emit('change-page-title', 'Contact')
  },
}
</script>
