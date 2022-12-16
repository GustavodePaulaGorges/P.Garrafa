<script setup>
import NavBarVue from "./components/NavBar.vue";
var show = false;
console.log($cookies.get("token"));
if ($cookies.get("token")) {
  show = true;
} else {
  show = false;
}
</script>

<template>
  <NavBarVue v-if="show" />
  <RouterView />
</template>
