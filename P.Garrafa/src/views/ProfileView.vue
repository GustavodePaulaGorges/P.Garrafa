<template>
  <NavBarVue />
  <main class="flex w-full h-screen bg-gray-200">
    <div class="w-1/3 p-2 flex justify-center items-center">
      <!-- Aqui vem o card com as informações do perfil -->
      <ProfileInfo :user="user" :pending="ordersQntd" />
    </div>
    <div class="w-2/3 p-4">
      <!-- Aqui vem o card com as informações de compra do perfil + artes -->
      <div>
        <h1 class="font-bold text-xl">Envios pendentes:</h1>
        <div v-for="pendingOrder in pendingOrders">
          <BottleComp :order="pendingOrder" />
        </div>
      </div>
      <div>
        <h1 class="font-bold text-xl">Enviados:</h1>
        <div>Não há pedidos enviados ainda.</div>
      </div>
    </div>
  </main>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import BottleComp from "../components/BottleComp.vue";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  name: "ProfileView",
  components: {
    ProfileInfo,
    BottleComp,
  },
  data() {
    return {
      user: {},
      pendingOrders: [],
      sendedOrders: [],
      ordersQntd: 0,
    };
  },
  async created() {
    const token = this.$cookies.get("token");
    if (!token) {
      this.$router.push("/");
    }
    const decoded = jwt_decode(token);
    const id = decoded.user_id;
    const response = await axios.get(`http://localhost:8000/users/${id}/`);
    console.log(id, decoded, response);
    this.user = response.data;

    const pending = await axios
      .get(`http://localhost:8000/orders/`)
      .then((response) => {
        let pendente = response.data.filter(
          (order) => order.order_status === "Pendente"
        );
        console.log(response.data);
        pendente.filter((order) => order.user === this.user.id);
        this.pendingOrders = pendente;
        console.log(pendente);
        this.ordersQntd = pendente.length;
      });
  },
};
</script>
