<script setup>

import axios from 'axios';
import carddev from '../components/carddev.vue';

</script>

<template>

  <div class="w-full bg-cover bg-center" style="height:32rem; background-image: url('/assets/img/Bg.png');">
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">ZealoFurr</h1>
            </div>
        </div>
    </div>
  
  <section class="container mx-auto px-5 mt-10">
  <div>
    <h1 class="font-bold text-3xl text-center py-4">ZealoFurr</h1>
    <p class="px-0 min-[1100px]:px-[200px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, illo debitis? Ab dolorem molestias consectetur suscipit, animi quas veritatis voluptatum dolore excepturi reiciendis recusandae asperiores optio laboriosam minima atque repellat.</p>
  </div>
  <h1 class=" pt-24 text-center font-bold text-3xl">Team Member</h1>
  </section>


  <div class="p-10 grid min-[1009px]:grid-cols-3 grid-cols-1 gap-5">
<div class="container mx-auto px-5 mt-10" v-for="developer in developers" :key="developer.id">

    <carddev :developer="developer"/>
  </div>

</div> 


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


