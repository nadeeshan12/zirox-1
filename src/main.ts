import { createApp } from "vue";
import App from "./App.vue";
import { MaskInput } from 'vue-3-mask';
import "./assets/index.css";
import router from './router/router'

const app = createApp(App);

app.component('MaskInput', MaskInput);
app.use(router)
app.mount('#app');