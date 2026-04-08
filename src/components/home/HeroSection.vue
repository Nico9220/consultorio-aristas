<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import { scrollToId } from "@/utils/scrollToId";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import hero1 from "../../assets/clinic/clinic-10.jpg";
import hero2 from "../../assets/clinic/clinic-7.jpg";
import hero3 from "../../assets/clinic/clinic-4.jpg";

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
      class="heroSwiper"
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

          <div class="container heroInner">
            <div class="heroPanel">
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

            <div class="heroMedia card mediaCard">
              <div class="photoWrap">
                <img
                  v-if="s.image"
                  class="photo"
                  :src="s.image"
                  alt="Consultorio Aristas"
                />
                <div v-else class="photoPh">
                  <div class="caption">Foto real del consultorio</div>
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
  position: relative;
  min-height: calc(100svh - var(--header-h));
  background: #eef5f6;
}

@supports not (height: 100svh) {
  .hero {
    min-height: calc(100vh - var(--header-h));
  }
}

.heroSwiper,
:deep(.swiper-wrapper),
:deep(.swiper-slide) {
  height: 100%;
}

.slide {
  position: relative;
  min-height: calc(100svh - var(--header-h));
  overflow: hidden;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
}

@supports not (height: 100svh) {
  .slide {
    min-height: calc(100vh - var(--header-h));
  }
}

/* fallback visual */
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
  pointer-events: none;
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
}

.heroInner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 22px;
  align-items: center;
  min-height: calc(100svh - var(--header-h));
  padding-top: 40px;
  padding-bottom: 54px;
}

@supports not (height: 100svh) {
  .heroInner {
    min-height: calc(100vh - var(--header-h));
  }
}

.heroPanel {
  max-width: 760px;
  padding: 28px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
}

.title {
  margin: 0 0 14px;
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  font-size: clamp(3rem, 5vw, 5.3rem);
  line-height: 0.95;
  color: #23464f;
  text-wrap: balance;
}

.subtitle {
  margin: 0;
  max-width: 52ch;
  color: #3b5560;
  font-size: 1.06rem;
  line-height: 1.75;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(233, 247, 248, 0.9);
  border: 1px solid rgba(31, 127, 134, 0.14);
  color: #2c5a63;
  font-size: 0.84rem;
  font-weight: 750;
}

.mediaCard {
  padding: 14px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
}

.photoWrap {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(31, 127, 134, 0.14);
  background: rgba(255, 255, 255, 0.78);
}

.photo,
.photoPh {
  display: block;
  width: 100%;
  height: clamp(320px, 42vw, 470px);
  object-fit: cover;
}

.photoPh {
  background: linear-gradient(
    135deg,
    rgba(70, 188, 195, 0.22),
    rgba(255, 255, 255, 0.85)
  );
  position: relative;
}

.caption,
.badge {
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 8px 10px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(31, 127, 134, 0.16);
  color: #2c5a63;
  font-size: 0.82rem;
  font-weight: 800;
}

:deep(.swiper-pagination) {
  bottom: 16px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
}

@media (max-width: 1180px) {
  .heroInner {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
    gap: 18px;
  }

  .title {
    font-size: clamp(2.7rem, 4.6vw, 4.4rem);
  }

  .photo,
  .photoPh {
    height: 360px;
  }
}

@media (max-width: 860px) {
  .hero {
    min-height: auto;
  }

  .heroSwiper,
  :deep(.swiper-wrapper),
  :deep(.swiper-slide) {
    height: auto;
  }

  .slide {
    min-height: auto;
    align-items: flex-start;
  }

  .heroInner {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 18px;
    align-items: start;
    padding-top: 18px;
    padding-bottom: 34px;
  }

  .heroPanel {
    max-width: none;
    padding: 22px;
    border-radius: 24px;
  }

  .title {
    font-size: clamp(2.2rem, 9vw, 3.2rem);
    line-height: 1.02;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  .chips {
    gap: 8px;
  }

  .chip {
    max-width: 100%;
    font-size: 0.78rem;
    padding: 7px 10px;
  }

  .mediaCard {
    padding: 10px;
    border-radius: 24px;
  }

  .photo,
  .photoPh {
    height: 240px;
  }
}

@media (max-width: 560px) {
  .heroInner {
    padding-top: 14px;
    padding-bottom: 28px;
  }

  .heroPanel {
    padding: 18px;
    border-radius: 22px;
  }

  .title {
    font-size: clamp(2rem, 10vw, 2.8rem);
  }

  .photo,
  .photoPh {
    height: 220px;
  }

  :deep(.swiper-pagination) {
    bottom: 10px;
  }
}
</style>