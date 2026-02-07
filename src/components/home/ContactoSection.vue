<template>
  <section id="contacto" class="snap-section page-section section contacto">
    <div class="container grid">
      <div>
        <h2 class="h2">Contacto</h2>
        <p class="p">Info real del consul</p>

        <div class="card box">
          <div class="line">📍 Dirección: (editar)</div>
          <div class="line">🕒 Horarios: (editar)</div>
          <div class="line">📞 WhatsApp: (editar)</div>
          <div class="line">✉️ Email: (editar)</div>
        </div>
      </div>

      <div class="card map">
        <div class="ph">Mapa (placeholder) — implementamos Google Maps</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.box{ padding: 16px; margin-top: 14px; }
.line{ font-weight: 650; color: #3b5560; margin-bottom: 8px; }

.map{ padding: 14px; }
.ph{
  height: 280px;
  border-radius: 16px;
  border: 1px solid rgba(31,127,134,.14);
  background: linear-gradient(135deg, rgba(46,168,176,.18), rgba(255,255,255,.85));
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding: 18px;
  color: #2c5a63;
  font-weight: 750;
}

@media (max-width: 920px){
  .grid{ grid-template-columns: 1fr; }
}
</style>
