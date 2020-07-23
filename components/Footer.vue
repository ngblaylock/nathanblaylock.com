<template>
  <footer class="bg-danger text-white text-center p-3">
    <ul class="list-unstyled">
      <li>
        <i class="far fa-copyright"></i>
        Nathan Blaylock, {{ currentYear }}
      </li>
      <li>
        <a href="https://github.com/ngblaylock" target="_blank">
          <i class="fab fa-github"></i> GitHub
        </a>
      </li>
      <li>
        <a href="https://docs.nathanblaylock.com" target="_blank">
          <i class="fab fa-markdown"></i> Docs
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 0;
  li {
    display: inline-block;
    padding: 0 10px;
  }
}
a {
  color: #e8e8e8;
  &:hover {
    color: white;
  }
}
</style>