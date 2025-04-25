<script setup lang="ts">

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
      <div class="text-center space-y-8">
        <!-- Company Badge -->
        <Badge variant="outline" class="text-sm py-2 text-blue-600 border-blue-600">
          Outsource IT Company
        </Badge>

        <!-- Main Headline -->
        <div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
          <h1>
            Accelerate Your Business with
            <span
              class="text-transparent bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text"
            >
              Innovative IT Solutions
            </span>
          </h1>
        </div>

        <!-- Supporting Copy -->
        <p class="max-w-screen-sm mx-auto text-xl text-gray-600">
          Global Optima Technologies (GOTech) delivers custom software development,
          cloud services, and IT consulting to drive your business growth.
        </p>

        <!-- Call-to-Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button class="w-5/6 sm:w-auto font-bold px-6 py-3 group/arrow bg-blue-600 hover:bg-blue-400">
            Get a Quote
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 sm:w-auto font-bold px-6 py-3"
          >
            <a
              href="#services"
              target="_blank"
            >
              Our Services
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
