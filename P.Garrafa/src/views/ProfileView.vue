<template>
  <main class="flex w-full h-screen">
    <div class="w-1/3 p-2 flex justify-center items-center">
      <!-- Aqui vem o card com as informações do perfil -->
      <ProfileInfo :user="{}" />
    </div>
    <div class="w-2/3 p-4">
      <!-- Aqui vem o card com as informações de compra do perfil + artes -->
      <div>
        <h1 class="font-bold text-xl">Envios pendentes:</h1>
        <BottleComp />
      </div>
      <div>
        <h1 class="font-bold text-xl">Enviados:</h1>
        <BottleComp />
      </div>
    </div>
  </main>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import BottleComp from "../components/BottleComp.vue";

export default {
  name: "ProfileView",
  components: {
    ProfileInfo,
    BottleComp,
  },
};
</script>
