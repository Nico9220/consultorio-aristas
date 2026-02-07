import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },

    // opcional: mantener URLs “lindas” pero que vayan a secciones
    { path: "/servicios", redirect: { path: "/", hash: "#servicios" } },
    { path: "/turnos", redirect: { path: "/", hash: "#turnos" } },
    { path: "/contacto", redirect: { path: "/", hash: "#contacto" } },
  ],
});
