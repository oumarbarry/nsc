<script setup lang="ts">
const movies = await prisma.movie.findMany()
console.log(movies)
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div v-for="movie in movies" :key="movie.id">
      <!-- Movie Card -->
      <div class="bg-gray-900 h-full shadow-lg rounded-lg overflow-hidden text-slate-100">
        <img :src="movie.image" alt="Movie Poster" class="w-full h-40 object-cover">
        <div class="px-4 py-3">
          <h2 class="text-2xl font-semibold mb-2">{{ movie.title }}</h2>
          <p class="text-gray-300 mb-4">{{ movie.description }}</p>
          <p class="text-gray-400"><span class="font-semibold">Director:</span> {{ movie.director }}</p>
          <p class="text-gray-400"><span class="font-semibold">Year:</span> {{ movie.year }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
