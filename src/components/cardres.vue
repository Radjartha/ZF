<script setup>
import { TheCard } from 'flowbite-vue'
import { Button } from 'flowbite-vue'
</script>
<template>


    <div class="bg-white">
        <!--Card 1-->
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" :src=" '../assets/img/' + project.gambar" alt="...">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ project.judul }}</div>
            <p class="text-gray-700 text-base leading-relaxed ">
        {{ project.deskripsi }}
            </p>
            <div class="mt-5">
            <Button gradient="green-blue"><router-link :to="'/project/'+project.id">Show More</router-link></Button>
            </div>
          </div>

        </div>
        </div>
</template>

<script>
export default {
    name: 'CardProject',
    props: ['project']
}
</script>