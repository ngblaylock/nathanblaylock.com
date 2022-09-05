<template>
  <b-container>
    <b-row>
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-sm-6 col-md-4 mb-4 text-center"
      >
        <NuxtLink :to="`/projects/${project.slug}`" class="img-link">
          <NuxtImg
            :src="project.img"
            class="img-fluid"
            :alt="project.title"
            width="600"
            height="400"
          />
        </NuxtLink>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Cookbook',
          img: '/img/projects/cookbook/',
        },
        {
          title: 'Smithfield CoC',
          img: '/img/projects/smithfield-chamber/',
        },
        {
          title: 'EGS',
          img: '/img/projects/extract-gsheet/',
        },
        {
          title: 'Placeholdate',
          img: '/img/projects/placeholdate/',
        },
        {
          title: 'SmallSat',
          img: '/img/projects/smallsat/',
        },
        {
          title: 'Group Sale Tracker',
          img: '/img/projects/group-sale-tracker/',
        },
        {
          title: 'JRWCPRTAX',
          slug: 'jrwcpatax',
          img: '/img/projects/jrwcpatax/jrwcpatax.png',
        },
        {
          title: 'Busy Bee Odd Jobs',
          slug: 'busy-bee-odd-jobs',
          img: '/img/projects/busy-bee-odd-jobs/busy-bee-odd-jobs.png',
        },
        {
          title: 'Bingo',
          slug: 'bingo',
          img: '/img/projects/bingo/bingo.png',
        },
        {
          title: 'Enoch Initiative',
          img: '/img/projects/',
        },
        {
          title: 'SCCE',
          slug: 'scce',
          img: '/img/projects/scce/scce.png',
        },
        {
          title: 'Psychology',
          slug: 'psychology',
          img: '/img/projects/psychology/psychology.png',
        },
      ],
    }
  },
  mounted() {
    $nuxt.$emit('change-page-title', 'Projects')
  },
}
</script>

<style lang="scss" scoped>
.img-link {
  display: block;
  transition: $transition-base;
  &:hover {
    box-shadow: $box-shadow;
  }
}
</style>