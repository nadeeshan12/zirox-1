<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Software Development",
    description:
      "Tailored web, mobile, and desktop applications built to your exact specifications.",
    pro: ProService.NO,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable, secure cloud migrations and DevOps automation to optimize your environment.",
    pro: ProService.NO,
  },
  {
    title: "IT Consulting",
    description:
      "Expert technology strategy and architecture guidance to drive innovation.",
    pro: ProService.NO,
  },
  {
    title: "Data Analytics & BI",
    description:
      "Actionable insights through dashboards, reporting, and business intelligence.",
    pro: ProService.YES,
  },
];
</script>

<template>
  <section
    id="services"
    class="container py-24 sm:py-32"
  >
    <!-- Heading -->
    <h2 class="text-lg text-blue-600 text-center mb-2 tracking-wider">
      Services
    </h2>
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Grow Your Business with GOTech
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      From development and cloud to consulting and analytics, we power your success.
    </h3>

    <!-- Cards Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[60%] mx-auto">
      <div
        v-for="({ title, description, pro }) in serviceList"
        :key="title"
      >
        <Card class="bg-muted/50 dark:bg-card h-full relative hover:bg-background transition-all">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3 bg-blue-600 text-white"
          >
            PRO
          </Badge>
        </Card>
      </div>
    </div>
  </section>
</template>
