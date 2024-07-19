<script lang="ts">
  import { browser } from '$app/environment';
  
  let dark = false;

  function setTheme(theme:'dark' | 'light' = 'light'){
    if(theme === 'dark'){
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      dark = true;
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute('data-bs-theme');
      dark = false;
    }
  }

  function toggleTheme() {
    const theme = localStorage.getItem('theme');
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark')
    }
  }


  if (browser) {
    const theme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    setTheme(theme);
  }
</script>

<svelte:head>
  <script>
    window.updateTheme = function () {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      }
    };
    updateTheme();
  </script>
</svelte:head>

<div class="theme-switcher-container">
  <input id="theme-switcher" type="checkbox" on:click={toggleTheme} bind:checked={dark} />
  <label for="theme-switcher">Theme Switcher</label>
</div>

<style lang="scss">
  .theme-switcher-container {
    position: relative;
    background: blue;
    input#theme-switcher[type='checkbox'] {
      font-size: 0.01em;
      width: 0;
      height: 0;
      opacity: 0;
      user-select: none;
      pointer-events: none;
      &:checked + label[for='theme-switcher']::after {
        left: 0.8rem;
        // Moon
        background-image: escape-svg(
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#{$body-color-dark}"><path d="M20.508 16.966C16.074 16.96 12.217 13.677 11.612 9.16c-.3-2.246.255-4.409 1.414-6.161-.402 0-.809.027-1.219.082-4.927.661-8.386 5.19-7.726 10.116.66 4.927 5.189 8.386 10.116 7.726 2.681-.36 4.927-1.865 6.311-3.956z" /></svg>')
        );
      }
    }
    label[for='theme-switcher'] {
      background: var(--bs-base-1);
      border: 1px solid var(--bs-base-i4);
      font-size: 0;
      height: $line-height-base * 1rem;
      width: $line-height-base * 1.5rem;
      display: inline-block;
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      border-radius: $border-radius-pill;
      &::after {
        content: '';
        background: var(--bs-base-4);
        height: $line-height-base * 0.8rem;
        width: $line-height-base * 0.8rem;
        border-radius: $border-radius-pill;
        transition: $transition-base;
        position: absolute;
        left: 0.2rem;
        // Sun
        background-image: escape-svg(
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#{$body-color}" d="M12 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm7.428 5.866a1 1 0 0 0-1-1.732l-1.732 1a1 1 0 0 0 1 1.732l1.732-1ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-8.33 2.5a1 1 0 0 1-.366 1.366l-1.732 1a1 1 0 0 1-1-1.732l1.732-1a1 1 0 0 1 1.366.366ZM13 18a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm3.33-3.5a1 1 0 0 1 1.366-.366l1.732 1a1 1 0 0 1-1 1.732l-1.732-1a1 1 0 0 1-.366-1.366ZM5.572 7.134a1 1 0 0 0-1 1.732l1.732 1a1 1 0 0 0 1-1.732l-1.732-1Z" /></svg>')
        );
      }
    }
  }
</style>
