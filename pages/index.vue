<template>
  <b-container>
    <b-row>
      <div v-for="(project, index) in projects" :key="index" class="col-sm-6 col-md-4 mb-4 text-center">
        <img :src="`https://via.placeholder.com/400x300?text=${project.title}`" class="img-fluid" alt="">
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data(){
    return {
      projects: [
        {
          title: 'Busy Bee Odd Jobs'
        },
        {
          title: 'Bingo'
        },
        {
          title: 'JRWCPRTAX'
        },
        {
          title: 'Cookbook'
        },
        {
          title: 'Group Sale Tracker'
        },
        {
          title: 'Smithfield CoC'
        },
        {
          title: 'Psychology'
        },
        {
          title: 'SCCE'
        },
        {
          title: 'EGS'
        },
        {
          title: 'Placeholdate'
        },
        {
          title: 'SmallSat'
        },
        {
          title: 'SDL'
        },
      ]
    }
  },
  mounted(){
    $nuxt.$emit('change-page-title', "Projects")
  }
}
</script>
