<script lang="ts">
  import DevToolbar from '$components/DevToolbar.svelte';
  import Footer from '$components/Footer.svelte';
  import type { AppNavItems } from 'nathanblaylock.com';

  let lines = $state(20);
  let snLines = $state(2);

  const navItems: AppNavItems = {
    brand: {
      src: 'https://picsum.photos/200',
      label: 'App Name',
      // href: '/',
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
  <GSideNav header="Side Nav">
    <div class="flex-fill d-flex flex-column">
      <main class="flex-fill">
        <div class="container">
          <GBtn
            variant="secondary"
            onclick={() => (lines = lines === 20 ? 2 : 20)}
          >
            Toggle
          </GBtn>
          {#each Array(lines) as _x}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, labore sit voluptas expedita tempore numquam porro
              veniam, iure repellat et asperiores soluta quaerat autem. Eveniet
              a nobis ratione quos optio?
            </p>
          {/each}
        </div>
      </main>
      <Footer />
    </div>

    {#snippet sideNavContent()}
      <GBtn
        variant="secondary"
        onclick={() => (snLines = snLines === 40 ? 2 : 40)}
      >
        Toggle
      </GBtn>
      <ul>
        {#each Array(snLines) as x}
          <li>Foo {x}</li>
        {/each}
      </ul>
    {/snippet}

    {#snippet sideNavTools()}
      <GIconBtn
        variant="base-i4"
        icon="plus"
        title="Add"
      />
      <GIconBtn
        variant="base-i4"
        icon="brandFirebase"
        title="Firebase"
      />
    {/snippet}
  </GSideNav>
</GAppNav>
