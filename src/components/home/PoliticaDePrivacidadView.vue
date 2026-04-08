<template>
  <main class="privacidad">
    <section class="privacidad__hero">
      <div class="privacidad__hero-content contenedor">
        <span class="privacidad__eyebrow">Información legal</span>

        <h1>Política de Privacidad</h1>

        <p class="privacidad__lead">
          En Aristas Odontología Integrada valoramos y respetamos la privacidad
          de quienes visitan nuestro sitio web.
        </p>

        <div class="privacidad__meta">
          <span class="privacidad__meta-pill">
            Última actualización: {{ ultimaActualizacion }}
          </span>
        </div>
      </div>
    </section>

    <section class="privacidad__contenido contenedor">
      <article class="privacidad__card privacidad__card--intro">
        <p class="privacidad__intro">
          Esta Política de Privacidad explica qué datos podemos recopilar a
          través de este sitio, para qué los utilizamos, cómo los protegemos y
          qué derechos tiene cada usuario sobre su información personal.
        </p>
      </article>

      <article
        v-for="(seccion, index) in secciones"
        :key="index"
        class="privacidad__card"
      >
        <h2>
          <span class="privacidad__section-index">
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
          <ul class="privacidad__list">
            <li v-for="(item, i) in seccion.items" :key="i">
              {{ item }}
            </li>
          </ul>
        </template>

        <template v-else-if="seccion.tipo === 'responsable'">
          <p>
            El responsable del tratamiento de los datos personales recopilados a
            través de este sitio es:
          </p>

          <div class="privacidad__datos">
            <p><strong>{{ consultorio.nombre }}</strong></p>
            <p><strong>Responsable:</strong> {{ consultorio.responsable }}</p>
            <p><strong>Domicilio:</strong> {{ consultorio.domicilio }}</p>
            <p><strong>Correo electrónico:</strong> {{ consultorio.email }}</p>
            <p><strong>Teléfono:</strong> {{ consultorio.telefono }}</p>
          </div>
        </template>

        <template v-else-if="seccion.tipo === 'contacto'">
          <p>
            Si tenés dudas sobre esta Política de Privacidad, podés comunicarte
            con nosotros:
          </p>

          <div class="privacidad__datos">
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
  responsable: "Aristas Odontología Integrada",
  domicilio: "Las Lajas 527, Plottier, Neuquén",
  email: "aristas@correo.com",
  telefono: "+54 9 299 655-6655",
};

