<script setup lang="ts">
import RevealOnScroll from "../ui/RevealOnScroll.vue";

const servicios = [
  { titulo: "Odontología General", desc: "Atención integral para el cuidado de tu salud bucal.", icon: "🦷" },
  { titulo: "Estética Dental", desc: "Tratamientos estéticos para mejorar tu sonrisa.", icon: "✨" },
  { titulo: "Ortodoncia", desc: "Corrección de maloclusión y alineación dental.", icon: "🧩" },
  { titulo: "Implantología", desc: "Reemplazo de piezas dentarias mediante implantes.", icon: "🦾" },
];
</script>

<template>
  <section id="servicios" class="snap-section page-section section">
    <div class="container">
      <RevealOnScroll>
        <h2 class="h2">Servicios</h2>
        <p class="p">Atención integral con tratamientos modernos y seguimiento profesional.</p>
      </RevealOnScroll>

      <div class="grid">
        <RevealOnScroll
          v-for="(s, i) in servicios"
          :key="s.titulo"
          :delay="120 + i * 90"
        >
          <article class="card item">
            <div class="icon">{{ s.icon }}</div>
            <h3 class="t">{{ s.titulo }}</h3>
            <p class="d">{{ s.desc }}</p>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section{
  display:flex;
  align-items:center;
  padding: 56px 0;
}

.grid{
  margin-top: 22px;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.item{ padding: 18px; }
.icon{
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(233,247,248,.9);
  border: 1px solid rgba(31,127,134,.16);
  font-size: 22px;
}
.t{ margin: 12px 0 6px; font-size: 16px; }
.d{ margin: 0; color: var(--muted); line-height: 1.6; font-size: 14px; }

@media (max-width: 980px){
  .grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
