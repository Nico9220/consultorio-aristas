<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = withDefaults(
  defineProps<{
    threshold?: number;
    once?: boolean;
    delay?: number;
    y?: number;
  }>(),
  {
    threshold: 0.2,
    once: true,
    delay: 0,
    y: 18,
  }
);

const el = ref<HTMLElement | null>(null);
const visible = ref(false);
let obs: IntersectionObserver | null = null;

onMounted(() => {
  obs = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting) {
        visible.value = true;
        if (props.once) obs?.disconnect();
      } else if (!props.once) {
        visible.value = false;
      }
    },
    { threshold: props.threshold }
  );

  if (el.value) obs.observe(el.value);
});


onBeforeUnmount(() => obs?.disconnect());
</script>

<template>
  <div
    ref="el"
    class="reveal"
    :class="{ visible }"
    :style="{
      '--delay': `${props.delay}ms`,
      '--y': `${props.y}px`,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal{
  opacity: 0;
  transform: translate3d(0, var(--y), 0);
  filter: blur(10px);
  transition: opacity .7s ease, transform .7s ease, filter .7s ease;
  transition-delay: var(--delay);
  will-change: opacity, transform, filter;
}
.reveal.visible{
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce){
  .reveal{ transition:none; opacity:1; transform:none; filter:none; }
}
</style>
