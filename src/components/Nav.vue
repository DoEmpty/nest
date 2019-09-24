<template>
  <div class="nav">
    <div
      class="nav-header"
      :style="{ 'min-width': isMobileClient ? '' : '780px' }"
    >
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
          class="icon-menu"
          @click="toggleMenu"
        />
      </template>
    </div>
    <!-- <transition> -->
      <ul ref="nav-menu" class="nav-menu animated" v-if="isMobileClient">
        <li>发现</li>
        <li>写文章</li>
        <li>搜索</li>
      </ul>
    <!-- </transition> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { isMobile } from "@/utils/util";

const inAnimClass: String = "bounceInDown";
const outAnimClass: String = "bounceOutUp";

@Component
export default class Nav extends Vue {
  avatarSrc: String = require("@/assets/logo.png");
  searchKey: String = "";
  isMenuShow: boolean = false;
  hasMenuIconClick: boolean = false;

  get isMobileClient() {
    return isMobile();
  }

  toggleMenu() {
    const menuDom: any = this.$refs["nav-menu"];
    this.isMenuShow = !this.isMenuShow;
    if (this.isMenuShow) {
      menuDom.classList.remove(inAnimClass);
      menuDom.classList.add(outAnimClass);
    } else {
      menuDom.classList.remove(outAnimClass);
      menuDom.classList.add(inAnimClass);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.nav {
  .nav-header {
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
    .icon-menu {
      font-size: 0.4rem;
    }
    .blank {
      flex-grow: 1;
    }
  }
  .nav-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 0.2rem;
    li {
      padding: 0.2rem 0;
      border-bottom: 1px solid #EEE;
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
