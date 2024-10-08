import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(Icon);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
