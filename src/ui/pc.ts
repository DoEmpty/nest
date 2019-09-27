import Vue from "vue";
import { Image, Button, Input, Avatar, Divider, Message } from "element-ui";

Vue.prototype.$ELEMENT = { zIndex: 9999 };
Vue.use(Image);
Vue.use(Button);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Divider);

console.log("use pc ui");
