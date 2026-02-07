<script setup lang="ts">
import { nextTick } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "../ui/BaseButton.vue";
import { scrollToId } from "@/utils/scrollToId";

import { MapPin, Phone, Mail } from "lucide-vue-next";
import logo from "../../assets/brand/isologo.jpg";

const router = useRouter();

const goTo = async (id: string) => {
  await router.replace({ path: "/", hash: `#${id}` });
  await nextTick();
  requestAnimationFrame(() => scrollToId(id));
};

const ADDRESS = "Las Lajas 527, Plottier, Neuquén";
const EMAIL = "aristas@correo.com";

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE as string;
const WHATSAPP_DISPLAY =
  (import.meta.env.VITE_WHATSAPP_DISPLAY as string) || WHATSAPP_PHONE;
</script>

<template>
  <footer id="footer" class="footer snap-footer">
    <div class="container grid">
      <div class="brandBox">
        <div class="brandRow">
          <img class="logo" :src="logo" alt="Aristas" />
          <div>
            <div class="name">Aristas</div>
            <div class="tag">Odontología Integrada</div>
          </div>
        </div>

        <p class="desc">
          Atención odontológica integral con un enfoque humano y personalizado.
        </p>

        <div class="quick">
          <BaseButton type="button" size="lg" @click="goTo('turnos')"
            >Reservar turno</BaseButton
          >
          <BaseButton
            type="button"
            variant="ghost"
            size="lg"
            @click="goTo('contacto')"
          >
            Consultar
          </BaseButton>
        </div>
      </div>

      <div class="col">
        <div class="colTitle">Menú</div>
        <button class="fLink" type="button" @click="goTo('inicio')">
          Inicio
        </button>
        <button class="fLink" type="button" @click="goTo('servicios')">
          Servicios
        </button>
        <button class="fLink" type="button" @click="goTo('turnos')">
          Turnos
        </button>
        <button class="fLink" type="button" @click="goTo('contacto')">
          Contacto
        </button>
      </div>

      <div class="col">
        <div class="colTitle">Consultorio</div>
        <span class="fLink mutedLink">Acerca de Nosotros</span>
        <span class="fLink mutedLink">Nuestro Equipo</span>
      </div>

      <div class="col">
        <div class="colTitle">Contacto</div>

        <div class="line">
          <MapPin :size="16" class="li" />
          <span>{{ ADDRESS }}</span>
        </div>

        <a
          class="line linkLine"
          :href="`https://wa.me/${WHATSAPP_PHONE}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone :size="16" class="li" />
          <span>{{ WHATSAPP_DISPLAY }}</span>
        </a>

        <a class="line linkLine" :href="`mailto:${EMAIL}`">
          <Mail :size="16" class="li" />
          <span>{{ EMAIL }}</span>
        </a>
      </div>
    </div>

    <div class="bottom">
      <div class="container bottomInner">
        <span
          >© {{ new Date().getFullYear() }} Aristas Odontología Integrada</span
        >
        <span class="muted">Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-top: 40px;
  border-top: 1px solid rgba(31, 127, 134, 0.1);
  background: linear-gradient(180deg, transparent, rgba(233, 247, 248, 0.55));
  scroll-snap-align: none;
}

.grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 22px;
  padding-bottom: 28px;
}

.brandBox {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.brandRow {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 52px;
  height: 52px;
  border-radius: 18px;
  object-fit: cover;
}
.name {
  font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  line-height: 1;
}
.tag {
  color: var(--muted);
  font-size: 13px;
  margin-top: 2px;
}
.desc {
  color: var(--muted);
  margin: 6px 0 0;
  line-height: 1.6;
  max-width: 36ch;
}

.quick {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.colTitle {
  font-weight: 800;
}

.fLink {
  color: #3b5560;
  font-weight: 700;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
.fLink:hover {
  text-decoration: underline;
}

.mutedLink {
  cursor: default;
  text-decoration: none !important;
  opacity: 0.9;
}

.line {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #3b5560;
  font-weight: 700;
  line-height: 1.45;
}

.li {
  color: #1f7f86;
  margin-top: 2px;
}

.linkLine {
  text-decoration: none;
}
.linkLine:hover {
  text-decoration: underline;
}

.bottom {
  border-top: 1px solid rgba(31, 127, 134, 0.1);
  padding: 14px 0;
}
.bottomInner {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #3b5560;
  font-weight: 600;
}
.muted {
  color: var(--muted);
  font-weight: 600;
}

@media (max-width: 920px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .bottomInner {
    flex-direction: column;
  }
}
</style>
