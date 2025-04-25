<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TabletSmartphone,
  Paintbrush,
  Goal,
  BadgeCheck,
  Newspaper,
  MessageCircle,
} from "lucide-vue-next";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeatureProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Cross-Platform Apps",
    description:
      "Responsive web and mobile applications that run seamlessly on any device.",
  },
  {
    icon: "paintbrush",
    title: "UI/UX Excellence",
    description:
      "Intuitive, user-centric designs that drive engagement and satisfaction.",
  },
  {
    icon: "goal",
    title: "Agile Methodology",
    description:
      "Iterative development for rapid delivery, continuous feedback, and flexibility.",
  },
  {
    icon: "badgeCheck",
    title: "Quality Assurance",
    description:
      "Rigorous testing and code reviews to ensure reliability and performance.",
  },
  {
    icon: "newspaper",
    title: "Data Analytics & BI",
    description:
      "Actionable insights via dashboards, reporting, and business intelligence solutions.",
  },
  {
    icon: "messageCircle",
    title: "24/7 Support",
    description:
      "Dedicated technical assistance to keep your systems running smoothly around the clock.",
  },
];

const iconMap: Record<string, any> = {
  tabletSmartphone: TabletSmartphone,
  paintbrush: Paintbrush,
  goal: Goal,
  badgeCheck: BadgeCheck,
  newspaper: Newspaper,
  messageCircle: MessageCircle,
};
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-blue-600 text-center mb-2 tracking-wider">
      Features
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      What Makes GOTech Different
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      We combine cutting-edge technology, design excellence, and round-the-clock support
      to deliver solutions that truly power your business.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="({ icon, title, description }) in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex flex-col items-center">
            <div
              class="bg-blue-600/20 p-2 rounded-full ring-8 ring-blue-600/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-blue-600"
              />
            </div>
            <CardTitle class="text-center">{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
