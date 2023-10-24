<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import footernav from './components/footer.vue';
import axios from 'axios';
import BackToTop from 'vue-backtotop';
import {ref} from "vue"

</script>

<template> 
<div>
  <div class="">

    <navbar class="" />

		<transition name="fade" mode="out-in">
    <RouterView />
  </transition>

  <back-to-top
			visibleoffset="100"
			right="100px"
			bottom="105px"
			class="shadow-lg"
		>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
		</back-to-top>
    <footernav class="container mx-auto px-5 " />

</div>
</div>
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

<style>
.vue-back-to-top {
	@apply p-2 bg-[#ff9f07] hover:bg-[#c42e00] text-white transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1 hover:scale-110;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
}
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
