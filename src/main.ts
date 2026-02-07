import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./style.css";
import { scrollToHash } from "./utils/scrollToHash";

const app = createApp(App);
app.use(createPinia());
app.use(router);

router.afterEach((to) => {
  if (to.hash) requestAnimationFrame(() => scrollToHash(to.hash));
});

router.isReady().then(() => {
  if (location.hash) scrollToHash(location.hash, "auto");
  app.mount("#app");
});
