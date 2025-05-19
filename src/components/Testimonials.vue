<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    "image": "https://github.com/shadcn.png",
    "name": "Mariana",
    "userName": "34 anos, auxiliar de cozinha",
    "comment": "Eu achei que estudar de novo seria impossível com dois filhos pequenos e um emprego puxado. Mas com o EJA EAD consegui estudar depois que eles dormiam. Hoje tenho meu diploma nas mãos!",
    "rating": 4.9
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "José Carlos",
    "userName": "42 anos, porteiro",
    "comment": "Fiquei anos com vergonha por não ter terminado os estudos. Quando vi que podia fazer tudo online e no meu ritmo, decidi tentar. Foi a melhor escolha que fiz.",
    "rating": 5.0
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Elena",
    "userName": "34 anos, dona de casa",
    "comment": "Nunca pensei que aprender pela internet seria tão fácil. A plataforma é tranquila de mexer, e sempre que eu precisava, tinha alguém pra me ajudar.",
    "rating": 4.8
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "André",
    "userName": "29 anos, entregador",
    "comment": "Parecia tarde demais, mas o EJA EAD me mostrou que nunca é tarde pra aprender. Com o diploma, consegui um emprego melhor e hoje me sinto mais seguro.",
    "rating": 5.0
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Kátia",
    "userName": "39 anos, manicure",
    "comment": "Eu trabalho durante o dia e estudo à noite, tudo do celular. O melhor é que posso assistir às aulas quando dá tempo, sem pressão.",
    "rating": 4.7
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Luciano",
    "userName": "44 anos, operador de máquina",
    "comment": "Voltar a estudar foi um desafio, mas o jeito que o EJA EAD ensina faz tudo parecer mais leve. Os professores são muito atenciosos e me ajudaram sempre.",
    "rating": 4.9
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Tereza",
    "userName": "51 anos, aposentada",
    "comment": "Meu sonho sempre foi ter meu diploma. Quando recebi ele pelo correio, chorei. Nunca imaginei que conseguiria, ainda mais estudando de casa.",
    "rating": 5.0
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Paulo",
    "userName": "46 anos, segurança",
    "comment": "Achei que ia ser complicado mexer na plataforma, mas é tudo muito simples. E o suporte responde rápido, então nunca fiquei na dúvida sozinho.",
    "rating": 4.8
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Renan",
    "userName": "23 anos, atendente",
    "comment": "Fui o primeiro da minha família a terminar o ensino médio. Agora quero até começar uma faculdade. Gratidão eterna por essa oportunidade!",
    "rating": 5.0
  },
  {
    "image": "https://github.com/shadcn.png",
    "name": "Sandra",
    "userName": "37 anos, diarista",
    "comment": "Estudei escondido no início, com medo de julgamentos. Mas depois vi que ali só tinha gente como eu, querendo melhorar. Foi a melhor decisão da minha vida.",
    "rating": 4.9
  }
];
</script>

<template>
  <section
    id="testimonials"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Depoimentos
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
        Veja alguns dos depoimentos de quem conquistou seu Diploma
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
                <Star class="size-4 fill-primary text-primary" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src="https://www.radix-vue.com/logo.svg"
                    alt="@radix-vue"
                  />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
