<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

</script>

<template>
<main class="bg-landingbg pb-16">
<div class="container mx-auto px-5 pt-14">
  <div class="mb-5 text-center items-center">
    <h1 class="font-bold text-slate-900 text-3xl">{{ projects.judul }}</h1>
    <h2 class="mt-2 font-medium">{{ projects.terbit }}</h2>
  </div>
    <img class="mx-auto  w-full md:w-3/4" :src=" '../assets/img/' + projects.gambar" alt="...">
    <div class="mt-16  px-0  md:px-[150px]">
 <p class="items-center">{{ projects.baris1 }}</p>
 <p class="pt-5 items-center">{{ projects.baris2 }}</p>  
 <p class="pt-5 items-center">{{ projects.baris3 }}</p>    
</div>
<div class="mt-14">
<img class=" mx-auto  w-full md:w-3/4" :src=" '../assets/img/' + projects.gambar1" alt="...">
<img class="mt-6 mx-auto  w-full md:w-3/4" :src=" '../assets/img/' + projects.gambar2" alt="...">
</div>
    <iframe class="mx-auto mt-24 items-center align-middle w-[400px]  md:w-[560px] md:h-[315px]" :src="projects.video" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

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
    setProject(data) {
      this.projects = data
    }
  },
  mounted () {
    axios.get('https://zfback.onrender.com/projectsdetail/'+this.$route.params.id)
  .then((response) => this.setProject(response.data))
    .catch((error) => console.log(error))




  }
}
</script>

<style>
.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>