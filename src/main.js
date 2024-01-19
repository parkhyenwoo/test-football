import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Update the path to your router file
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(router).mount("#app");
