<template>
  <div class="nav" :style="{'min-width':isMobileClient?'':'780px'}">
    <div class="logo">
      <i class="el-icon-s-promotion" />
      <span>Empty的小窝</span>
    </div>
    <template v-if="!isMobileClient">
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
    </template>
    <template v-else>
      <span class="blank"></span>
      <i
        :class="isMenuShow ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        class="menu"
        @click="toggleMenu"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { isMobile } from "@/utils/util";

@Component
export default class Nav extends Vue {
  avatarSrc: String = require("@/assets/logo.png");
  searchKey: String = "";
  isMenuShow: boolean = false;

  get isMobileClient() {
    return isMobile();
  }

  toggleMenu() {
    this.isMenuShow = !this.isMenuShow;
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.2rem;
  color: $lightColor;
  .item {
    margin-left: 0.4rem;
  }
  .logo {
    display: flex;
    align-items: center;
    color: $primaryColor;
    i {
      font-size: 0.4rem;
    }
  }
  .menu {
    font-size: 0.4rem;
  }
  .blank {
    flex-grow: 1;
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
