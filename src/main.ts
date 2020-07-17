import Vue from "vue";
import App from "./App.vue";
import ConfirmPlugin from "./confirm-plugin";

Vue.use(ConfirmPlugin);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
