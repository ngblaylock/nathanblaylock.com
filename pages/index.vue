<template>
  <b-container>
    <b-row>
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col-sm-6 col-md-4 mb-4 text-center"
      >
        <NuxtLink :to="`/projects/${project.slug}`">
          <NuxtImg :src="project.img" class="img-fluid" :alt="project.title" width="600" height="400" />
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
          title: 'Busy Bee Odd Jobs',
          slug: 'busy-bee-odd-jobs',
          img: '/img/projects/busy-bee-odd-jobs/busy-bee-odd-jobs.png',
        },
        {
          title: 'Bingo',
          img: '/img/projects/bingo/bingo.png',
        },
        {
          title: 'JRWCPRTAX',
          slug: 'jrwcpatax',
          img: '/img/projects/jrwcpatax/jrwcpatax.png',
        },
        {
          title: 'Cookbook',
          img: '/img/projects/cookbook/',
        },
        {
          title: 'Group Sale Tracker',
          img: '/img/projects/group-sale-tracker/',
        },
        {
          title: 'Smithfield CoC',
          img: '/img/projects/smithfield-chamber/',
        },
        {
          title: 'Psychology',
          img: '/img/projects/psychology/psychology.png',
        },
        {
          title: 'SCCE',
          img: '/img/projects/scce/scce.png',
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
          title: 'SDL',
          img: '/img/projects/',
        },
      ],
    }
  },
  mounted() {
    $nuxt.$emit('change-page-title', 'Projects')
  },
}
</script>
