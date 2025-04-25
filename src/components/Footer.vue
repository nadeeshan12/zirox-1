<script setup lang="ts">
import { Code, Mail, Linkedin, Github } from "lucide-vue-next";
import Separator from "@/components/ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <!-- Brand -->
        <div class="col-span-full xl:col-span-2">
          <a
            href="/"
            class="flex items-center font-bold"
          >
            <Code
              class="bg-gradient-to-tr from-blue-600 via-blue-500 to-teal-400 p-2 rounded-lg w-9 h-9 mr-2 text-white"
            />
            <h3 class="text-2xl">GOTech</h3>
          </a>
          <p class="mt-4 text-muted-foreground">
            Delivering custom software, cloud services, and IT consulting worldwide.
          </p>
        </div>

        <!-- Company -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Company</h3>
          <a href="#about-us" class="opacity-60 hover:opacity-100">About Us</a>
          <a href="#careers"  class="opacity-60 hover:opacity-100">Careers</a>
          <a href="#contact"  class="opacity-60 hover:opacity-100">Contact</a>
        </div>

        <!-- Services -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Services</h3>
          <a href="#services"  class="opacity-60 hover:opacity-100">Software Dev</a>
          <a href="#services"  class="opacity-60 hover:opacity-100">Cloud & Infra</a>
          <a href="#services"  class="opacity-60 hover:opacity-100">IT Consulting</a>
          <a href="#services"  class="opacity-60 hover:opacity-100">Analytics & BI</a>
        </div>

        <!-- Resources -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Resources</h3>
          <a href="/faq" class="opacity-60 hover:opacity-100">FAQ</a>
          <a href="/blog" class="opacity-60 hover:opacity-100">Blog</a>
          <a href="/support" class="opacity-60 hover:opacity-100">Support</a>
        </div>

        <!-- Social -->
        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Follow Us</h3>
          <div class="flex space-x-4 mt-2">
            <a href="https://github.com/globaloptimatech" target="_blank" class="opacity-60 hover:opacity-100">
              <Github class="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="https://linkedin.com/company/globaloptimatech" target="_blank" class="opacity-60 hover:opacity-100">
              <Linkedin class="w-5 h-5 text-muted-foreground" />
            </a>
            <a href="https://twitter.com/globaloptech" target="_blank" class="opacity-60 hover:opacity-100">
              <Mail class="w-5 h-5 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />

      <div class="text-center text-muted-foreground">
        © 2025 Global Optima Technologies. All rights reserved.
      </div>
    </div>
  </footer>
</template>
