import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
// import store from "./publicStore";
import IRPlayerState from "@milito-entities/IRPlayerState";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount("#app");

console.log("OLOLO1");

// @ts-ignore
console.log(app)

// Removed window.store = store, as Pinia will now be used
