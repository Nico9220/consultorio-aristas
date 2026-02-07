<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    variant?: "primary" | "ghost";
    size?: "md" | "lg";
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "primary",
    size: "md",
    type: "button",
  }
);
</script>


<template>
  <RouterLink v-if="to" :to="to" class="btn" :class="[variant, size]">
    <slot />
  </RouterLink>

  <button v-else class="btn" :class="[variant, size]" :type="type">
    <slot />
  </button>
</template>


<style scoped>
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  border-radius: 14px;
  font-weight: 650;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .08s ease, filter .15s ease, background .15s ease;
  user-select: none;
}
.btn:active{ transform: translateY(1px); }

.primary{
  background: linear-gradient(135deg, var(--brand-600), var(--brand-500));
  color: white;
  box-shadow: 0 10px 22px rgba(46,168,176,.25);
}
.primary:hover{ filter: brightness(1.02); }

.ghost{
  background: transparent;
  color: var(--brand-700);
  border-color: rgba(31,127,134,.25);
}
.ghost:hover{
  background: rgba(233,247,248,.8);
}

.md{ padding: 10px 16px; font-size: 14px; }
.lg{ padding: 12px 18px; font-size: 15px; border-radius: 16px; }
</style>
