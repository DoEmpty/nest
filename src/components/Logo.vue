<template>
  <div class="logo">
    <i class="el-icon-s-promotion" />
    <span>小窝</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.logo {
  display: flex;
  align-items: center;
  color: $primaryColor;
  i {
    font-size: $logoSize;
  }
}
</style>
