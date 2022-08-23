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
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'JRWCPRTAX',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Cookbook',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Group Sale Tracker',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Smithfield CoC',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Psychology',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'SCCE',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'EGS',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'Placeholdate',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'SmallSat',
          img: 'https://via.placeholder.com/400x300',
        },
        {
          title: 'SDL',
          img: 'https://via.placeholder.com/400x300',
        },
      ],
    }
  },
  mounted() {
    $nuxt.$emit('change-page-title', 'Projects')
  },
}
</script>
