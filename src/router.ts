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
      component: () =>
        isMobile
          ? import("./pages/mobile/Home.vue")
          : import("./pages/pc/Home.vue")
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("./pages/pc/ArticleDetail.vue"),
      props: true
    },
    {
      path: "/account",
      name: "account",
      component: () => import("./pages/pc/account/Index.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("./pages/pc/account/Login.vue")
        },
        {
          path: "regist",
          name: "regist",
          component: () => import("./pages/pc/account/Regist.vue")
        }
      ]
    }
  ]
});
