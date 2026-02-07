<script setup lang="ts">
import { useScrollSpy } from "@/composables/useScrollSpy";

import HeroSection from "../components/home/HeroSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import AboutSection from "../components/home/AboutSection.vue";
import CTASection from "../components/home/CTASection.vue";
import TurnosSection from "@/components/home/TurnosSection.vue";
import ContactoSection from "@/components/home/ContactoSection.vue";

useScrollSpy({
  sectionIds: ["inicio", "servicios", "nosotros", "turnos", "contacto", "cta"],
  rootSelector: "#appScroll",
});


</script>
<template>
  <HeroSection />
  <ServicesSection />
  <AboutSection />
  <TurnosSection />
  <ContactoSection />
  <CTASection />
</template>

