<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
import Sponsors from "./components/Sponsors.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- Static gradient background changes with dark/light mode -->
  <div
    class="fixed inset-0 pointer-events-none z-0"
    :class="mode === 'dark'
      ? 'bg-gradient-to-br from-black via-gray-900 to-blue-900'
      : 'bg-gradient-to-br from-white via-gray-100 to-blue-200'"
    aria-hidden="true"
  />

  <!-- Main content scrolls above the gradient -->
  <div class="relative z-10">
    <Navbar />
    <Hero />
    <Sponsors />
    <Benefits />
    <Features />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>
