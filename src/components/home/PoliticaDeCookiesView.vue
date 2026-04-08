<template>
  <main id="top" class="cookies">
    <section class="cookies__hero">
      <div class="cookies__hero-content contenedor">
        <span class="cookies__eyebrow">Información legal</span>

        <h1>Política de Cookies</h1>

        <p class="cookies__lead">
          En Aristas Odontología Integrada utilizamos cookies y tecnologías
          similares para el funcionamiento del sitio y la integración de
          servicios de terceros, como Google Maps.
        </p>

        <div class="cookies__meta">
          <span class="cookies__meta-pill">
            Última actualización: {{ ultimaActualizacion }}
          </span>
        </div>
      </div>
    </section>

    <section class="cookies__contenido contenedor">
      <article class="cookies__card cookies__card--intro">
        <p class="cookies__intro">
          Esta Política de Cookies explica qué son las cookies, qué tipos de
          tecnologías puede utilizar este sitio y cómo podés gestionarlas desde
          tu navegador.
        </p>
      </article>

      <article
        v-for="(seccion, index) in secciones"
        :key="index"
        class="cookies__card"
      >
        <h2>
          <span class="cookies__section-index">
            {{ String(index + 1).padStart(2, "0") }}
          </span>
          <span>{{ seccion.titulo }}</span>
        </h2>

        <template v-if="seccion.tipo === 'parrafos'">
          <p v-for="(parrafo, i) in seccion.parrafos" :key="i">
            {{ parrafo }}
          </p>
        </template>

        <template v-else-if="seccion.tipo === 'lista'">
          <p v-if="seccion.texto">{{ seccion.texto }}</p>
          <ul class="cookies__list">
            <li v-for="(item, i) in seccion.items" :key="i">
              {{ item }}
            </li>
          </ul>
        </template>

        <template v-else-if="seccion.tipo === 'contacto'">
          <p>
            Si tenés dudas sobre esta Política de Cookies, podés comunicarte con
            nosotros:
          </p>

          <div class="cookies__datos">
            <p><strong>{{ consultorio.nombre }}</strong></p>
            <p><strong>Email:</strong> {{ consultorio.email }}</p>
            <p><strong>Teléfono:</strong> {{ consultorio.telefono }}</p>
            <p><strong>Domicilio:</strong> {{ consultorio.domicilio }}</p>
          </div>
        </template>
      </article>
    </section>
  </main>
</template>

<script setup>
const ultimaActualizacion = "31 de marzo de 2026";

const consultorio = {
  nombre: "Aristas Odontología Integrada",
  domicilio: "Las Lajas 527, Plottier, Neuquén",
  email: "aristas@correo.com",
  telefono: "+54 9 299 655-6655",
};

const secciones = [
  {
    titulo: "¿Qué son las cookies?",
    tipo: "parrafos",
    parrafos: [
      "Las cookies son pequeños archivos que se almacenan en el navegador del usuario cuando visita un sitio web.",
      "Pueden utilizarse para recordar preferencias, facilitar funciones técnicas, mejorar la experiencia de navegación o permitir la carga correcta de servicios integrados.",
    ],
  },
  {
    titulo: "¿Qué tipos de cookies o tecnologías similares puede usar este sitio?",
    tipo: "lista",
    texto:
      "Este sitio puede utilizar las siguientes categorías de cookies o tecnologías similares:",
    items: [
      "Cookies técnicas o necesarias: indispensables para el funcionamiento básico, la seguridad y la navegación del sitio.",
      "Tecnologías vinculadas a servicios de terceros: cuando se integra contenido externo, como Google Maps, esos servicios pueden utilizar sus propias cookies o tecnologías similares.",
    ],
  },
  {
    titulo: "Uso de Google Maps",
    tipo: "parrafos",
    parrafos: [
      "Este sitio puede incluir un mapa embebido de Google Maps para facilitar la ubicación del consultorio.",
      "Al interactuar con ese contenido, Google puede recopilar información técnica y utilizar cookies o tecnologías similares de acuerdo con sus propias políticas de privacidad y cookies.",
      "Aristas Odontología Integrada no controla directamente las cookies que puedan ser utilizadas por servicios de terceros integrados en la página.",
    ],
  },
  {
    titulo: "¿Para qué usamos estas tecnologías?",
    tipo: "lista",
    texto:
      "Las cookies o tecnologías similares pueden utilizarse para las siguientes finalidades:",
    items: [
      "Permitir la correcta carga y funcionamiento del sitio.",
      "Mejorar la experiencia de navegación del usuario.",
      "Facilitar funcionalidades integradas, como la visualización del mapa.",
      "Reforzar la seguridad y el funcionamiento técnico del sitio.",
    ],
  },
  {
    titulo: "Gestión de cookies",
    tipo: "parrafos",
    parrafos: [
      "Podés configurar tu navegador para bloquear, rechazar o eliminar cookies.",
      "Sin embargo, algunas funciones del sitio o de servicios de terceros podrían no funcionar correctamente si deshabilitás ciertas cookies o tecnologías similares.",
    ],
  },
  {
    titulo: "Cookies de terceros",
    tipo: "parrafos",
    parrafos: [
      "Este sitio puede incorporar servicios prestados por terceros. En esos casos, dichos proveedores pueden aplicar sus propias políticas de privacidad y cookies.",
      "Recomendamos revisar especialmente las políticas de Google si utilizás el mapa embebido disponible en esta web.",
    ],
  },
  {
    titulo: "Cambios en esta política",
    tipo: "parrafos",
    parrafos: [
      "Nos reservamos el derecho de actualizar esta Política de Cookies para reflejar cambios técnicos, legales o funcionales del sitio.",
      "La versión vigente será siempre la publicada en esta página, con indicación de su fecha de última actualización.",
    ],
  },
  {
    titulo: "Contacto",
    tipo: "contacto",
  },
];
</script>

