<script setup lang="ts">
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

const route = useRoute();
const snap = computed(() => route.name === "home"); // snap solo en Home
</script>

<template>
  <div class="app">
    <AppHeader />
    
    <div id="appScroll" class="scroll" :class="{ snap }">
      <Transition name="page" mode="out-in">
        <RouterView />
      </Transition>

      <AppFooter />
    </div>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.scroll {
  height: calc(100vh - var(--header-h));
  overflow-y: auto;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}

.scroll.snap {
  scroll-snap-type: y proximity;
  scroll-padding-top: 12px;
}

/* transición entre páginas (routes) */
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

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
</style>
