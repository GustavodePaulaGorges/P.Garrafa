import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: CadastroView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
