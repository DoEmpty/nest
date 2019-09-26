<template>
  <div>
    <Nav />
    <router-view />
    <div class="mask" v-show="showMask"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import { SET_MASK_VISIBLE } from "@/stores/actionType";

@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
  get showMask() {
    return this.$store.getters.showMask;
  }
}
</script>

<style lang="scss">
@import "@/style/variable.scss";

.mask {
  width: 100%;
  height: 100%;
  background: #00000088;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $maskZIndex;
}
</style>
