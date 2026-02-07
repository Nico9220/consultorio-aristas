<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import { scrollToId } from "@/utils/scrollToId";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const router = useRouter();
const modules = [Autoplay, Pagination, EffectFade];

type Slide = {
  title: string;
  subtitle: string;
  primary: { label: string; id: string };
  secondary: { label: string; id: string };
  theme: "a" | "b" | "c";
};

const slides: Slide[] = [
  {
    title: "Cuidamos tu sonrisa",
    subtitle: "Atención odontológica integral y de calidad para toda la familia.",
    primary: { label: "Reservar Turno", id: "turnos" },
    secondary: { label: "Ver Servicios", id: "servicios" },
    theme: "a",
  },
  {
    title: "Estética + Salud",
    subtitle: "Tratamientos modernos con un enfoque humano y personalizado.",
    primary: { label: "Consultanos", id: "contacto" },
    secondary: { label: "Reservar Turno", id: "turnos" },
    theme: "b",
  },
  {
    title: "Plan de tratamiento claro",
    subtitle: "Diagnóstico, seguimiento y opciones pensadas para vos.",
    primary: { label: "Nuestros Servicios", id: "servicios" },
    secondary: { label: "Contacto", id: "contacto" },
    theme: "c",
  },
];

const goTo = async (id: string) => {
  // deja el hash en URL (útil para compartir links)
  await router.replace({ path: "/", hash: `#${id}` });
  await nextTick();
  requestAnimationFrame(() => scrollToId(id));
};
</script>

<template>
  <section id="inicio" class="hero snap-section">
    <Swiper
      class="swiper"
      :modules="modules"
      :loop="true"
      effect="fade"
      :autoplay="{ delay: 6500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="(s, i) in slides" :key="i">
        <div class="slide" :class="s.theme">
          <div class="overlay" />

          <div class="container content">
            <div class="left">
              <h1 class="title">{{ s.title }}</h1>
              <p class="subtitle">{{ s.subtitle }}</p>

              <div class="actions">
                <BaseButton size="lg" @click="goTo(s.primary.id)">
                  {{ s.primary.label }}
                </BaseButton>

                <BaseButton variant="ghost" size="lg" @click="goTo(s.secondary.id)">
                  {{ s.secondary.label }}
                </BaseButton>
              </div>

              <div class="chips">
                <div class="chip">✔ Bioseguridad</div>
                <div class="chip">✔ Equipamiento moderno</div>
                <div class="chip">✔ Atención personalizada</div>
              </div>
            </div>

            <div class="right card">
              <div class="photoPh">
                <div class="caption">Foto real del consultorio (ideal)</div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.hero{
  height: calc(100vh - var(--header-h));
  padding: 0;
  /* importante: no heredar display flex del page-section */
  display: block;
}

.swiper,
:deep(.swiper-wrapper),
:deep(.swiper-slide){
  height: 100%;
}


.slide{
  height: 100%;
  display:flex;
  align-items:center;
  position: relative;
  overflow:hidden;
}

/* Fondos temporales (ideal reemplazar por fotos reales) */
.slide.a{
  background: radial-gradient(900px 420px at 20% 20%, rgba(70,188,195,.35), transparent 60%),
              radial-gradient(900px 520px at 90% 30%, rgba(31,127,134,.22), transparent 55%),
              linear-gradient(135deg, rgba(233,247,248,.9), rgba(246,251,252,1));
}
.slide.b{
  background: radial-gradient(900px 420px at 10% 10%, rgba(46,168,176,.30), transparent 60%),
              radial-gradient(900px 520px at 80% 40%, rgba(70,188,195,.20), transparent 55%),
              linear-gradient(135deg, rgba(246,251,252,1), rgba(233,247,248,.9));
}
.slide.c{
  background: radial-gradient(900px 420px at 30% 10%, rgba(31,127,134,.22), transparent 60%),
              radial-gradient(900px 520px at 95% 55%, rgba(70,188,195,.28), transparent 55%),
              linear-gradient(135deg, rgba(233,247,248,.85), rgba(246,251,252,1));
}

.overlay{
  position:absolute;
  inset:0;
  background: linear-gradient(
    90deg,
    rgba(246,251,252,.92) 0%,
    rgba(246,251,252,.70) 45%,
    rgba(246,251,252,.25) 100%
  );
}


.content{
  position: relative;
  z-index: 2;
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: 26px;
  align-items:center;
  padding: 44px 0;
}

.title{
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  font-size: clamp(34px, 4.6vw, 58px);
  margin: 0 0 12px;
  color: #23464f;
}
.subtitle{
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  max-width: 55ch;
  font-size: 16px;
}

.actions{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.chips{
  margin-top: 18px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}
.chip{
  background: rgba(255,255,255,.75);
  border: 1px solid rgba(31,127,134,.14);
  padding: 8px 12px;
  border-radius: 999px;
  color: #2c5a63;
  font-weight: 700;
  font-size: 13px;
}

.right{ padding: 14px; }
.photoPh{
  height: 320px;
  border-radius: 16px;
  border: 1px solid rgba(31,127,134,.12);
  background: linear-gradient(135deg, rgba(70,188,195,.22), rgba(255,255,255,.85));
  position: relative;
  overflow:hidden;
}
.caption{
  position:absolute;
  left: 12px;
  bottom: 12px;
  background: rgba(255,255,255,.85);
  border: 1px solid rgba(31,127,134,.16);
  padding: 8px 10px;
  border-radius: 14px;
  font-weight: 700;
  color: #2c5a63;
  font-size: 13px;
}

@media (max-width: 860px){
  .content{ grid-template-columns: 1fr; }
  .photoPh{ height: 240px; }
}
</style>
