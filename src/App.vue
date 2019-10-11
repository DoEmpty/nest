<template>
  <div class="container">
    <Nav v-if="!hideNav" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/stores";

const isMobile = store.getters.isMobile;
@Component({
  components: {
    Nav: isMobile ? require("@/components/mobile/Nav.vue").default : require("@/components/pc/Nav.vue").default
  }
})
export default class App extends Vue {
  mounted() {
    // @ts-ignore
    window.vm = this;
  }
  
  get hideNav(){
    const navHideRoutes = ["login", "regist"]
    return navHideRoutes.indexOf(this.$route.name) > -1;
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
}
</style>
