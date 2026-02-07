<script setup lang="ts">
import RevealOnScroll from "../ui/RevealOnScroll.vue";
import {
  Stethoscope,
  Sparkles,
  AlignHorizontalJustifyCenter,
  Layers,
} from "lucide-vue-next";

type Servicio = {
  titulo: string;
  desc: string;
  Icon: any;
};

const servicios: Servicio[] = [
  {
    titulo: "Odontología General",
    desc: "Atención integral para el cuidado de tu salud bucal.",
    Icon: Stethoscope,
  },
  {
    titulo: "Estética Dental",
    desc: "Tratamientos estéticos para mejorar tu sonrisa.",
    Icon: Sparkles,
  },
  {
    titulo: "Ortodoncia",
    desc: "Corrección de maloclusión y alineación dental.",
    Icon: AlignHorizontalJustifyCenter,
  },
  {
    titulo: "Implantología",
    desc: "Reemplazo de piezas dentarias mediante implantes.",
    Icon: Layers,
  },
];
</script>

<template>
  <section id="servicios" class="snap-section page-section section">
    <div class="container">
      <RevealOnScroll>
        <h2 class="h2">Servicios</h2>
        <p class="p">
          Atención integral con tratamientos modernos y seguimiento profesional.
        </p>
      </RevealOnScroll>

      <div class="grid">
        <RevealOnScroll
          v-for="(s, i) in servicios"
          :key="s.titulo"
          :delay="120 + i * 90"
        >
          <article class="card item">
            <div class="icon">
              <component :is="s.Icon" :size="22" />
            </div>

            <h3 class="t">{{ s.titulo }}</h3>
            <p class="d">{{ s.desc }}</p>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  align-items: center;
  padding: 56px 0;
}

.grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  align-items: stretch;
}

.item {
  padding: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(233, 247, 248, 0.9);
  border: 1px solid rgba(31, 127, 134, 0.16);

  color: #1f7f86;
}

.t {
  margin: 12px 0 6px;
  font-size: 16px;
}
.d {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 14px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
