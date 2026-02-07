<script setup lang="ts">
import RevealOnScroll from "../ui/RevealOnScroll.vue";
import BaseButton from "../ui/BaseButton.vue";

const puntos = [
  "Diagnóstico claro y plan de tratamiento",
  "Turnos organizados y seguimiento",
  "Bioseguridad e higiene como prioridad",
  "Atención humana y personalizada",
];
</script>

<template>
  <section id="nosotros" class="snap-section section about">
    <div class="container wrap">
      <div class="left">
        <RevealOnScroll>
          <h2 class="h2">Sobre Nosotros</h2>
          <p class="p">
            En Aristas Odontología Integrada brindamos atención profesional con un enfoque humano y personalizado.
            Nuestro objetivo es que te sientas acompañado/a en cada etapa del tratamiento.
          </p>
        </RevealOnScroll>

        <div class="list">
          <RevealOnScroll
            v-for="(t, i) in puntos"
            :key="t"
            :delay="120 + i * 90"
          >
            <div class="item card">
              <div class="dot">✓</div>
              <div class="txt">{{ t }}</div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll :delay="520">
          <div class="actions">
            <BaseButton to="/contacto" size="lg">Conocenos Más</BaseButton>
            <BaseButton to="/turnos" variant="ghost" size="lg">Reservar Turno</BaseButton>
          </div>
        </RevealOnScroll>
      </div>

      <div class="right">
        <RevealOnScroll :delay="160">
          <div class="photo card">
            <div class="ph">
              <div class="glass">
                <div class="label">Foto del equipo / consultorio</div>
                <div class="sub">Placeholder</div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll :delay="320">
          <div class="stats card">
            <div class="stat">
              <div class="n">+10</div>
              <div class="s">Años de experiencia (si aplica)</div>
            </div>
            <div class="stat">
              <div class="n">100%</div>
              <div class="s">Enfoque integral</div>
            </div>
            <div class="stat">
              <div class="n">✔</div>
              <div class="s">Atención personalizada</div>
            </div>
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

.about{
  background:
    radial-gradient(900px 420px at 20% 20%, rgba(70,188,195,.22), transparent 60%),
    radial-gradient(900px 520px at 90% 60%, rgba(31,127,134,.16), transparent 55%),
    linear-gradient(180deg, rgba(233,247,248,.35), transparent 55%);
}

.wrap{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 22px;
  align-items:center;
}

.left{ padding-right: 6px; }

.list{
  margin-top: 18px;
  display:grid;
  gap: 10px;
}

.item{
  padding: 14px;
  display:flex;
  align-items:center;
  gap: 12px;
  background: rgba(255,255,255,.75);
  backdrop-filter: blur(10px);
}

.dot{
  width: 38px;
  height: 38px;
  border-radius: 14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(233,247,248,.9);
  border: 1px solid rgba(31,127,134,.16);
  color: var(--brand-700);
  font-weight: 900;
}

.txt{
  font-weight: 700;
  color: #2c5a63;
}

.actions{
  margin-top: 18px;
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
}

.right{
  display:grid;
  gap: 12px;
}

.photo{ padding: 14px; }
.ph{
  height: 280px;
  border-radius: 16px;
  border: 1px solid rgba(31,127,134,.14);
  background: linear-gradient(135deg, rgba(70,188,195,.22), rgba(255,255,255,.85));
  position: relative;
  overflow:hidden;
}
.ph::after{
  content:"";
  position:absolute;
  inset:-40%;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.9), transparent 45%);
  transform: rotate(14deg);
}

.glass{
  position:absolute;
  left: 12px;
  bottom: 12px;
  right: 12px;
  background: rgba(255,255,255,.78);
  border: 1px solid rgba(31,127,134,.16);
  border-radius: 16px;
  padding: 12px;
  backdrop-filter: blur(10px);
}
.label{
  font-weight: 850;
  color: #23464f;
}
.sub{
  margin-top: 2px;
  color: var(--muted);
  font-weight: 650;
  font-size: 13px;
}

.stats{
  padding: 14px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(10px);
}
.stat{
  border: 1px solid rgba(31,127,134,.14);
  border-radius: 16px;
  padding: 12px;
  background: rgba(233,247,248,.45);
}
.n{
  font-size: 20px;
  font-weight: 900;
  color: #23464f;
}
.s{
  margin-top: 4px;
  color: var(--muted);
  font-weight: 650;
  font-size: 13px;
  line-height: 1.3;
}

@media (max-width: 920px){
  .wrap{ grid-template-columns: 1fr; }
  .stats{ grid-template-columns: 1fr; }
  .ph{ height: 240px; }
}
</style>
