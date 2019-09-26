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
    <transition name="menu-anim">
      <ul
        ref="nav-menu"
        class="nav-menu"
        v-if="isMobileClient"
        v-show="isMenuShow"
      >
        <li>发现</li>
        <li>写文章</li>
        <li>搜索</li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { isMobile } from "@/utils/util";
import { SET_MASK_VISIBLE } from "@/stores/actionType";

const inAnimClass: String = "fadeInDown";
const outAnimClass: String = "fadeOutUp";

@Component
export default class Nav extends Vue {
  avatarSrc: String = require("@/assets/logo.png");
  searchKey: String = "";
  isMenuShow: boolean = false;

  get isMobileClient() {
    return isMobile();
  }

  toggleMenu() {
    // const menuDom: any = this.$refs["nav-menu"];
    // menuDom.style.zIndex = 1000;
    // this.isMenuShow = !this.isMenuShow;
    // if (this.isMenuShow) {
    //   menuDom.classList.remove(inAnimClass);
    //   menuDom.classList.add(outAnimClass);
    // } else {
    //   menuDom.classList.remove(outAnimClass);
    //   menuDom.classList.add(inAnimClass);
    // }
    this.isMenuShow = !this.isMenuShow;
    setTimeout(() => {
      this.$store.commit(SET_MASK_VISIBLE, this.isMenuShow);
    }, 300);
  }
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
    .logo {
      display: flex;
      align-items: center;
      color: $primaryColor;
      i {
        font-size: $logoSize;
      }
    }
    .icon-menu {
      font-size: $logoSize;
    }
  }
  .nav-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: $titleSize;
    position: absolute;
    width: 100%;
    background: #fff;
    z-index: $maskZIndex + 1;
    li {
      padding: 0.1rem 0;
      border-bottom: 1px solid #eee;
    }
  }
  .menu-anim-enter,
  .menu-anim-leave-to {
    top: -100%;
  }
  .menu-anim-enter-to,
  .menu-anim-leave {
    top: 0.5rem;
  }
  .menu-anim-enter-active,
  .menu-anim-leave-active {
    transition: top 300ms ease-in-out;
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
