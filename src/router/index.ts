import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PoliticaDePrivacidadView from "@/components/home/PoliticaDePrivacidadView.vue";
import PoliticaDeCookiesView from "@/components/home/PoliticaDeCookiesView.vue";
import { scrollToHash } from "@/utils/scrollToHash";
import { scrollToTop } from "@/utils/scrollToTop";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },

    { path: "/servicios", redirect: { path: "/", hash: "#servicios" } },
    { path: "/turnos", redirect: { path: "/", hash: "#turnos" } },
    { path: "/contacto", redirect: { path: "/", hash: "#contacto" } },

    {
      path: "/politica-de-privacidad",
      name: "politica-privacidad",
      component: PoliticaDePrivacidadView,
    },
    {
      path: "/politica-de-cookies",
      name: "politica-cookies",
      component: PoliticaDeCookiesView,
    },
  ],

  scrollBehavior(to) {
    requestAnimationFrame(() => {
      if (to.hash) {
        scrollToHash(to.hash, "smooth");
      } else {
        scrollToTop("smooth");
      }
    });

    return false;
  },
});

export default router;