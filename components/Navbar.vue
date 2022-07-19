<template>
  <div class="flex">
    <nav class="p-4 flex ml-auto">
      <router-link class="text-secondary hover:text-light px-4 py-2" v-for="page in pages" :key="page.to" :to="page.to">
        {{ page.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { to: '/', name: 'Projects' },
        { to: '/about', name: 'About Nathan' },
        { to: '/contact', name: 'Contact' },
      ],
    }
  },
}
</script>