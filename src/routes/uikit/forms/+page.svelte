<script lang="ts">
  import * as E from '$components/Elemental';
</script>

<div class="mb-5">
  <h1>Form Elements</h1>
  <form>
    <div class="vstack gap-3">
      <div>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div>
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <fieldset>
        <legend>Checkbox Group</legend>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            aria-describedby="check-help"
          />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
          <div id="check-help" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck2" />
          <label class="form-check-label" for="exampleCheck2">Check me out</label>
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
          <label class="form-check-label" for="flexRadioDefault1"> Default radio </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2"> Default checked radio </label>
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
          <input type="radio" class="btn-check" name="options-base" id="option6" autocomplete="off" />
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
          <input type="radio" class="btn-check" name="options-base" id="option8" autocomplete="off" />
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
              <E.Icon name="home" size={1.5} />
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
              <E.Icon name="chartLine" size={1.5} />
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
              <E.Icon name="poll" size={1.5} />
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
              <E.Icon name="table" size={1.5} />
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

<style lang="scss">
  .btn-check-group{
    background: var(--bse-base-2);
    display: inline-flex;
    gap: 2px;
    padding: 4px;
    border-radius: $border-radius;
    border: $border-width solid var(--bse-base-4);
    .btn.btn-icon{
      color: var(--bse-base-i1);
    }
    .btn-check:not(:checked) + .btn:hover{
      background: var(--bse-base-4);
      border-color: var(--bse-base-4);
    }
    .btn-check:checked + .btn{
      background: $primary;
      border-color: $primary;
      color: $white;
    }
  }
</style>