<script lang="ts">
  import Seo from '$components/Seo.svelte';

  let checkboxItems = [
    {
      label: 'Check me out',
      value: 1,
      hint: "We'll never share your email with anyone else.",
    },
    {
      label: 'Check me out',
      value: 2,
    },
  ];
  let radioItems = [
    {
      label: 'Radio Item 1',
      value: 1,
    },
    {
      label: 'Radio Item 2',
      value: 2,
    },
  ];
  let radioGroup = $state(1);
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
      <GTextInput label="Password" type="password" />
      <GCheckboxGroup items={checkboxItems} legend="Checkbox Group" />
      <GRadioGroup
        items={radioItems}
        bind:group={radioGroup}
        legend="Radio Group"
      />
      <div>
        <GSegmentedControl items={radioItems} bind:group={radioGroup} />
      </div>
      <div>
        <GBtn type="submit" variant="secondary">Submit</GBtn>
      </div>
    </div>
  </form>
</div>
