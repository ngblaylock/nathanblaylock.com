<script lang="ts">"use strict";
const { class: className = '', size = 48, src, ...restProps } = $props();
// If size is 48 or '48' add 'px'. Otherwise use passed val.
const derivedSize = $derived(isNaN(+size) ? size : `${size}px`);
</script>

<div
  class="d-inline-flex {className}"
  {...restProps}
>
  <div
    class="avatar position-absolute"
    style="width: {derivedSize}; transform: scale(.95)"
  ></div>
  <div
    class="avatar position-relative"
    style="width: {derivedSize}; background-image: url('{src}')"
  ></div>
</div>
