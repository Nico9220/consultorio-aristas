<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseButton from "../ui/BaseButton.vue";

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE as string;

const form = reactive({
  nombre: "",
  telefono: "",
  email: "",
  franja: "",
  mensaje: "",
  aceptaPoliticas: false,
});

const modalAbierto = ref(false);
const modalTipo = ref<"privacidad" | "cookies" | null>(null);

const abrirModal = (tipo: "privacidad" | "cookies") => {
  modalTipo.value = tipo;
  modalAbierto.value = true;
};

const cerrarModal = () => {
  modalAbierto.value = false;
  modalTipo.value = null;
};

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
  if (!form.aceptaPoliticas) return;

  const text = encodeURIComponent(buildMsg());
  window.open(
    `https://wa.me/${WHATSAPP_PHONE}?text=${text}`,
    "_blank",
    "noopener,noreferrer",
  );
};
</script>

<template>
  <section id="turnos" class="snap-section page-section turnos">
    <div class="container grid">
      <div>
        <h2 class="h2">Reservar Turno</h2>
        <p class="p">
          Dejanos tus datos y una <strong>franja horaria preferida</strong> (de
          ser posible). Luego confirmamos disponibilidad por WhatsApp o mail.
        </p>
      </div>

      <form class="card form" @submit.prevent="enviarWhatsApp">
        <div class="row">
          <label for="nombre">Nombre y apellido</label>
          <input
            id="nombre"
            v-model="form.nombre"
            class="input"
            placeholder="Ej: Juan Pérez"
          />
        </div>

        <div class="row">
          <label for="telefono">Teléfono</label>
          <input
            id="telefono"
            v-model="form.telefono"
            class="input"
            placeholder="Ej: +54 9 ..."
          />
        </div>

        <div class="row">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            class="input"
            type="email"
            placeholder="Ej: correo@email.com"
          />
        </div>

        <div class="row">
          <label for="franja">Franja horaria preferida (de ser posible)</label>
          <input
            id="franja"
            v-model="form.franja"
            class="input"
            placeholder='Ej: "Después de las 17" / "Entre 13 y 17" / "Solo mañanas"'
          />
        </div>

        <div class="row">
          <label for="mensaje">Mensaje (opcional)</label>
          <textarea
            id="mensaje"
            v-model="form.mensaje"
            class="input"
            rows="4"
            placeholder="Si querés, dejá una aclaración breve sobre horarios o disponibilidad. No envíes información médica sensible."
          />
        </div>

        <div class="privacyBox">
          <label class="checkboxLabel" for="aceptaPoliticas">
            <input
              id="aceptaPoliticas"
              v-model="form.aceptaPoliticas"
              type="checkbox"
              required
            />
            <span class="checkboxText">
              He leído y acepto la
              <button
                type="button"
                class="inlinePolicyLink"
                @click.stop="abrirModal('privacidad')"
              >
                Política de Privacidad
              </button>
              y la
              <button
                type="button"
                class="inlinePolicyLink"
                @click.stop="abrirModal('cookies')"
              >
                Política de Cookies</button
              >.
            </span>
          </label>

          <div class="privacyActions">
            <button
              type="button"
              class="policyChip"
              @click.stop="abrirModal('privacidad')"
            >
              Ver Privacidad
            </button>

            <button
              type="button"
              class="policyChip"
              @click.stop="abrirModal('cookies')"
            >
              Ver Cookies
            </button>
          </div>

          <p class="privacyHelp">
            No envíes información médica sensible por este medio.
          </p>
        </div>
        <div class="actions">
          <BaseButton size="lg" type="submit" :disabled="!form.aceptaPoliticas">
            Enviar por WhatsApp
          </BaseButton>

          <BaseButton
            type="button"
            variant="ghost"
            size="lg"
            @click="$router.replace({ path: '/', hash: '#contacto' })"
          >
            Ver Contacto
          </BaseButton>
        </div>
      </form>
    </div>
    <div v-if="modalAbierto" class="modalOverlay" @click="cerrarModal">
      <div class="modalCard" @click.stop>
        <div class="modalHeader">
          <h3>
            {{
              modalTipo === "privacidad"
                ? "Política de Privacidad"
                : "Política de Cookies"
            }}
          </h3>

          <button type="button" class="modalClose" @click="cerrarModal">
            ×
          </button>
        </div>

        <div class="modalBody">
          <template v-if="modalTipo === 'privacidad'">
            <p>
              En Aristas Odontología Integrada valoramos y respetamos la
              privacidad de quienes visitan nuestro sitio web.
            </p>
            <p>
              Los datos personales que el usuario proporcione serán utilizados
              únicamente para responder consultas, coordinar contacto o
              gestionar solicitudes de turno.
            </p>
            <p>
              Te pedimos que no envíes información médica sensible por este
              medio.
            </p>
            <p>
              El usuario puede solicitar acceso, rectificación, actualización o
              supresión de sus datos personales a través de los canales de
              contacto publicados en este sitio.
            </p>
          </template>

          <template v-else-if="modalTipo === 'cookies'">
            <p>
              Este sitio puede utilizar cookies o tecnologías similares
              necesarias para su funcionamiento técnico y para integrar
              servicios de terceros, como Google Maps.
            </p>
            <p>
              Al interactuar con contenidos embebidos, dichos terceros pueden
              aplicar sus propias políticas de cookies y privacidad.
            </p>
            <p>
              El usuario puede configurar su navegador para bloquear o eliminar
              cookies, aunque algunas funciones podrían verse afectadas.
            </p>
          </template>
        </div>

        <div class="modalActions">
          <BaseButton type="button" size="lg" @click="cerrarModal">
            Cerrar
          </BaseButton>
        </div>
      </div>
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

