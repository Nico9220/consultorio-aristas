<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import BaseButton from "../ui/BaseButton.vue";
import { useUiStore } from "@/stores/ui";

import isologo from "../../assets/brand/isotipo.jpg";

const abierto = ref(false);
const ui = useUiStore();
const route = useRoute();

const heroMode = computed(
  () => ui.activeSection === "inicio" && !ui.isScrolled,
);

const isActive = (id: string) => {
  return ui.activeSection === id || route.hash === `#${id}`;
};
</script>

<template>
  <header class="header" :class="{ scrolled: ui.isScrolled, hero: heroMode }">
    <div class="container inner">
      <RouterLink
        :to="{ path: '/', hash: '#inicio' }"
        class="brand"
        @click="abierto = false"
      >
        <img class="logo" :src="isologo" alt="Aristas" />
        <div class="brandText">
          <div class="name">Aristas</div>
          <div class="tag">Odontología Integrada</div>
        </div>
      </RouterLink>

      <nav class="nav" :class="{ abierto }">
        <RouterLink
          class="link"
          :class="{ active: isActive('inicio') }"
          :to="{ path: '/', hash: '#inicio' }"
          @click="abierto = false"
        >
          Inicio
        </RouterLink>

        <RouterLink
          class="link"
          :class="{ active: isActive('servicios') }"
          :to="{ path: '/', hash: '#servicios' }"
          @click="abierto = false"
        >
          Servicios
        </RouterLink>

        <RouterLink
          class="link"
          :class="{ active: isActive('nosotros') }"
          :to="{ path: '/', hash: '#nosotros' }"
          @click="abierto = false"
        >
          Nosotros
        </RouterLink>

        <RouterLink
          class="link"
          :class="{ active: isActive('turnos') }"
          :to="{ path: '/', hash: '#turnos' }"
          @click="abierto = false"
        >
          Turnos
        </RouterLink>

        <RouterLink
          class="link"
          :class="{ active: isActive('contacto') }"
          :to="{ path: '/', hash: '#contacto' }"
          @click="abierto = false"
        >
          Contacto
        </RouterLink>

        <BaseButton
          class="ctaMobile"
          :to="{ path: '/', hash: '#turnos' }"
          size="lg"
          @click="abierto = false"
        >
          Reservar Turno
        </BaseButton>
      </nav>

      <div class="right">
        <BaseButton
          class="ctaDesktop"
          :to="{ path: '/', hash: '#turnos' }"
          size="lg"
        >
          Reservar Turno
        </BaseButton>

        <button class="burger" @click="abierto = !abierto" aria-label="Menú">
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  min-height: var(--header-h);
  backdrop-filter: blur(10px);
  background: rgba(246, 251, 252, 0.65);
  border-bottom: 1px solid rgba(31, 127, 134, 0.1);
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}
.header.hero {
  background: rgba(246, 251, 252, 0.35);
  border-bottom-color: rgba(31, 127, 134, 0.06);
}
.header.scrolled {
  background: rgba(246, 251, 252, 0.92);
  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
  border-bottom-color: rgba(31, 127, 134, 0.14);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  width: 44px;
  height: 44px;
  border-radius: 14px;
}
.brandText .name {
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  font-size: 22px;
  line-height: 1;
}
.brandText .tag {
  font-size: 12px;
  color: var(--muted);
  margin-top: 2px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
}
.link {
  font-weight: 650;
  color: #3b5560;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid transparent;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}
.link.active {
  color: var(--brand-700);
  background: rgba(233, 247, 248, 0.85);
  border-color: rgba(31, 127, 134, 0.14);
}

.right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.burger {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(31, 127, 134, 0.18);
  background: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}
.burger span {
  display: block;
  height: 2px;
  width: 18px;
  background: #365a63;
  margin: 4px auto;
  border-radius: 2px;
}
.ctaMobile {
  display: none;
}

@media (max-width: 860px) {
  .ctaDesktop {
    display: none;
  }
  .burger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: var(--header-h);
    padding: 14px;
    display: none;
    flex-direction: column;
    gap: 10px;
    background: rgba(246, 251, 252, 0.95);
    border-bottom: 1px solid rgba(31, 127, 134, 0.12);
  }
  .nav.abierto {
    display: flex;
  }
  .link {
    width: min(520px, 92vw);
    text-align: center;
  }
  .ctaMobile {
    display: inline-flex;
    width: min(520px, 92vw);
  }
}
</style>
