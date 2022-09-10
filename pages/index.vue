<template>
  <b-container>
    <b-row>
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-sm-6 col-md-4 mb-4 text-center"
      >
        <NuxtLink :to="`/projects/${project.slug}`" class="img-link rounded">
          <NuxtImg
            :src="project.img"
            class="img-fluid rounded"
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
          slug: 'cookbook',
          img: '/img/projects/cookbook/cookbook.png',
        },
        {
          title: 'Smithfield Chamber of Commerce',
          slug: 'smithfield-chamber-of-commerce',
          img: '/img/projects/smithfield-chamber-of-commerce/smithfield-chamber-of-commerce.png',
        },
        {
          title: 'Extract GSheet',
          slug: 'extract-gsheet',
          img: '/img/projects/extract-gsheet/extract-gsheet.png',
        },
        {
          title: 'Placeholdate',
          slug: 'placeholdate',
          img: '/img/projects/placeholdate/placeholdate.png',
        },
        {
          title: 'SmallSat',
          slug: 'smallsat',
          img: '/img/projects/smallsat/smallsat.png',
        },
        {
          title: 'Group Sale Tracker',
          slug: 'group-sale-tracker',
          img: '/img/projects/group-sale-tracker/group-sale-tracker.png',
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
          slug: 'enoch-initiative',
          img: '/img/projects/enoch-initiative/enoch-initiative.png',
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
  box-shadow: $box-shadow;
  &:hover {
    box-shadow: $box-shadow-lg;
  }
}
</style>