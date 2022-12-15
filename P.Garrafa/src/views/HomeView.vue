<script setup>
import HeroVue from '../components/HeroVue.vue';
</script>

<template>
  <HeroVue />
  <main class="flex flex-row w-full h-screen items-center justify-center">
    <div class="flex items-center  bg-zinc-800 p-4 w-2/5 h-screen text-left">
      <h1 class="lg:text-8xl sm:text-2xl: md:text-4xl hover:text-red-500 hover:font-bold hover:cursor-pointer ease-linear duration-150 text-neutral-100">
        Crie seu Design Já!
      </h1>
    </div>
    <div class="flex bg-white p-4 w-3/5 h-screen items-center justify-center" >
      <img src="@\assets\Garrafa.png">
    </div>

  </main>
</template>
