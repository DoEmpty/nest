<template>
  <div class="container">
    <Nav />
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
}
</script>

<style lang="scss">
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
