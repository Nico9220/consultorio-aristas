import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },

    { path: "/servicios", redirect: { path: "/", hash: "#servicios" } },
    { path: "/turnos", redirect: { path: "/", hash: "#turnos" } },
    { path: "/contacto", redirect: { path: "/", hash: "#contacto" } },
  ],
});
