<script setup>

import axios from 'axios';
import carddev from '../components/carddev.vue';

</script>

<template>
<main class="bg-[#cdc6ce]">

  <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url('/assets/img/Bg.png');">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">ZealoFurr</h1>
            </div>
        </div>
    </div>
  
  <section class="container mx-auto px-5 mt-10">
  <div>
    <h1 class="font-bold text-3xl text-center py-4">Zela and The Furries Diary</h1>
    <p class="px-0 min-[1100px]:px-[200px]">Dear Diary, ZealoFurr Interactive was founded on 19th May 2023 to Develop and Publish Video Games from engaging few Furry Communities into a small team for those who wants to collaborate, having fun, and thrive in the Game Industry.     
</p>
<p class="px-0 min-[1100px]:px-[200px]">
  We realized that Furries are not just the community and we are not just all about Game Development, there's more than that. Each person have pride in Furry Fandom to be one of the thriving creators, talents, players, and developers in the 21st Century. We are reaching out Furry Enthusiasts of different kind of roles, like Artist, Cosplayers, Musicians, Animators, Story Writers, Electronic Geeks, Tubers, Role Players, Gamers, Programmers, and so much more talents. We are inviting you all to the community for collaborations and opportunities.
</p>
  </div>
  <h1 class=" pt-24 text-center font-bold text-3xl">Team Member</h1>
  </section>


  <div class="p-10 grid min-[1009px]:grid-cols-3 grid-cols-1 gap-5">
<div class="container mx-auto px-5 mt-10" v-for="developer in developers" :key="developer.id">

    <carddev :developer="developer"/>
  </div>

</div> 
</main>

</template>

<script>
export default {
  props: ['developer'],

  data() {
    return {
      developers: []
    }
  },
  methods: {
    setDevelopers(data) {
      this.developers = data
    }
  },
  mounted () {
    axios.get('https://zfback.onrender.com/developer')
  .then((response) => this.setDevelopers(response.data))
    .catch((error) => console.log(error))




  }
}
</script>


