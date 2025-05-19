<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle} from "lucide-vue-next";
import { MaskInput } from 'vue-3-mask'
import { useRouter } from 'vue-router';
const router = useRouter();

interface ContactFormProps {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
}

const contactForm = reactive<ContactFormProps>({
  name: "",
  phone: "",
  email: "",
  city: "",
  state: "",
});

const invalidInputForm = ref<boolean>(false);
const isSubmitting = ref<boolean>(false);
const success = ref<boolean>(false);

const handleSubmit = async () => {
  const { name, phone, email, city, state } = contactForm;

  if (!name || !phone || !email || !city || !state) {
    invalidInputForm.value = true;
    return;
  }

  invalidInputForm.value = false;
  isSubmitting.value = true;

  // Limpa telefone para enviar somente números e acrescenta +55
  const cleanedPhone = "+55" + phone.replace(/\D/g, "");

  try {
    await fetch("https://auto.profissionalizaead.com.br/webhook-test/21298a86-5e9d-4d01-b805-0a1e0f2dc96e", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone: cleanedPhone,
        email,
        city,
        state,
      }),
    });

    if (typeof fbq === 'function') {
      fbq("track", "Lead", {
        content_name: "Formulário de Contato",
        first_name: name.split(" ")[0] || name,
        last_name: name.split(" ").slice(1).join(" ") || "",
        email: email,
        phone: cleanedPhone,
        city: city,
        state: state,
      });
    }

    // Depois do sucesso do envio:
success.value = true;
router.push('/thanks');
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    success.value = false;
  } finally {
    isSubmitting.value = false;
  }

};  
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2>
        <h2 class="text-3xl md:text-4xl font-bold">Cadastre-se Agora</h2>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Inicie hoje mesmo o seu processo de conclusão dos seus estudos, não perca essa oportunidade.<br>
          Preencha os dados abaixo o cadastro é simples e rápido.
        </p>

        
      </div>

      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <div class="flex flex-col gap-1.5">
              <Label for="name">Nome Completo</Label>
              <Input id="name" type="text" placeholder="Seu nome completo" v-model="contactForm.name" />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="phone">Telefone</Label>
              <MaskInput
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="phone"
                type="text"
                mask="(##) #####-####"
                placeholder="(99) 99999-9999"
                v-model="contactForm.phone"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input id="email" type="email" placeholder="seuemail@exemplo.com" v-model="contactForm.email" />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="city">Cidade</Label>
              <Input id="city" type="text" placeholder="São Paulo" v-model="contactForm.city" />
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="state">Estado</Label>
              <Input id="state" type="text" placeholder="SP" v-model="contactForm.state" />
            </div>

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>
                Todos os campos são obrigatórios. Verifique e tente novamente.
              </AlertDescription>
            </Alert>

            <Alert v-if="success" variant="default">
              <AlertTitle>Sucesso</AlertTitle>
              <AlertDescription>
                Formulário enviado com sucesso!
              </AlertDescription>
            </Alert>

            <Button class="mt-4" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar mensagem' }}
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
