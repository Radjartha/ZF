<script setup>
import cardres from '../components/cardres.vue';
import axios from 'axios';
</script>

<template>
<main class="bg-[#cdc6ce]">
<div class="container mx-auto px-5 ">
<div class="p-10 grid grid-cols-1 min-[1009px]:grid-cols-3  gap-5">
  <div class="" v-for="project in projects" :key="project.id">
<cardres :project="project" />
  </div>
</div>

</div>
</main>


</template>
<script>
export default {
  props: ['project'],

  data() {
    return {
      projects: []
    }
  },
  methods: {
    setProjects(data) {
      this.projects = data
    }
  },
  mounted () {
    axios.get('https://zfback.onrender.com/projectsdetail')
  .then((response) => this.setProjects(response.data))
    .catch((error) => console.log(error))




  }
}
</script>