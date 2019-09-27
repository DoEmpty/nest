import Vue from "vue";
import "./style/index.scss";
import router from "./router";
import store from "./stores";
import App from "./App.vue";

if(store.getters.isMobile) {
  require("@/ui/mobile");
} else {
  require("@/ui/pc");
}

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
