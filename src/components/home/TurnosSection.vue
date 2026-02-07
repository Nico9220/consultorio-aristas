<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
</script>

<template>
  <section id="turnos" class="snap-section page-section section turnos">
    <div class="container grid">
      <div>
        <h2 class="h2">Reservar Turno</h2>
        <p class="p">
          Dejanos tus datos y una preferencia de horario. Luego confirmamos por WhatsApp o mail.
        </p>

        <div class="card note">
          <strong>Tip:</strong> si van a usar WhatsApp, después lo conectamos con un link directo tipo
          <code>wa.me</code>.
        </div>
      </div>

      <form class="card form" @submit.prevent>
        <div class="row">
          <label>Nombre y apellido</label>
          <input class="input" placeholder="Ej: Juan Pérez" />
        </div>
        <div class="row">
          <label>Teléfono</label>
          <input class="input" placeholder="Ej: +54 9 ..." />
        </div>
        <div class="row">
          <label>Email</label>
          <input class="input" type="email" placeholder="Ej: correo@email.com" />
        </div>
        <div class="row two">
          <div>
            <label>Fecha preferida</label>
            <input class="input" type="date" />
          </div>
          <div>
            <label>Horario preferido</label>
            <input class="input" type="time" />
          </div>
        </div>
        <div class="row">
          <label>Mensaje</label>
          <textarea class="input" rows="4" placeholder="Contanos el motivo de la consulta (opcional)"></textarea>
        </div>

        <div class="actions">
          <BaseButton size="lg">Enviar Solicitud</BaseButton>
          <BaseButton variant="ghost" size="lg" to="/contacto">Ver Contacto</BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}
.form{ padding: 18px; }
.row{ display:flex; flex-direction:column; gap: 6px; margin-bottom: 12px; }
label{ font-weight: 750; color: #2c5a63; }
.input{
  border-radius: 14px;
  border: 1px solid rgba(31,127,134,.18);
  padding: 10px 12px;
  outline: none;
  background: rgba(255,255,255,.9);
}
.two{ display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.actions{ display:flex; gap: 10px; flex-wrap: wrap; margin-top: 6px; }

.note{
  margin-top: 14px;
  padding: 14px;
  color: #365a63;
  background: rgba(233,247,248,.65);
}
code{ background: rgba(255,255,255,.8); padding: 2px 6px; border-radius: 8px; }

@media (max-width: 920px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
