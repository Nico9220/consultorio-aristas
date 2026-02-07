<script setup lang="ts">
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import RevealOnScroll from "../ui/RevealOnScroll.vue";
import BaseButton from "../ui/BaseButton.vue";
import { scrollToId } from "@/utils/scrollToId";

import { Clock3, MessageCircle, ShieldCheck } from "lucide-vue-next";

const router = useRouter();

const goTo = async (id: string) => {
  await router.replace({ path: "/", hash: `#${id}` });
  await nextTick();
  requestAnimationFrame(() => scrollToId(id));
};
</script>

<template>
  <section id="cta" class="snap-section page-section cta">
    <div class="container">
      <div class="panel card">
        <RevealOnScroll>
          <h2 class="h2">¿Listo para una consulta?</h2>
          <p class="p">
            Agendá tu turno fácilmente. Estamos para cuidar tu sonrisa con
            atención integral y seguimiento.
          </p>
        </RevealOnScroll>

        <RevealOnScroll :delay="180">
          <div class="actions">
            <BaseButton size="lg" @click="goTo('turnos')"
              >Reservar Turno</BaseButton
            >
            <BaseButton variant="ghost" size="lg" @click="goTo('contacto')"
              >Hacer una consulta</BaseButton
            >
          </div>
        </RevealOnScroll>

        <RevealOnScroll :delay="320">
          <div class="mini">
            <div class="chip">
              <Clock3 :size="16" class="chipIcon" />
              <span>Turnos organizados</span>
            </div>
            <div class="chip">
              <MessageCircle :size="16" class="chipIcon" />
              <span>Confirmación por WhatsApp</span>
            </div>
            <div class="chip">
              <ShieldCheck :size="16" class="chipIcon" />
              <span>Bioseguridad</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background:
    radial-gradient(
      900px 420px at 30% 20%,
      rgba(46, 168, 176, 0.26),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 85% 70%,
      rgba(70, 188, 195, 0.18),
      transparent 55%
    ),
    linear-gradient(180deg, transparent, rgba(233, 247, 248, 0.55));
}

.panel {
  padding: 28px;
  text-align: center;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(31, 127, 134, 0.14);
  position: relative;
  overflow: hidden;
  border-radius: 22px;
}

.panel::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at 20% 30%,
    rgba(255, 255, 255, 0.9),
    transparent 45%
  );
  transform: rotate(12deg);
  pointer-events: none;
}

.actions {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.mini {
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  background: rgba(233, 247, 248, 0.8);
  border: 1px solid rgba(31, 127, 134, 0.14);
  padding: 8px 12px;
  border-radius: 999px;
  color: #2c5a63;
  font-weight: 750;
  font-size: 13px;
}

.chipIcon {
  color: #1f7f86;
}
</style>
