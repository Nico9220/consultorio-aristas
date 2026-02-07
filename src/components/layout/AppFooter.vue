<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
</script>

<template>
  <footer id="footer" class="footer snap-footer">
    <div class="container grid">
      <div class="brandBox">
        <img class="logo" src="../../assets/brand/isologo.jpg" alt="Aristas" />
        <div>
          <div class="name">Aristas</div>
          <div class="tag">Odontología Integrada</div>
        </div>
        <p class="desc">
          Atención odontológica integral con un enfoque humano y personalizado.
        </p>

        <div class="newsletter card">
          <div class="newsTitle">Recibí novedades</div>
          <div class="newsRow">
            <input class="input" placeholder="Ingresá tu email" />
            <BaseButton>Suscribirse</BaseButton>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="colTitle">Menú</div>
        <RouterLink class="fLink" to="/">Inicio</RouterLink>
        <RouterLink class="fLink" to="/servicios">Servicios</RouterLink>
        <RouterLink class="fLink" to="/turnos">Turnos</RouterLink>
        <RouterLink class="fLink" to="/contacto">Contacto</RouterLink>
      </div>

      <div class="col">
        <div class="colTitle">Consultorio</div>
        <span class="fLink">Acerca de Nosotros</span>
        <span class="fLink">Nuestro Equipo</span>
      </div>

      <div class="col">
        <div class="colTitle">Contacto</div>
        <div class="line">📍 Dirección (editar)</div>
        <div class="line">📞 +54 9 ...</div>
        <div class="line">✉️ aristas@correo.com</div>
      </div>
    </div>

    <div class="bottom">
      <div class="container bottomInner">
        <span>© {{ new Date().getFullYear() }} Aristas Odontología Integrada</span>
        <span class="muted">Todos los derechos reservados.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  padding-top: 40px;
  border-top: 1px solid rgba(31,127,134,.10);
  background: linear-gradient(180deg, transparent, rgba(233,247,248,.55));
}
.grid{
  display:grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 22px;
  padding-bottom: 28px;
}
.brandBox{ display:flex; flex-direction:column; gap: 10px; }
.logo{ width: 52px; height: 52px; border-radius: 18px; }
.name{ font-family: ui-serif, Georgia, "Times New Roman", Times, serif; font-size: 24px; line-height:1; }
.tag{ color: var(--muted); font-size: 13px; margin-top: 2px; }
.desc{ color: var(--muted); margin: 8px 0 0; line-height:1.6; max-width: 36ch; }

.newsletter{ padding: 14px; }
.newsTitle{ font-weight: 750; margin-bottom: 10px; }
.newsRow{ display:flex; gap: 10px; }
.input{
  flex: 1;
  border-radius: 14px;
  border: 1px solid rgba(31,127,134,.18);
  padding: 10px 12px;
  outline: none;
  background: rgba(255,255,255,.85);
}

.col{ display:flex; flex-direction:column; gap: 10px; }
.colTitle{ font-weight: 800; }
.fLink{ color: #3b5560; font-weight: 600; }
.line{ color: #3b5560; font-weight: 600; }

.bottom{
  border-top: 1px solid rgba(31,127,134,.10);
  padding: 14px 0;
}
.bottomInner{
  display:flex;
  justify-content:space-between;
  gap: 10px;
  color: #3b5560;
  font-weight: 600;
}
.muted{ color: var(--muted); font-weight: 600; }

@media (max-width: 920px){
  .grid{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px){
  .grid{ grid-template-columns: 1fr; }
  .bottomInner{ flex-direction:column; }
}
</style>