<style scoped>
:global(:root) {
  --cookies-bg: #f4f8f8;
  --cookies-surface: rgba(255, 255, 255, 0.88);
  --cookies-surface-strong: rgba(255, 255, 255, 0.94);
  --cookies-border: rgba(43, 115, 119, 0.14);
  --cookies-border-strong: rgba(43, 115, 119, 0.18);
  --cookies-primary: #2f8f95;
  --cookies-primary-soft: rgba(47, 143, 149, 0.1);
  --cookies-title: #24444d;
  --cookies-text: #53646b;
  --cookies-text-soft: #708187;
  --cookies-shadow: 0 16px 42px rgba(23, 57, 64, 0.08);
}

.cookies {
  min-height: 100vh;
  color: var(--cookies-text);
  background:
    radial-gradient(circle at top left, rgba(47, 143, 149, 0.08), transparent 24%),
    radial-gradient(circle at bottom right, rgba(47, 143, 149, 0.05), transparent 20%),
    linear-gradient(180deg, #f8fbfb 0%, var(--cookies-bg) 100%);
}

.contenedor {
  width: min(1100px, calc(100% - 2rem));
  margin-inline: auto;
}

.cookies__hero {
  padding: 5.5rem 0 2.2rem;
}

.cookies__hero-content {
  text-align: center;
}

.cookies__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.48rem 0.92rem;
  border-radius: 999px;
  background: var(--cookies-primary-soft);
  color: var(--cookies-primary);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
  border: 1px solid rgba(47, 143, 149, 0.12);
}

.cookies__hero h1 {
  margin: 0;
  color: var(--cookies-title);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.cookies__lead {
  width: min(760px, 100%);
  margin: 1rem auto 0;
  font-size: 1.08rem;
  line-height: 1.75;
  color: var(--cookies-text);
}

.cookies__meta {
  margin-top: 1.35rem;
}

.cookies__meta-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.62rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--cookies-border);
  color: var(--cookies-text-soft);
  font-size: 0.92rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
}

.cookies__contenido {
  display: grid;
  gap: 1.15rem;
  padding: 1rem 0 4.5rem;
}

.cookies__card {
  background: var(--cookies-surface);
  border: 1px solid var(--cookies-border);
  border-radius: 24px;
  padding: 1.55rem 1.35rem;
  box-shadow: var(--cookies-shadow);
  backdrop-filter: blur(10px);
}

.cookies__card--intro {
  background: var(--cookies-surface-strong);
  border-color: var(--cookies-border-strong);
}

.cookies__intro {
  margin: 0;
  font-size: 1rem;
  line-height: 1.85;
  color: var(--cookies-title);
}

.cookies__card h2 {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0 0 1rem;
  color: var(--cookies-title);
  font-size: 1.22rem;
  line-height: 1.35;
}

.cookies__section-index {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.15rem;
  height: 2.15rem;
  padding: 0 0.5rem;
  border-radius: 999px;
  background: var(--cookies-primary-soft);
  color: var(--cookies-primary);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.cookies__card p {
  margin: 0 0 0.95rem;
  line-height: 1.8;
}

.cookies__card p:last-child {
  margin-bottom: 0;
}

.cookies__list {
  margin: 0.8rem 0 0;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.68rem;
}

.cookies__card li {
  line-height: 1.75;
}

.cookies__datos {
  margin-top: 0.95rem;
  padding: 1rem 1.05rem;
  border-radius: 18px;
  background: rgba(47, 143, 149, 0.06);
  border: 1px solid rgba(47, 143, 149, 0.12);
}

.cookies__datos p {
  margin: 0 0 0.55rem;
}

.cookies__datos p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .cookies__hero {
    padding: 4.5rem 0 1.6rem;
  }

  .cookies__lead {
    font-size: 0.98rem;
    line-height: 1.7;
  }

  .cookies__contenido {
    gap: 1rem;
    padding-bottom: 3.5rem;
  }

  .cookies__card {
    border-radius: 20px;
    padding: 1.2rem 1rem;
  }

  .cookies__card h2 {
    align-items: flex-start;
    gap: 0.7rem;
    font-size: 1.1rem;
  }

  .cookies__section-index {
    min-width: 1.95rem;
    height: 1.95rem;
    font-size: 0.78rem;
  }

  .cookies__card p,
  .cookies__card li,
  .cookies__intro {
    font-size: 0.97rem;
  }

  .cookies__datos {
    padding: 0.95rem;
    border-radius: 16px;
  }
}
</style>