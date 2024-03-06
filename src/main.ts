import { createApp } from "vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from "@arco-design/web-vue";
import router from "./router";
import store from "./store";
import "@/plugins/axios";

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
