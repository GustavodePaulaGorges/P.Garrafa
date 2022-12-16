<script setup>
import HeroVue from "../components/HeroVue.vue";
// import router for redirect
import { useRouter } from "vue-router";
const $router = useRouter();

if (!$cookies.get("token")) {
  $router.push("/");
}
</script>

<template>
  <NavBarVue />
  <HeroVue />
  <main class="flex w-full h-screen items-center justify-center">
    <div class="flex flex-col w-full h-screen p-5">
      <div class="flex w-screen h-fit justify-center">
        <h1 class="lg:text-4xl md:text-2xl sm:text-lg font-bold mb-8">
          Sua criatividade. Nosso ofício.
        </h1>
      </div>
      <div class="flex flex-row w-screen h-fit justify-center items-center">
        <div
          class="bg-slate-200 mx-10 p-2 rounded-lg justify-center items-center shadow-lg"
        >
          <img
            class="items-center"
            src="https://www.hydroflask.com/media/wysiwyg/my-hydro-winter/winter--my-hydro-tumbler.png"
          />
          <h1
            class="text-center my-3 font-medium lg:text-2xl md:text-1xl sm:text-md"
          >
            Garrafa
          </h1>
          <div class="flex justify-center">
            <button
              disabled
              class="bg-gray-500 shadow hover:shadow-lg rounded-xl p-1 pr-3 pl-3 text-slate-100 font-semibold"
            >
              Customizar
            </button>
          </div>
        </div>
        <div
          class="bg-slate-200 mx-10 p-2 rounded-lg justify-center items-center shadow-lg"
        >
          <img
            class="items-center"
            src="https://www.hydroflask.com/media/wysiwyg/my-hydro-winter/winter--my-hydro-standard-mouth.png"
          />
          <h1
            class="text-center my-3 font-medium lg:text-2xl md:text-1xl sm:text-md"
          >
            Garrafa
          </h1>
          <div class="flex justify-center">
            <button
              class="bg-blue-500 shadow hover:shadow-lg rounded-xl p-1 pr-3 pl-3 text-slate-100 font-semibold"
              @click="
                () => {
                  $router.push('/customize');
                }
              "
            >
              Customizar
            </button>
          </div>
        </div>
        <div
          class="bg-slate-200 mx-10 p-2 rounded-lg justify-center items-center shadow-lg"
        >
          <img
            class="items-center"
            src="https://www.hydroflask.com/media/wysiwyg/my-hydro-winter/winter--my-hydro-wide-mouth.png"
          />
          <h1
            class="text-center my-3 font-medium lg:text-2xl md:text-1xl sm:text-md"
          >
            Garrafa
          </h1>
          <div class="flex justify-center">
            <button
              disabled
              class="bg-gray-500 shadow hover:shadow-lg rounded-xl p-1 pr-3 pl-3 text-slate-100 font-semibold"
            >
              Customizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style></style>
