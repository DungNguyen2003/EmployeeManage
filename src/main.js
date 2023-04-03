import { createApp } from "vue";
import App from "./App.vue";
import MInput from "./components/base/MInput.vue";

const app = createApp(App);
app.component("MInput", MInput);
app.mount("#app");
