<script setup lang="ts">
import { ref } from "vue";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, Code, Mail } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";

interface RouteProps {
  href: string;
  label: string;
}
const routeList: RouteProps[] = [
  { href: "#about-us", label: "About Us" },
  { href: "#projects",  label: "Projects" },
  { href: "#services",  label: "Services" },
  { href: "#careers",   label: "Careers" },
];

const isOpen = ref(false);
</script>

<template>
  <header
    :class="{
      'shadow-light': mode.value === 'light',
      'shadow-dark':  mode.value === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-4 bg-card shadow-md': true
    }"
  >
    <!-- Logo / Brand -->
    <a href="/" class="font-bold text-lg flex items-center">
      <Code
        class="bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 p-2 rounded-lg w-9 h-9 mr-2 text-white"
      />
      GOTech
    </a>

    <!-- Mobile Menu -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu class="w-6 h-6 cursor-pointer text-foreground" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card p-4"
        >
          <div>
            <SheetHeader class="mb-4">
              <SheetTitle class="flex items-center">
                <Code
                  class="bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 p-2 rounded-lg w-9 h-9 mr-2 text-white"
                />
                GOTech
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="({ href, label }) in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
                @click="isOpen = false"
              >
                <a :href="href">{{ label }}</a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col justify-start items-start">
            <Separator class="mb-2" />
            <ToggleTheme />
            <Button as-child size="sm" variant="ghost" class="mt-2">
              <a href="#contact" class="flex items-center">
                <Mail class="w-5 h-5 mr-2" />
                Contact
              </a>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop Menu -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem
          v-for="({ href, label }) in routeList"
          :key="label"
        >
          <NavigationMenuLink asChild>
            <Button as-child variant="ghost" class="justify-start text-base">
              <a :href="href">{{ label }}</a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Actions -->
    <div class="hidden lg:flex items-center space-x-4">
      <ToggleTheme />
      <Button as-child size="sm" variant="solid">
        <a href="#contact">Get in Touch</a>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}
.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
