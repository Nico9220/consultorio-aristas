<script setup lang="ts">
import RevealOnScroll from "../ui/RevealOnScroll.vue";
import BaseButton from "../ui/BaseButton.vue";
</script>

<template>
  <section id="cta" class="snap-section section cta">
    <div class="container">
      <div class="panel card">
        <RevealOnScroll>
          <h2 class="h2">¿Listo para una consulta?</h2>
          <p class="p">
            Agendá tu turno fácilmente. Estamos para cuidar tu sonrisa con atención integral y seguimiento.
          </p>
        </RevealOnScroll>

        <RevealOnScroll :delay="180">
          <div class="actions">
            <BaseButton to="/turnos" size="lg">Reservar Turno</BaseButton>
            <BaseButton to="/contacto" variant="ghost" size="lg">Hacer una consulta</BaseButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll :delay="320">
          <div class="mini">
            <div class="chip">⏱ Turnos organizados</div>
            <div class="chip">💬 Confirmación por WhatsApp</div>
            <div class="chip">🧼 Bioseguridad</div>
          </div>
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

.cta{
  background:
    radial-gradient(900px 420px at 30% 20%, rgba(46,168,176,.26), transparent 60%),
    radial-gradient(900px 520px at 85% 70%, rgba(70,188,195,.18), transparent 55%),
    linear-gradient(180deg, transparent, rgba(233,247,248,.55));
}

.panel{
  padding: 28px;
  text-align: center;
  background: rgba(255,255,255,.72);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(31,127,134,.14);
  position: relative;
  overflow:hidden;
}

.panel::before{
  content:"";
  position:absolute;
  inset:-40%;
  background: radial-gradient(circle at 20% 30%, rgba(255,255,255,.9), transparent 45%);
  transform: rotate(12deg);
  pointer-events:none;
}

.actions{
  margin-top: 16px;
  display:flex;
  justify-content:center;
  gap: 12px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.mini{
  margin-top: 18px;
  display:flex;
  justify-content:center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.chip{
  background: rgba(233,247,248,.8);
  border: 1px solid rgba(31,127,134,.14);
  padding: 8px 12px;
  border-radius: 999px;
  color: #2c5a63;
  font-weight: 750;
  font-size: 13px;
}
</style>
