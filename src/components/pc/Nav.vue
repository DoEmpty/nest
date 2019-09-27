<template>
  <div class="nav">
    <div
      class="nav-header"
      style="min-width:780px"
    >
      <logo />
      <div class="item">
        <i class="el-icon-s-order"></i>
        <span>发现</span>
      </div>
      <div class="item">
        <i class="el-icon-edit"></i>
        <span>写文章</span>
      </div>
      <div class="item">
        <el-input
          placeholder="搜索框"
          suffix-icon="el-icon-search"
          step="1"
          v-model="searchKey"
        />
      </div>
      <span class="blank"></span>
      <el-avatar size="large" shape="circle" :src="avatarSrc" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";

@Component({
  components:{
    Logo
  }
})
export default class Nav extends Vue {
  avatarSrc: String = require("@/assets/logo.png");
  searchKey: String = "";
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.nav {
  box-shadow: 0px 1px 2px #eee;
  background: #fff;
  .nav-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: $titleSize;
    color: $lightColor;
    padding: 0.1rem;
    position: relative;
    z-index: $maskZIndex + 2;
    background: #fff;
    .item {
      margin-left: 0.4rem;
    }
    .icon-menu {
      font-size: $logoSize;
    }
  }
}
@media (max-width: 780px) {
  .item {
    span {
      display: none;
    }
  }
}
</style>
