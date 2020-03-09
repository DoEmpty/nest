<template>
  <router-view />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/stores";

@Component
export default class App extends Vue {
  mounted() {
    // @ts-ignore
    window.vm = this;
    this.$store.dispatch("user/checkLogin");
    this.$store.dispatch("user/getUserInfo");
  }

  get hideNav() {
    const navHideRoutes = ["login", "regist"];
    return navHideRoutes.indexOf(this.$route.name) > -1;
  }
}
</script>
