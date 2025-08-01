<script lang="ts">
  import DevToolbar from '$components/DevToolbar.svelte';
  import Footer from '$components/Footer.svelte';

  let lines = $state(20);

  const navItems = {
    brand: {
      src: 'https://picsum.photos/200',
      label: 'App Name',
      href: '/uikit/components/app-nav',
    },
    links: [
      {
        icon: 'home',
        label: 'Home',
        href: '/uikit/components/app-nav',
        active: true,
      },
      {
        icon: 'delete',
        label: 'Trash Can',
        href: '/uikit/components/app-nav',
      },
      {
        icon: 'darkMode',
        label: 'Theme',
        href: '/uikit/components/app-nav',
      },
      {
        icon: 'edit',
        label: 'Edit',
        href: '/uikit/components/app-nav',
      },
      {
        src: '/images/optimized/profile/blaylock-nathan.jpg',
        label: 'Profile',
        href: '/uikit/components/app-nav',
      },
    ],
  };
</script>

<DevToolbar />
<GAppNav {navItems}>
  <div class="flex-fill d-flex flex-column">
    <main class="flex-fill">
      <div class="container">
        <GBtn
          variant="secondary"
          onclick={() => (lines = lines === 20 ? 2 : 20)}
        >
          Toggle
        </GBtn>
        <GDevNote class="mt-4">
          I think the .app-nav-brand should be optionally a link, or just a div. I would assume most apps would have the first item in their appNav be a Home link. Especially since the mobile version doesn't even show the brand. With Jot for example, you would never be able to get back to the homepage if the first link wasn't the home item.
        </GDevNote>
        {#each Array(lines) as _x}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            labore sit voluptas expedita tempore numquam porro veniam, iure
            repellat et asperiores soluta quaerat autem. Eveniet a nobis ratione
            quos optio?
          </p>
        {/each}
      </div>
    </main>
    <Footer />
  </div>

  <!-- {#snippet appNav()}
    <a
      href="/uikit/components/app-nav"
      class="app-nav-brand"
    >
      <img
        src="https://picsum.photos/200"
        alt=""
      />
      <div class="app-nav-brand-text">App Name</div>
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link active"
    >
      <GIcon name="book" />
      Journal
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GIcon name="plus" />
      To Do List
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GIcon name="formatBlockquote" />
      Quotes
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GIcon name="delete" />
      Trash Can
    </a>
    <a
      href="/uikit/components/app-nav"
      class="app-nav-link"
    >
      <GAvatar src="/images/optimized/profile/blaylock-nathan.jpg" />
      Profile
    </a>
  {/snippet} -->
</GAppNav>
