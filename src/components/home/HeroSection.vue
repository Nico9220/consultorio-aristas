<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import { scrollToId } from "@/utils/scrollToId";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import hero1 from "../../assets/clinic/clinic-1.jpg";
import hero2 from "../../assets/clinic/clinic-2.jpg";
import hero3 from "../../assets/clinic/clinic-3.jpg";

const router = useRouter();
const modules = [Autoplay, Pagination, EffectFade];

type Slide = {
  title: string;
  subtitle: string;
  primary: { label: string; id: string };
  secondary: { label: string; id: string };
  theme: "a" | "b" | "c";
  image?: string;
};

const slides: Slide[] = [
  {
    title: "Cuidamos tu sonrisa",
    subtitle:
      "Atención odontológica integral y de calidad para toda la familia.",
    primary: { label: "Reservar Turno", id: "turnos" },
    secondary: { label: "Ver Servicios", id: "servicios" },
    theme: "a",
    image: hero1,
  },
  {
    title: "Estética + Salud",
    subtitle: "Tratamientos modernos con un enfoque humano y personalizado.",
    primary: { label: "Consultanos", id: "contacto" },
    secondary: { label: "Reservar Turno", id: "turnos" },
    theme: "b",
    image: hero2,
  },
  {
    title: "Plan de tratamiento claro",
    subtitle: "Diagnóstico, seguimiento y opciones pensadas para vos.",
    primary: { label: "Nuestros Servicios", id: "servicios" },
    secondary: { label: "Contacto", id: "contacto" },
    theme: "c",
    image: hero3,
  },
];

const goTo = async (id: string) => {
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
      :speed="900"
      :autoplay="{ delay: 6500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="(s, i) in slides" :key="i">
        <div
          class="slide"
          :class="[s.theme, { hasPhoto: !!s.image }]"
          :style="s.image ? { backgroundImage: `url(${s.image})` } : undefined"
        >
          <div class="overlay" />
          <div class="accent" />

          <div class="container content">
            <div class="left panel">
              <h1 class="title">{{ s.title }}</h1>
              <p class="subtitle">{{ s.subtitle }}</p>

              <div class="actions">
                <BaseButton size="lg" @click="goTo(s.primary.id)">
                  {{ s.primary.label }}
                </BaseButton>

                <BaseButton
                  variant="ghost"
                  size="lg"
                  @click="goTo(s.secondary.id)"
                >
                  {{ s.secondary.label }}
                </BaseButton>
              </div>

              <div class="chips">
                <div class="chip">Bioseguridad</div>
                <div class="chip">Equipamiento moderno</div>
                <div class="chip">Atención personalizada</div>
              </div>
            </div>

            <div class="right card mediaCard">
              <div class="photoWrap">
                <img
                  v-if="s.image"
                  class="photo"
                  :src="s.image"
                  alt="Consultorio Aristas"
                />
                <div v-else class="photoPh">
                  <div class="caption">Foto real del consultorio (ideal)</div>
                </div>
                <div class="badge">Consultorio</div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.hero {
  height: calc(100vh - var(--header-h));
  min-height: 560px;
  padding: 0;
  display: block;
}

.swiper,
:deep(.swiper-wrapper),
:deep(.swiper-slide) {
  height: 100%;
}

.slide {
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

/* fallback (si no hay foto) */
.slide.a {
  background-image:
    radial-gradient(
      900px 420px at 20% 20%,
      rgba(70, 188, 195, 0.35),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 90% 30%,
      rgba(31, 127, 134, 0.22),
      transparent 55%
    ),
    linear-gradient(135deg, rgba(233, 247, 248, 0.9), rgba(246, 251, 252, 1));
}
.slide.b {
  background-image:
    radial-gradient(
      900px 420px at 10% 10%,
      rgba(46, 168, 176, 0.3),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 80% 40%,
      rgba(70, 188, 195, 0.2),
      transparent 55%
    ),
    linear-gradient(135deg, rgba(246, 251, 252, 1), rgba(233, 247, 248, 0.9));
}
.slide.c {
  background-image:
    radial-gradient(
      900px 420px at 30% 10%,
      rgba(31, 127, 134, 0.22),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 95% 55%,
      rgba(70, 188, 195, 0.28),
      transparent 55%
    ),
    linear-gradient(135deg, rgba(233, 247, 248, 0.85), rgba(246, 251, 252, 1));
}

.overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      1200px 680px at 10% 30%,
      rgba(0, 0, 0, 0.45),
      transparent 60%
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.58) 0%,
      rgba(0, 0, 0, 0.28) 55%,
      rgba(0, 0, 0, 0.12) 100%
    );
}

.accent {
  position: absolute;
  inset: -20%;
  pointer-events: none;
  background:
    radial-gradient(
      700px 380px at 20% 25%,
      rgba(70, 188, 195, 0.25),
      transparent 60%
    ),
    radial-gradient(
      760px 420px at 85% 65%,
      rgba(31, 127, 134, 0.18),
      transparent 60%
    );
  filter: blur(0.2px);
}

.content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 26px;
  align-items: center;
  padding: 44px 0;
}

.panel {
  padding: 26px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
}

.title {
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  font-size: clamp(34px, 4.6vw, 58px);
  margin: 0 0 12px;
  color: #23464f;
}

.subtitle {
  margin: 0;
  color: #3b5560;
  line-height: 1.7;
  max-width: 55ch;
  font-size: 16px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.chips {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.chip {
  background: rgba(233, 247, 248, 0.85);
  border: 1px solid rgba(31, 127, 134, 0.14);
  padding: 8px 12px;
  border-radius: 999px;
  color: #2c5a63;
  font-weight: 750;
  font-size: 13px;
}

.mediaCard {
  padding: 14px;
  border-radius: 26px;
}
.photoWrap {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid rgba(31, 127, 134, 0.14);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
}
.photo {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  filter: saturate(1.05) contrast(1.02);
}
.badge {
  position: absolute;
  left: 12px;
  bottom: 12px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(31, 127, 134, 0.16);
  padding: 8px 10px;
  border-radius: 14px;
  font-weight: 800;
  color: #2c5a63;
  font-size: 13px;
}

.photoPh {
  height: 320px;
  border-radius: 16px;
  border: 1px solid rgba(31, 127, 134, 0.12);
  background: linear-gradient(
    135deg,
    rgba(70, 188, 195, 0.22),
    rgba(255, 255, 255, 0.85)
  );
  position: relative;
}
.caption {
  position: absolute;
  left: 12px;
  bottom: 12px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(31, 127, 134, 0.16);
  padding: 8px 10px;
  border-radius: 14px;
  font-weight: 700;
  color: #2c5a63;
  font-size: 13px;
}

@media (max-width: 860px) {
  .content {
    grid-template-columns: 1fr;
  }
  .photo {
    height: 240px;
  }
  .photoPh {
    height: 240px;
  }
}
</style>
