<script setup>

import { Button } from 'flowbite-vue'
import cardres from '../components/cardres.vue';
import axios from 'axios';

const logos = [
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Facebook' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Disney' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Airbnb' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Apple' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Spark' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Samsung' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Quora' },
  { src: "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png", alt: 'Sass' },
]

</script>

<template >
  <main class="bg-landingbg">
    <div class="container mx-auto px-5">
      <!-- Landing -->
    <section id="home" class="pt-24 md:pt-0">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="max-[1020px]:text-center w-full self-center px-4 lg:w-1/2">
            <div class="text-textcoklat">
            <h1 class="text-base font-semibold text-primary md:text-xl">Hello! The Name is Zela.</h1>
            <h1><span class="mt-1 leading-[50px] block text-4xl font-bold text-dark lg:text-[60px]">Welcome to 
              <br>
              ZealoFurr Interactive</span></h1>
              <transition name="fade" mode="out-in">
        <p class="pt-6  mb-6 font-medium leading-relaxed text-secondary" :key="displayText">{{ displayText }}</p>
      </transition>
            </div>
            <Button class="" gradient="cyan-blue" href="https://discord.com/invite/DsU65Bwmu2">
            Join Discord Community
            </Button>
          </div>
          <div class="w-full self-end px-4 lg:w-2/4">
            <div class="relative mt-2 lg:right-0 lg:mt-9">
              <img src="../assets/img/Main.webp" alt=". . ." class="relative z-10 mx-auto max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="px-5">
    <div class="py-24 container mx-auto items-center"> 
	<section class="sm:justify-between items-center flex max-[900px]:flex-col">
		<!-- Banner left contents -->
		<div class="w-full md:w-3/5 text-left">
      <h3 class="font-bold uppercase text-crimson text-lg-mb-3">About</h3>
  <h4 class="font-bold text-slate-900 text-3xl mb-5">ZealoFurr Community!</h4>
            <p class="font-general-medium mt-2 text-justify  leading-1 ">
              ZealoFurr Interactive is a Furry Community based in Indonesia to reach out the lost Furries as a home for creators, talents, players, and developers, and to be the main bridge between all Furry Communities in the Country.
			</p>
      
			<div class="pt-8">
        <Button  gradient="cyan-blue" href="https://discord.com/invite/DsU65Bwmu2">
Join Discord Community
  </Button>
		</div>

		</div>
		<!-- Banner right illustration -->
		<div class="w-full  md:w-2/6">
      <iframe class="flex" src="https://discord.com/widget?id=1090183348674117634&theme=dark" width="300" height="450" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
		</div>
	</section>
    </div>


    </section>
    </div>

    
<section class="bg-white pb-16">
  <main class="container mx-auto">
  <div class="text-center pt-6 pb-6">
    <h4 class="font-bold text-slate-900 text-3xl mb-5">Partner Support</h4>
  </div>
  <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
      <template v-for="logo in logos">
        <li>
          <img :src="logo.src" :alt="logo.alt" class="logocarousel" />
        </li>
      </template>
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      <template v-for="logo in logos">
        <li>
          <img :src="logo.src" :alt="logo.alt" class="logocarousel" />
        </li>
      </template>
    </ul>    
  </div>
<div class="text-center pt-6 pb-6">
    <h4 class="font-bold text-slate-900 text-3xl mb-5">Affiliation</h4>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-2">
      <template v-for="logo in logos">
        <li>
          <img :src="logo.src" :alt="logo.alt" class="logocarousel" />
        </li>
      </template>
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-2" aria-hidden="true">
      <template v-for="logo in logos">
        <li>
          <img :src="logo.src" :alt="logo.alt" class="logocarousel" />
        </li>
      </template>
    </ul>    
  </div>
  </div>

</main>


</section>


<section class=" container mx-auto px-5 pt-14">
<div class="p-10 grid grid-cols-1 min-[1009px]:grid-cols-3 gap-5">
  <div class="" v-for="project in projects" :key="project.id">
<cardres :project="project" />
  </div>
</div>
</section>

  </main>
</template>

<style scoped>
.logocarousel{
  max-width: 50px;
}

</style>

<script>
export default {
  // ... (your existing code) ...
  data() {
    return {
      projects: [],
      texts: [        "We Support Furry Talents.",
        "We Support Furry Players.",
        "We Support Furry Developers."], // Add the texts you want to cycle through
      currentTextIndex: 0,
      displayText: "",
      intervalId: null,
    };
  },
  methods: {
    setProjects(data) {
      this.projects = data;
    },
    updateText() {
      this.displayText = this.texts[this.currentTextIndex];
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    },
  },
  mounted() {
    // Fetch projects as before
    axios.get('https://zfback.onrender.com/projectsdetail')
      .then((response) => this.setProjects(response.data))
      .catch((error) => console.log(error));

    // Set up auto-typing interval
    this.intervalId = setInterval(() => {
      this.updateText();
      setTimeout(() => this.updateText(), 0); // Adjust the interval between text changes as needed
    }, 2000); // Adjust the interval for the main text change as needed
  },
  beforeDestroy() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.intervalId);
  },
};
</script>