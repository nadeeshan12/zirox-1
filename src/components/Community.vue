<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

// import DiscordIcon from "@/icons/DiscordIcon.vue";
</script>

<template>
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <img
                class="w-full md:w-[400px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation "
                :src="'jovem.png'
                  " alt="dashboard using shadcn-vue" />
              Faça parte também do time dos
              <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Formandos
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Melhore sua carreira, abra a porta novas possibilidades, com o Seu Diploma você vai alcançar as melhores
            oportunidades.🚀
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a href="https://discord.com/" target="_blank">
                Conquistar meu diploma!
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
