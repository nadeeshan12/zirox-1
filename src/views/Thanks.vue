<template>
  <section class="container py-24 text-center">
    <h1 class="text-4xl font-bold mb-4">Obrigado pelo seu contato!</h1>
    <p class="text-lg mb-8">
      Recebemos sua mensagem e entraremos em contato em breve.
    </p>
    <button @click="goHome" class="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition">
      Voltar para a página inicial
    </button>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
