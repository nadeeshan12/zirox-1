<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

// import {
//   Crown,
//   Vegan,
//   Ghost,
//   Puzzle,
//   Squirrel,
//   Cookie,
//   Drama,
// } from "lucide-vue-next";

interface sponsorsProps {
  image: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    image: "../../../public/homem.webp",
    name: "Homem",
  },
  {
    image: "/images/sponsors/acmelogo.png",
    name: "Acmelogo",
  },
  {
    image: "../../../public/homem.webp",
    name: "Acmesponsor",
  },
  {
    image: "/images/sponsors/acmeipsum.png",
    name: "Acmeipsum",
  },
  {
    image: "/images/sponsors/acme.png",
    name: "Acme",
  },
  {
    image: "/images/sponsors/accmee.png",
    name: "Accmee",
  },
  {
    image: "/images/sponsors/acmetech.png",
    name: "Acmetech",
  },
];


</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6">Our Platinum Sponsors</h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[3rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ image, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl md:text-2xl font-medium">
            <img
              :src="image"
              :alt="name"
              class="w-8 h-8 mr-2 object-contain"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>

