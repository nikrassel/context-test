import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

const app = createApp(App).use(store).mount("#app");
