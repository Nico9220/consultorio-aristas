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
  image?: string;
};

const slides: Slide[] = [
  {
    title: "Cuidamos tu sonrisa",
    subtitle:
      "Atención odontológica integral y de calidad para toda la familia.",
    primary: { label: "Reservar Turno", id: "turnos" },
    secondary: { label: "Ver Servicios", id: "servicios" },
    image: hero1,
  },
  {
    title: "Estética + Salud",
    subtitle: "Tratamientos modernos con un enfoque humano y personalizado.",
    primary: { label: "Consultanos", id: "contacto" },
    secondary: { label: "Reservar Turno", id: "turnos" },
    image: hero2,
  },
  {
    title: "Plan de tratamiento claro",
    subtitle: "Diagnóstico, seguimiento y opciones pensadas para vos.",
    primary: { label: "Nuestros Servicios", id: "servicios" },
    secondary: { label: "Contacto", id: "contacto" },
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
      :fadeEffect="{ crossFade: true }"
      :autoHeight="true"
      :speed="900"
      :autoplay="{ delay: 6500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="(s, i) in slides" :key="i">
        <div
          class="slide"
          :style="s.image ? { backgroundImage: `url(${s.image})` } : undefined"
        >
          <div class="overlay" />
          <div class="accent" />

          <div class="container heroInner">
            <div class="heroPanel">
              <span class="kicker">Aristas Odontología Integrada</span>

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
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: transparent;
}

.heroSwiper {
  overflow: hidden;
}

.heroSwiper,
:deep(.swiper-wrapper),
:deep(.swiper-slide) {
  width: 100%;
}

:deep(.swiper-slide) {
  height: auto !important;
}

.slide {
  position: relative;
  min-height: calc(100svh - var(--header-h));
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@supports not (height: 100svh) {
  .slide {
    min-height: calc(100vh - var(--header-h));
  }
}

.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(
      90deg,
      rgba(10, 26, 30, 0.66) 0%,
      rgba(10, 26, 30, 0.42) 45%,
      rgba(10, 26, 30, 0.2) 100%
    ),
    radial-gradient(
      900px 520px at 15% 28%,
      rgba(17, 87, 94, 0.24),
      transparent 60%
    );
}

.accent {
  position: absolute;
  inset: -20%;
  pointer-events: none;
  background:
    radial-gradient(
      700px 380px at 20% 25%,
      rgba(70, 188, 195, 0.16),
      transparent 60%
    ),
    radial-gradient(
      760px 420px at 85% 65%,
      rgba(31, 127, 134, 0.14),
      transparent 60%
    );
}

.heroInner {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100svh - var(--header-h));
  padding-top: 40px;
  padding-bottom: 56px;
}

@supports not (height: 100svh) {
  .heroInner {
    min-height: calc(100vh - var(--header-h));
  }
}

.heroPanel {
  width: min(820px, 100%);
  padding: 30px 32px;
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.06)
  );
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(8px);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.12);
  text-align: center;
}

.kicker {
  display: inline-flex;
  margin-bottom: 14px;
  padding: 0.45rem 0.78rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.title {
  margin: 0 0 14px;
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  font-size: clamp(3.2rem, 5vw, 5.6rem);
  line-height: 0.95;
  color: #f7fbfb;
  text-wrap: balance;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
}

.subtitle {
  margin: 0 auto;
  max-width: 30ch;
  color: rgba(255, 255, 255, 0.92);
  font-size: 1.08rem;
  line-height: 1.75;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.chips {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.chip {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f3fbfb;
  font-size: 0.84rem;
  font-weight: 750;
  backdrop-filter: blur(6px);
}

:deep(.swiper-pagination) {
  bottom: 14px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
}

@media (max-width: 1180px) {
  .title {
    font-size: clamp(2.8rem, 4.8vw, 4.7rem);
  }

  .heroPanel {
    width: min(760px, 100%);
  }
}

@media (max-width: 860px) {
  .hero {
    min-height: calc(100svh - var(--header-h));
  }

  .heroSwiper,
  :deep(.swiper-wrapper),
  :deep(.swiper-slide) {
    height: calc(100svh - var(--header-h)) !important;
  }

  .slide {
    min-height: calc(100svh - var(--header-h));
    height: calc(100svh - var(--header-h));
    align-items: flex-start;
    justify-content: stretch;
    background-position: center;
  }

  .overlay {
    background:
      linear-gradient(
        180deg,
        rgba(10, 26, 30, 0.52) 0%,
        rgba(10, 26, 30, 0.34) 100%
      ),
      radial-gradient(
        700px 420px at 20% 25%,
        rgba(17, 87, 94, 0.22),
        transparent 60%
      );
  }

  .heroInner {
    min-height: calc(100svh - var(--header-h));
    height: calc(100svh - var(--header-h));
    align-items: flex-start;
    justify-content: stretch;
    padding-top: 18px;
    padding-bottom: 52px;
  }

  .heroPanel {
    width: 100%;
    padding: 22px;
    border-radius: 24px;
    text-align: left;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.18),
      rgba(255, 255, 255, 0.1)
    );
  }

  .kicker {
    margin-bottom: 12px;
    font-size: 0.8rem;
  }

  .title {
    font-size: clamp(2.2rem, 9.6vw, 3.4rem);
    line-height: 1.02;
    margin-bottom: 10px;
  }

  .subtitle {
    margin: 0;
    max-width: 32ch;
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .actions {
    justify-content: stretch;
    flex-direction: column;
    align-items: stretch;
  }

  .chips {
    justify-content: flex-start;
    gap: 8px;
  }

  .chip {
    max-width: 100%;
    font-size: 0.78rem;
    padding: 7px 10px;
  }

  :deep(.swiper-pagination) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    margin-top: 0;
  }
}

@media (max-width: 560px) {
  .hero {
    min-height: calc(100svh - var(--header-h));
  }

  .heroSwiper,
  :deep(.swiper-wrapper),
  :deep(.swiper-slide) {
    height: calc(100svh - var(--header-h)) !important;
  }

  .slide {
    min-height: calc(100svh - var(--header-h));
    height: calc(100svh - var(--header-h));
  }

  .heroInner {
    min-height: calc(100svh - var(--header-h));
    height: calc(100svh - var(--header-h));
    padding-top: 14px;
    padding-bottom: 44px;
  }

  .heroPanel {
    padding: 18px;
    border-radius: 22px;
  }

  .title {
    font-size: clamp(2rem, 10vw, 2.9rem);
  }

  :deep(.swiper-pagination) {
    bottom: 10px;
  }
}
</style>