const secciones = [
  {
    titulo: "Responsable del tratamiento de los datos",
    tipo: "responsable",
  },
  {
    titulo: "Qué datos podemos recopilar",
    tipo: "lista",
    texto:
      "A través de este sitio web podemos recopilar únicamente los datos que el usuario proporcione de forma voluntaria mediante formularios o canales de contacto.",
    items: [
      "Nombre y apellido",
      "Teléfono",
      "Correo electrónico",
      "Contenido del mensaje enviado",
      "Datos técnicos básicos de navegación cuando resulten necesarios para el funcionamiento, seguridad o analítica del sitio",
    ],
  },
  {
    titulo: "Finalidad del tratamiento",
    tipo: "lista",
    texto: "Los datos personales podrán ser utilizados para:",
    items: [
      "Responder consultas realizadas a través del sitio",
      "Gestionar solicitudes de contacto o turnos",
      "Brindar información sobre servicios del consultorio",
      "Mantener comunicaciones vinculadas con la atención solicitada",
      "Mejorar el funcionamiento, seguridad y experiencia de uso del sitio web",
      "Cumplir obligaciones legales, cuando corresponda",
    ],
  },
  {
    titulo: "Datos sensibles",
    tipo: "parrafos",
    parrafos: [
      "Este sitio no solicita deliberadamente datos sensibles a través de sus formularios de contacto generales.",
      "Te pedimos que no envíes por el sitio información sobre diagnósticos, síntomas, tratamientos, historia clínica u otros datos vinculados a tu salud, salvo que se indique expresamente un canal específico y seguro para ello.",
      "En caso de que el usuario envíe datos sensibles por iniciativa propia, estos serán tratados con la mayor reserva posible y solo en la medida necesaria para responder la consulta o derivarla adecuadamente.",
    ],
  },
  {
    titulo: "Base del tratamiento",
    tipo: "parrafos",
    parrafos: [
      "El tratamiento de los datos personales se realiza sobre la base del consentimiento del titular al completar formularios, enviar mensajes o utilizar voluntariamente los canales de contacto del sitio.",
      "También podrá realizarse cuando resulte necesario para atender una solicitud realizada por el usuario o para cumplir obligaciones legales aplicables.",
    ],
  },
  {
    titulo: "Conservación de los datos",
    tipo: "parrafos",
    parrafos: [
      "Los datos serán conservados durante el tiempo que resulte necesario para cumplir con la finalidad para la cual fueron recopilados y, cuando corresponda, durante los plazos exigidos por obligaciones legales, administrativas o de resguardo.",
    ],
  },
  {
    titulo: "Con quién podemos compartir datos",
    tipo: "lista",
    texto:
      "No vendemos ni comercializamos datos personales. Los datos podrán ser compartidos únicamente en los siguientes casos:",
    items: [
      "Con proveedores tecnológicos necesarios para el funcionamiento del sitio, como servicios de hosting, dominio, formularios de contacto, correo electrónico o analítica web",
      "Con plataformas de mensajería o contacto utilizadas a pedido del usuario, por ejemplo WhatsApp",
      "Con autoridades públicas o judiciales, cuando exista obligación legal",
    ],
  },
  {
    titulo: "Seguridad de la información",
    tipo: "parrafos",
    parrafos: [
      "Adoptamos medidas técnicas y organizativas razonables para proteger los datos personales contra pérdida, acceso no autorizado, alteración, divulgación o destrucción indebida.",
      "Sin embargo, ningún sistema transmite o almacena información con seguridad absoluta, por lo que no puede garantizarse una seguridad total.",
    ],
  },
  {
    titulo: "Derechos del titular de los datos",
    tipo: "lista",
    texto:
      "El titular de los datos personales puede ejercer en cualquier momento sus derechos de:",
    items: ["Acceso", "Rectificación", "Actualización", "Supresión"],
  },
  {
    titulo: "Autoridad de control",
    tipo: "parrafos",
    parrafos: [
      "La Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley N.º 25.326, tiene la atribución de atender denuncias y reclamos relacionados con el incumplimiento de las normas sobre protección de datos personales.",
    ],
  },
  {
    titulo: "Enlaces a sitios de terceros",
    tipo: "parrafos",
    parrafos: [
      "Este sitio puede contener enlaces a sitios o servicios de terceros, como WhatsApp, Google Maps u otros. Esta Política de Privacidad no se aplica a esos sitios externos, por lo que recomendamos revisar sus propias políticas antes de proporcionar información personal.",
    ],
  },
  {
    titulo: "Cookies y tecnologías similares",
    tipo: "parrafos",
    parrafos: [
      "Este sitio puede utilizar cookies o tecnologías similares necesarias para su funcionamiento técnico, seguridad, medición de tráfico o mejora de la experiencia del usuario.",
      "Cuando corresponda, el uso de estas tecnologías será explicado también en la Política de Cookies del sitio.",
    ],
  },
  {
    titulo: "Cambios a esta política",
    tipo: "parrafos",
    parrafos: [
      "Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a cambios legales, técnicos o de funcionamiento del sitio.",
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
  --privacidad-bg: #f4f8f8;
  --privacidad-surface: rgba(255, 255, 255, 0.88);
  --privacidad-surface-strong: rgba(255, 255, 255, 0.94);
  --privacidad-border: rgba(43, 115, 119, 0.14);
  --privacidad-border-strong: rgba(43, 115, 119, 0.18);
  --privacidad-primary: #2f8f95;
  --privacidad-primary-soft: rgba(47, 143, 149, 0.1);
  --privacidad-title: #24444d;
  --privacidad-text: #53646b;
  --privacidad-text-soft: #708187;
  --privacidad-shadow: 0 16px 42px rgba(23, 57, 64, 0.08);
}

.privacidad {
  min-height: 100vh;
  color: var(--privacidad-text);
  background:
    radial-gradient(circle at top left, rgba(47, 143, 149, 0.08), transparent 24%),
    radial-gradient(circle at bottom right, rgba(47, 143, 149, 0.05), transparent 20%),
    linear-gradient(180deg, #f8fbfb 0%, var(--privacidad-bg) 100%);
}

.contenedor {
  width: min(1100px, calc(100% - 2rem));
  margin-inline: auto;
}

.privacidad__hero {
  padding: 5.5rem 0 2.2rem;
}

.privacidad__hero-content {
  text-align: center;
}

.privacidad__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.48rem 0.92rem;
  border-radius: 999px;
  background: var(--privacidad-primary-soft);
  color: var(--privacidad-primary);
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
  border: 1px solid rgba(47, 143, 149, 0.12);
}

.privacidad__hero h1 {
  margin: 0;
  color: var(--privacidad-title);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.privacidad__lead {
  width: min(760px, 100%);
  margin: 1rem auto 0;
  font-size: 1.08rem;
  line-height: 1.75;
  color: var(--privacidad-text);
}

.privacidad__meta {
  margin-top: 1.35rem;
}

.privacidad__meta-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.62rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid var(--privacidad-border);
  color: var(--privacidad-text-soft);
  font-size: 0.92rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
}

.privacidad__contenido {
  display: grid;
  gap: 1.15rem;
  padding: 1rem 0 4.5rem;
}

.privacidad__card {
  background: var(--privacidad-surface);
  border: 1px solid var(--privacidad-border);
  border-radius: 24px;
  padding: 1.55rem 1.35rem;
  box-shadow: var(--privacidad-shadow);
  backdrop-filter: blur(10px);
}

.privacidad__card--intro {
  background: var(--privacidad-surface-strong);
  border-color: var(--privacidad-border-strong);
}

.privacidad__intro {
  margin: 0;
  font-size: 1rem;
  line-height: 1.85;
  color: var(--privacidad-title);
}

.privacidad__card h2 {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0 0 1rem;
  color: var(--privacidad-title);
  font-size: 1.22rem;
  line-height: 1.35;
}

.privacidad__section-index {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.15rem;
  height: 2.15rem;
  padding: 0 0.5rem;
  border-radius: 999px;
  background: var(--privacidad-primary-soft);
  color: var(--privacidad-primary);
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.04em;
}

.privacidad__card p {
  margin: 0 0 0.95rem;
  line-height: 1.8;
}

.privacidad__card p:last-child {
  margin-bottom: 0;
}

.privacidad__list {
  margin: 0.8rem 0 0;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.68rem;
}

.privacidad__card li {
  line-height: 1.75;
}

.privacidad__datos {
  margin-top: 0.95rem;
  padding: 1rem 1.05rem;
  border-radius: 18px;
  background: rgba(47, 143, 149, 0.06);
  border: 1px solid rgba(47, 143, 149, 0.12);
}

.privacidad__datos p {
  margin: 0 0 0.55rem;
}

.privacidad__datos p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .privacidad__hero {
    padding: 4.5rem 0 1.6rem;
  }

  .privacidad__lead {
    font-size: 0.98rem;
    line-height: 1.7;
  }

  .privacidad__contenido {
    gap: 1rem;
    padding-bottom: 3.5rem;
  }

  .privacidad__card {
    border-radius: 20px;
    padding: 1.2rem 1rem;
  }

  .privacidad__card h2 {
    align-items: flex-start;
    gap: 0.7rem;
    font-size: 1.1rem;
  }

  .privacidad__section-index {
    min-width: 1.95rem;
    height: 1.95rem;
    font-size: 0.78rem;
  }

  .privacidad__card p,
  .privacidad__card li,
  .privacidad__intro {
    font-size: 0.97rem;
  }

  .privacidad__datos {
    padding: 0.95rem;
    border-radius: 16px;
  }
}
</style>