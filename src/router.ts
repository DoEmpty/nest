import Vue from "vue";
import Router from "vue-router";
import store from "@/stores";

Vue.use(Router);
const isMobile = store.getters.isMobile;
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => isMobile ? import("./views/mobile/Home.vue") : import("./views/pc/Home.vue")
    },
    {
      path: "/account",
      name: "account",
      component: () => import("./views/pc/account/Index.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("./views/pc/account/Login.vue")
        },
        {
          path: "regist",
          name: "regist",
          component: () => import("./views/pc/account/Regist.vue")
        }
      ]
    }
  ]
});
