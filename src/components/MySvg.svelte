<script lang="ts">
  import { onMount } from 'svelte';

  export let name: string = 'Adobe-Illustrator';
  let myIcon = '';
  
  onMount(async() => {
    const module = await import(`$img/project-icons/${name}.svg?raw`);
    myIcon = module.default;
  })
</script>


{name} - {@html myIcon}
