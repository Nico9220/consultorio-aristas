<template>
  <main id="top" class="cookies">
    <section class="cookies__hero">
      <div class="cookies__hero-content contenedor">
        <span class="cookies__eyebrow">Información legal</span>
        <h1>Política de Cookies</h1>
        <p>
          En Aristas Odontología Integrada utilizamos cookies y tecnologías
          similares para el funcionamiento del sitio y la integración de
          servicios de terceros, como Google Maps.
        </p>
        <div class="cookies__meta">
          <span>Última actualización: {{ ultimaActualizacion }}</span>
        </div>
      </div>
    </section>

    <section class="cookies__contenido contenedor">
      <article class="cookies__card">
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
        <h2>{{ seccion.titulo }}</h2>

        <template v-if="seccion.tipo === 'parrafos'">
          <p v-for="(parrafo, i) in seccion.parrafos" :key="i">
            {{ parrafo }}
          </p>
        </template>

        <template v-else-if="seccion.tipo === 'lista'">
          <p v-if="seccion.texto">{{ seccion.texto }}</p>
          <ul>
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
  telefono: "+54 9 299...",
};

const secciones = [
  {
    titulo: "1. ¿Qué son las cookies?",
    tipo: "parrafos",
    parrafos: [
      "Las cookies son pequeños archivos que se almacenan en el navegador del usuario cuando visita un sitio web.",
      "Pueden utilizarse para recordar preferencias, facilitar funciones técnicas, mejorar la experiencia de navegación o permitir la carga correcta de servicios integrados.",
    ],
  },
  {
    titulo: "2. ¿Qué tipos de cookies o tecnologías similares puede usar este sitio?",
    tipo: "lista",
    texto:
      "Este sitio puede utilizar las siguientes categorías de cookies o tecnologías similares:",
    items: [
      "Cookies técnicas o necesarias: indispensables para el funcionamiento básico, la seguridad y la navegación del sitio.",
      "Tecnologías vinculadas a servicios de terceros: cuando se integra contenido externo, como Google Maps, esos servicios pueden utilizar sus propias cookies o tecnologías similares.",
    ],
  },
  {
    titulo: "3. Uso de Google Maps",
    tipo: "parrafos",
    parrafos: [
      "Este sitio puede incluir un mapa embebido de Google Maps para facilitar la ubicación del consultorio.",
      "Al interactuar con ese contenido, Google puede recopilar información técnica y utilizar cookies o tecnologías similares de acuerdo con sus propias políticas de privacidad y cookies.",
      "Aristas Odontología Integrada no controla directamente las cookies que puedan ser utilizadas por servicios de terceros integrados en la página.",
    ],
  },
  {
    titulo: "4. ¿Para qué usamos estas tecnologías?",
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
    titulo: "5. Gestión de cookies",
    tipo: "parrafos",
    parrafos: [
      "Podés configurar tu navegador para bloquear, rechazar o eliminar cookies.",
      "Sin embargo, algunas funciones del sitio o de servicios de terceros podrían no funcionar correctamente si deshabilitás ciertas cookies o tecnologías similares.",
    ],
  },
  {
    titulo: "6. Cookies de terceros",
    tipo: "parrafos",
    parrafos: [
      "Este sitio puede incorporar servicios prestados por terceros. En esos casos, dichos proveedores pueden aplicar sus propias políticas de privacidad y cookies.",
      "Recomendamos revisar especialmente las políticas de Google si utilizás el mapa embebido disponible en esta web.",
    ],
  },
  {
    titulo: "7. Cambios en esta política",
    tipo: "parrafos",
    parrafos: [
      "Nos reservamos el derecho de actualizar esta Política de Cookies para reflejar cambios técnicos, legales o funcionales del sitio.",
      "La versión vigente será siempre la publicada en esta página, con indicación de su fecha de última actualización.",
    ],
  },
  {
    titulo: "8. Contacto",
    tipo: "contacto",
  },
];
</script>

<style scoped>
:global(:root) {
  --cookies-bg: #f4f8f8;
  --cookies-surface: rgba(255, 255, 255, 0.92);
  --cookies-border: rgba(43, 115, 119, 0.14);
  --cookies-primary: #2f8f95;
  --cookies-primary-soft: rgba(47, 143, 149, 0.1);
  --cookies-title: #24444d;
  --cookies-text: #53646b;
  --cookies-shadow: 0 12px 40px rgba(23, 57, 64, 0.08);
}

.cookies {
  background:
    radial-gradient(circle at top left, rgba(47, 143, 149, 0.08), transparent 28%),
    linear-gradient(180deg, #f7fbfb 0%, var(--cookies-bg) 100%);
  min-height: 100vh;
  color: var(--cookies-text);
}

.contenedor {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.cookies__hero {
  padding: 5.5rem 0 2rem;
}

.cookies__hero-content {
  text-align: center;
}

.cookies__eyebrow {
  display: inline-block;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background-color: var(--cookies-primary-soft);
  color: var(--cookies-primary);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.cookies__hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.1;
  color: var(--cookies-title);
}

.cookies__hero p {
  width: min(760px, 100%);
  margin: 0 auto;
  font-size: 1.06rem;
  line-height: 1.7;
}

.cookies__meta {
  margin-top: 1.25rem;
  font-size: 0.95rem;
  color: #708187;
}

.cookies__contenido {
  padding: 1rem 0 4rem;
  display: grid;
  gap: 1.2rem;
}

.cookies__card {
  background: var(--cookies-surface);
  border: 1px solid var(--cookies-border);
  border-radius: 24px;
  padding: 1.6rem 1.4rem;
  box-shadow: var(--cookies-shadow);
  backdrop-filter: blur(8px);
}

.cookies__intro {
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
}

.cookies__card h2 {
  margin: 0 0 1rem;
  color: var(--cookies-title);
  font-size: 1.25rem;
  line-height: 1.3;
}

.cookies__card p {
  margin: 0 0 0.95rem;
  line-height: 1.8;
}

.cookies__card p:last-child {
  margin-bottom: 0;
}

.cookies__card ul {
  margin: 0.75rem 0 0;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.65rem;
}

.cookies__card li {
  line-height: 1.75;
}

.cookies__datos {
  margin-top: 0.8rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  background: rgba(47, 143, 149, 0.06);
  border: 1px solid rgba(47, 143, 149, 0.1);
}

.cookies__datos p {
  margin: 0 0 0.55rem;
}

.cookies__datos p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .cookies__hero {
    padding: 4.5rem 0 1.5rem;
  }

  .cookies__card {
    border-radius: 20px;
    padding: 1.25rem 1rem;
  }

  .cookies__hero p,
  .cookies__card p,
  .cookies__card li {
    font-size: 0.97rem;
  }
}
</style>