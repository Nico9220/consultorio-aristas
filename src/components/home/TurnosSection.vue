<script setup lang="ts">
import { reactive } from "vue";
import BaseButton from "../ui/BaseButton.vue";

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE as string;


const form = reactive({
  nombre: "",
  telefono: "",
  email: "",
  franja: "",
  mensaje: "",
});

const buildMsg = () => {
  const lines = [
    "Hola! Quisiera solicitar un turno.",
    "",
    `Nombre: ${form.nombre || "-"}`,
    `Teléfono: ${form.telefono || "-"}`,
    `Email: ${form.email || "-"}`,
    `Franja horaria preferida (de ser posible): ${form.franja || "-"}`,
    `Mensaje: ${form.mensaje || "-"}`,
  ];
  return lines.join("\n");
};

const enviarWhatsApp = () => {
  const text = encodeURIComponent(buildMsg());
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank", "noopener,noreferrer");
};
</script>

<template>
  <section id="turnos" class="snap-section page-section turnos">
    <div class="container grid">
      <div>
        <h2 class="h2">Reservar Turno</h2>
        <p class="p">
          Dejanos tus datos y una <strong>franja horaria preferida</strong> (de ser posible).
          Luego confirmamos disponibilidad por WhatsApp o mail.
        </p>
      </div>

      <form class="card form" @submit.prevent="enviarWhatsApp">
        <div class="row">
          <label>Nombre y apellido</label>
          <input v-model="form.nombre" class="input" placeholder="Ej: Juan Pérez" />
        </div>

        <div class="row">
          <label>Teléfono</label>
          <input v-model="form.telefono" class="input" placeholder="Ej: +54 9 ..." />
        </div>

        <div class="row">
          <label>Email</label>
          <input v-model="form.email" class="input" type="email" placeholder="Ej: correo@email.com" />
        </div>

        <div class="row">
          <label>Franja horaria preferida (de ser posible)</label>
          <input
            v-model="form.franja"
            class="input"
            placeholder='Ej: "Después de las 17" / "Entre 13 y 17" / "Solo mañanas"'
          />
        </div>

        <div class="row">
          <label>Mensaje (opcional)</label>
          <textarea
            v-model="form.mensaje"
            class="input"
            rows="4"
            placeholder="Contanos el motivo de la consulta (opcional)"
          />
        </div>

        <div class="actions">
          <BaseButton size="lg" type="submit">Enviar por WhatsApp</BaseButton>
          <BaseButton variant="ghost" size="lg" @click="$router.replace({ path: '/', hash: '#contacto' })">
            Ver Contacto
          </BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}
.form { padding: 18px; }
.row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}
label { font-weight: 750; color: #2c5a63; }
.input {
  border-radius: 14px;
  border: 1px solid rgba(31, 127, 134, 0.18);
  padding: 10px 12px;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
}
.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.note {
  margin-top: 14px;
  padding: 14px;
  color: #365a63;
  background: rgba(233, 247, 248, 0.65);
}
@media (max-width: 920px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
