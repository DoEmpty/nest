import Vue from "vue";
import { 
  Image, 
  Button, 
  Input, 
  Avatar, 
  Divider, 
  Message, 
  Loading, 
  Dropdown, 
  DropdownItem, 
  DropdownMenu,
  Tabs,
  TabPane
} from "element-ui";

Vue.prototype.$ELEMENT = { zIndex: 9999 };
Vue.use(Image);
Vue.use(Button);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Divider);
Vue.use(Loading);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Tabs);
Vue.use(TabPane);

console.log("use pc ui");
