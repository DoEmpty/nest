import Vue from "vue";
import "./style/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
// import ElementUI from 'element-ui';
import { Image, Button, Input, Avatar, Divider } from "element-ui";
import "animate.css";

//完整引入element组件
// Vue.use(ElementUI);
Vue.prototype.$ELEMENT = { zIndex: 9999 };
Vue.use(Image);
Vue.use(Button);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Divider);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
