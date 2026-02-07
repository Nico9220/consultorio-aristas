<script setup lang="ts">
import { MapPin, Clock, MessageCircle } from "lucide-vue-next";

const ADDRESS = "Las Lajas 527, Plottier, Neuquén";
const HOURS = "Solicitud de turnos: 8:30 a 12:30";

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE as string;
const WHATSAPP_DISPLAY =
  (import.meta.env.VITE_WHATSAPP_DISPLAY as string) || WHATSAPP_PHONE;

const WHATSAPP_E164 =
  (import.meta.env.VITE_WHATSAPP_E164 as string) || "5492996556655";

const mapsQuery = encodeURIComponent(ADDRESS);
const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
</script>

<template>
  <section id="contacto" class="snap-section page-section contacto">
    <div class="container wrap">
      <header class="head">
        <h2 class="h2">Contacto</h2>
        <p class="p">Dirección, horarios y canales de atención.</p>
      </header>

      <div class="grid">
        <div class="card infoCard">
          <div class="item">
            <div class="ic" aria-hidden="true">
              <MapPin class="ico" />
            </div>
            <div class="meta">
              <div class="k">Dirección</div>
              <div class="v">{{ ADDRESS }}</div>
              <a
                class="link"
                :href="mapsDirectionsUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
              </a>
            </div>
          </div>

          <div class="sep" />

          <div class="item">
            <div class="ic" aria-hidden="true">
              <Clock class="ico" />
            </div>
            <div class="meta">
              <div class="k">Horarios</div>
              <div class="v">{{ HOURS }}</div>
              <div class="hint">Confirmamos disponibilidad por WhatsApp.</div>
            </div>
          </div>

          <div class="sep" />

          <div class="item">
            <div class="ic" aria-hidden="true">
              <MessageCircle class="ico" />
            </div>
            <div class="meta">
              <div class="k">WhatsApp</div>
              <div class="v">{{ WHATSAPP_DISPLAY }}</div>
              <a
                class="link"
                :href="`https://wa.me/${WHATSAPP_E164}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div class="card mapCard">
          <iframe
            class="map"
            :src="mapsEmbedSrc"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.grid {
  display: grid;
  grid-template-columns: minmax(360px, 440px) 1fr;
  gap: 18px;
  align-items: stretch;
}

.infoCard {
  padding: 18px;
  border-radius: 22px;
  height: 100%;
}

.item {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 12px;
  align-items: start;
}

.ic {
  width: 44px;
  height: 44px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(233, 247, 248, 0.9);
  border: 1px solid rgba(31, 127, 134, 0.16);
  color: #1f7f86;
}

.ico {
  width: 18px;
  height: 18px;
}

.k {
  font-weight: 800;
  color: #244e57;
  font-size: 14px;
  margin-bottom: 2px;
}
.v {
  color: #2c5a63;
  font-weight: 700;
  line-height: 1.4;
}
.hint {
  margin-top: 6px;
  color: var(--muted);
  font-size: 13px;
}

.link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 800;
  color: #1f7f86;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}

.sep {
  height: 1px;
  background: rgba(31, 127, 134, 0.12);
  margin: 14px 0;
}

.mapCard {
  padding: 0;
  border-radius: 22px;
  overflow: hidden;
  height: 100%;
  min-height: 520px;
}

.map {
  width: 100%;
  height: 100%;
  min-height: 520px;
  border: 0;
  display: block;
  background: rgba(233, 247, 248, 0.65);
}

@media (max-width: 920px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .mapCard {
    min-height: 340px;
  }
  .map {
    min-height: 340px;
  }
}
</style>
