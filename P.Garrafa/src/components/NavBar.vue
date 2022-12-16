<Script></Script>
<template>
  <main class="flex h-10 w-full bg-gray-900 justify-between p-2">
    <div class="flex flex-row">
      <router-link class="text-lg font-bold text-slate-50" to="/home"
        >p. Hydro</router-link
      >
      <iconify-icon
        icon="tabler:bottle"
        class="text-slate-50"
        width="22"
        height="22"
      ></iconify-icon>
    </div>
    <div class="flex justify-end">
      <router-link to="profile" class="font-mono text-white mr-3 font-bolds">
        Seja bem vindo, {{ user.first_name }}!
      </router-link>
      <iconify-icon
        icon="material-symbols:shopping-cart-outline-rounded"
        style="color: white"
        width="22"
        height="22"
      ></iconify-icon>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      user: {},
    };
  },
  async created() {
    const token = this.$cookies.get("token");
    if (!token) {
      this.$router.push("/login");
    }
    const decoded = jwt_decode(token);
    const id = decoded.user_id;
    const response = await axios.get(`http://localhost:8000/users/${id}/`);
    console.log(id, decoded, response);
    this.user = response.data;
  },
};
</script>
<style scoped>
main {
  font-family: "Inter";
}
</style>
