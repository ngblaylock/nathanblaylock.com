<script lang="ts">
  import Seo from '$components/Seo.svelte';
</script>

<Seo title="Form Elements" hideHeader />
<div class="mb-5">
  <h1>Form Elements</h1>
  <form>
    <div class="vstack">
      <GTextInput
        label="Email address"
        type="email"
        hint="We'll never share your email with anyone else."
      />
      <GTextInput
        label="Password"
        type="password"
      />
      <fieldset>
        <legend>Checkbox Group</legend>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            aria-describedby="check-help"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
          <div id="check-help" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck2" />
          <label class="form-check-label" for="exampleCheck2"
            >Check me out</label
          >
        </div>
      </fieldset>
      <fieldset>
        <legend>Radio Group</legend>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </fieldset>

      <div>
        <div class="btn-check-group">
          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option5"
            autocomplete="off"
            checked
          />
          <label class="btn" for="option5">Checked</label>
          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option6"
            autocomplete="off"
          />
          <label class="btn" for="option6">Radio</label>
          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option7"
            autocomplete="off"
            disabled
          />
          <label class="btn" for="option7">Disabled</label>
          <input
            type="radio"
            class="btn-check"
            name="options-base"
            id="option8"
            autocomplete="off"
          />
          <label class="btn" for="option8">Radio</label>
        </div>
      </div>

      <div>
        <div class="btn-check-group rounded-pill">
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option25"
              autocomplete="off"
              checked
            />
            <label class="btn btn-icon" for="option25">
              <GIcon name="home" size={1.5} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option26"
              autocomplete="off"
            />
            <label class="btn btn-icon" for="option26">
              <GIcon name="chartLine" size={1.5} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option27"
              autocomplete="off"
              disabled
            />
            <label class="btn btn-icon" for="option27">
              <GIcon name="poll" size={1.5} />
            </label>
          </div>
          <div>
            <input
              type="radio"
              class="btn-check"
              name="options-icon"
              id="option28"
              autocomplete="off"
            />
            <label class="btn btn-icon" for="option28">
              <GIcon name="table" size={1.5} />
            </label>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </div>
  </form>
</div>