.form {
  padding: 18px;
}

.row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

label {
  font-weight: 750;
  color: #2c5a63;
}

.input {
  border-radius: 14px;
  border: 1px solid rgba(31, 127, 134, 0.18);
  padding: 10px 12px;
  outline: none;
  background: rgba(255, 255, 255, 0.9);
}

.privacyBox {
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(233, 247, 248, 0.72);
  border: 1px solid rgba(31, 127, 134, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.checkboxLabel {
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: start;
  column-gap: 12px;
  row-gap: 0;
  font-weight: 600;
  line-height: 1.6;
  color: #365a63;
  cursor: pointer;
}

.checkboxLabel input[type="checkbox"] {
  margin: 0.2rem 0 0;
  accent-color: #2f8f95;
  inline-size: 18px;
  block-size: 18px;
  flex-shrink: 0;
}

.checkboxText {
  display: inline;
  font-size: 0.98rem;
}

.inlinePolicyLink {
  background: none;
  border: none;
  padding: 0;
  margin: 0 0.1rem;
  color: #247b83;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 2px;
}

.inlinePolicyLink:hover {
  color: #1f6c73;
}

.privacyActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
  margin-left: 32px;
}

.policyChip {
  appearance: none;
  border: 1px solid rgba(31, 127, 134, 0.16);
  background: rgba(255, 255, 255, 0.72);
  color: #287983;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 0.92rem;
  font-weight: 750;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;
}

.policyChip:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(31, 127, 134, 0.24);
  color: #1f6c73;
  transform: translateY(-1px);
}

.policyChip:focus-visible,
.inlinePolicyLink:focus-visible {
  outline: 2px solid rgba(47, 143, 149, 0.35);
  outline-offset: 3px;
  border-radius: 10px;
}

.policyLink {
  color: #2a7d84;
  font-weight: 700;
  text-decoration: none;
}

.policyLink:hover {
  text-decoration: underline;
}

.privacyHelp {
  margin: 12px 0 0 32px;
  font-size: 0.93rem;
  line-height: 1.55;
  color: #61747a;
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

.privacyLinks {
  margin: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: #5e7177;
}

.policyLink {
  background: none;
  border: none;
  padding: 0;
  color: #2a7d84;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}

.policyLink:hover {
  text-decoration: underline;
}

.modalOverlay {
  position: fixed;
  inset: 0;
  background: rgba(20, 35, 40, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 999;
}

.modalCard {
  width: min(760px, 100%);
  max-height: 85vh;
  overflow: auto;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(31, 127, 134, 0.12);
  box-shadow: 0 20px 60px rgba(20, 35, 40, 0.18);
  padding: 1.25rem;
}

.modalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.modalHeader h3 {
  margin: 0;
  color: #24444d;
  font-size: 1.4rem;
}

.modalClose {
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: #5e7177;
}

.modalBody {
  color: #53646b;
  line-height: 1.75;
}

.modalBody p {
  margin: 0 0 1rem;
}

.modalActions {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 920px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .privacyBox {
    padding: 14px;
    border-radius: 16px;
  }

  .checkboxLabel {
    grid-template-columns: 18px 1fr;
    column-gap: 10px;
  }

  .checkboxText {
    font-size: 0.96rem;
    line-height: 1.55;
  }

  .privacyActions {
    margin-left: 28px;
    gap: 8px;
  }

  .policyChip {
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 10px 14px;
  }

  .privacyHelp {
    margin-left: 28px;
    font-size: 0.91rem;
  }
}
</style>
