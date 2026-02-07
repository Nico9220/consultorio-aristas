<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { ArrowUp } from "lucide-vue-next";

const show = ref(false);
let el: HTMLElement | null = null;

const onScroll = () => {
  if (!el) return;
  show.value = el.scrollTop > 240;
};

const goTop = () => {
  if (!el) return;
  el.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  el = document.querySelector<HTMLElement>("#appScroll");
  if (!el) return;
  onScroll();
  el.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (!el) return;
  el.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <button
    class="btn"
    :class="{ show }"
    type="button"
    aria-label="Volver arriba"
    @click="goTop"
  >
    <ArrowUp :size="18" />
  </button>
</template>

<style scoped>
.btn {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 50;

  width: 46px;
  height: 46px;
  border-radius: 999px;

  display: grid;
  place-items: center;

  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(31, 127, 134, 0.18);
  color: #1f7f86;

  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);

  opacity: 0;
  transform: translateY(10px) scale(0.98);
  pointer-events: none;
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.btn.show {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.btn:hover {
  transform: translateY(-2px) scale(1.02);
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
</style>
