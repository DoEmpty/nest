import Vue from "vue";
import "./style/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementUI from 'element-ui';
import { Image, Button, Input, Avatar } from "element-ui";
import "animate.css";

//完整引入element组件
// Vue.use(ElementUI);
Vue.use(Image);
Vue.use(Button);
Vue.use(Input);
Vue.use(Avatar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
