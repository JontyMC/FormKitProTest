import "./assets/main.css";

import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { createProPlugin, inputs } from "@formkit/pro";
import App from "./App.vue";
import { rootClasses } from "./formkit.theme";

const app = createApp(App);
const pro = createProPlugin("*****", inputs);
app.use(
  plugin,
  defaultConfig({
    plugins: [pro],
    config: { rootClasses },
  })
);
app.mount("#app");
