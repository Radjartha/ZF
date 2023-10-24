<script setup>

import { Button } from 'flowbite-vue'
import cardres from '../components/cardres.vue';
import axios from 'axios';
</script>

<template>
  <main class="container mx-auto px-5 ">
    <section id="home" class="pt-24 md:pt-0">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-center px-4 lg:w-1/2">
            <div class="text-center md:text-left">
            <h1 class="text-base font-semibold text-primary md:text-xl">Hellow, my name is Zela as CEO of ZealoFurr Interactive</h1>
            <h1><span class="mt-1 block text-4xl font-bold text-dark lg:text-3xl">Furry Community based in Indonesia to reach out the lost Furries as a home for creators, talents, players, and developers</span></h1>
            </div>
            <h2 class="mb-5 text-lg font-medium text-secondary lg:text-2xl"></h2>
            <p class="hidden md:flex mb-6 font-medium leading-relaxed text-secondary">Di sini kamu bisa menerima dukungan dan apresiasi karya dengan mudah dan menyenangkan sepeti saat kamu ditraktir seorang teman.</p>
            <div class="hidden md:contents ">
            <Button class="" gradient="cyan-blue" href="https://discord.com/invite/DsU65Bwmu2">
            Join Discord Community
            </Button></div>
          </div>
          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="relative mt-2 lg:right-0 lg:mt-9">
              <img src="../assets/img/Main.webp" alt="Sandhika Galih" class="relative z-10 mx-auto max-w-full" />
              <div class="text-center items-center content md:hidden ">
              <p class="mb-5 font-medium leading-relaxed text-secondary">Di sini kamu bisa menerima dukungan dan apresiasi karya dengan mudah dan menyenangkan sepeti saat kamu ditraktir seorang teman.</p>
              <Button class="" gradient="cyan-blue" href="https://discord.com/invite/DsU65Bwmu2">
            Join Discord Community
            </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>




<section id="home" class="pt-24">


<div class="md:px-10 text-center items-center align-middle">
  <h3 class="font-bold uppercase text-crimson text-lg-mb-3">About</h3>
  <h4 class="font-bold text-slate-900 text-3xl mb-5">ZealoFurr Community!</h4>
  <p class=" font-medium mb-10 leading-relaxed md:px-24">ZealoFurr Interactive is a Furry Community based in Indonesia to reach out the lost Furries as a home for creators, talents, players, and developers, and to be the main bridge between all Furry Communities in the Country.</p>
  <Button  gradient="cyan-blue" href="https://discord.com/invite/DsU65Bwmu2">
Join Discord Community
  </Button>
</div>

</section>

<div class="p-10 grid grid-cols-1 min-[1009px]:grid-cols-3 gap-5">
  <div class="" v-for="project in projects" :key="project.id">
<cardres :project="project" />
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
    axios.get('http://localhost:3000/projectsdetail')
  .then((response) => this.setProjects(response.data))
    .catch((error) => console.log(error))




  }
}
</script>
