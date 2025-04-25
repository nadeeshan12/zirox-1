<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const contactForm = reactive<ContactFormProps>({
  firstName: "",
  lastName: "",
  email: "",
  subject: "Software Development",
  message: "",
});

const invalidInputForm = ref(false);

const handleSubmit = () => {
  const { firstName, lastName, email, subject, message } = contactForm;
  // simple validation
  if (!firstName || !lastName || !email || !message) {
    invalidInputForm.value = true;
    return;
  }
  invalidInputForm.value = false;

  const mailToLink = `mailto:contact@globaloptimatech.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Hello, I am ${firstName} ${lastName} (${email}).\n\n${message}`
  )}`;

  window.location.href = mailToLink;
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Info -->
      <div>
        <div class="mb-4">
          <h2 class="text-lg text-blue-600 mb-2 tracking-wider">Contact</h2>
          <h2 class="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Have questions or ready to start your project? Reach out to our team
          and we'll get back to you promptly.
        </p>

        <div class="flex flex-col gap-6 text-lg">
          <div>
            <div class="flex gap-2 mb-1 items-center">
              <Building2 class="w-5 h-5 text-blue-600" />
              <span class="font-bold">Headquarters</span>
            </div>
            <p>Dostyk 5/2, Astana, Kazakhstan</p>
          </div>

          <div>
            <div class="flex gap-2 mb-1 items-center">
              <Phone class="w-5 h-5 text-blue-600" />
              <span class="font-bold">Phone</span>
            </div>
            <p>+7 (707) 434-5251</p>
          </div>

          <div>
            <div class="flex gap-2 mb-1 items-center">
              <Mail class="w-5 h-5 text-blue-600" />
              <span class="font-bold">Email</span>
            </div>
            <p>contact@globaloptimatech.com</p>
          </div>

          <div>
            <div class="flex gap-2 mb-1 items-center">
              <Clock class="w-5 h-5 text-blue-600" />
              <span class="font-bold">Office Hours</span>
            </div>
            <p>Mon – Fri: 9:00 AM – 6:00 PM (UTC+6)</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <Card class="bg-muted/50 dark:bg-card">
        <CardHeader class="text-2xl text-blue">Send Us a Message</CardHeader>

        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1 flex flex-col gap-1.5">
                <Label for="first-name">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Your first name"
                  v-model="contactForm.firstName"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                v-model="contactForm.email"
              />
            </div>

            <!-- <div class="flex flex-col gap-1.5">
              <Label for="subject">Subject</Label>
              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Software Development">
                      Software Development
                    </SelectItem>
                    <SelectItem value="Cloud Services">Cloud Services</SelectItem>
                    <SelectItem value="IT Consulting">IT Consulting</SelectItem>
                    <SelectItem value="Data Analytics">Data Analytics</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> -->

            <div class="flex flex-col gap-1.5">
              <Label for="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows="5"
                v-model="contactForm.message"
              />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Please fill in all required fields before sending.
              </AlertDescription>
            </Alert>

            <Button type="submit" class="mt-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-400">
              Send Message
            </Button>
          </form>
        </CardContent>

        <CardFooter />
      </Card>
    </div>
  </section>
</template>
