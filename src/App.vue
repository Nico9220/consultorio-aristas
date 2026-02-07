<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import BackToTop from "./components/ui/BackToTop.vue";

const route = useRoute();
const snap = computed(() => route.name === "home");
</script>

<template>
  <AppHeader />

  <main id="appScroll" class="scroll" :class="{ snap }">
    <Transition name="page" mode="out-in">
      <RouterView />
    </Transition>

    <AppFooter />
    <BackToTop />
  </main>
</template>


<style scoped>
.scroll {
  height: calc(100dvh - var(--header-h));
  overflow-y: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: contain;
}

.scroll.snap {
  scroll-snap-type: y proximity;
  scroll-padding-top: 16px;
  scroll-padding-bottom: calc(24px + env(safe-area-inset-bottom));
}


.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease, filter 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(6px);
}
</style>
