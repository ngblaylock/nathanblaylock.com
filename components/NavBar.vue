<template>
  <b-container>
    <nav class="navbar">
      <ul class="list-unstyled d-flex justify-content-center justify-content-sm-end">
        <li>
          <NuxtLink to="/">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About Nathan</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </b-container>
</template>

<style lang="scss" scoped>
.navbar {
  padding: 12px 0;
  a {
    display: block;
    padding: 8px 12px;
    font-weight: 600;
    font-size: 1.25rem;
    &:hover{
      color: $blue-700;
    }
  }
}
@include media-breakpoint-down(sm){
  .navbar{
    a{
      font-size: 1em;
      padding: 6px 8px;
    }
  }
}
</style>