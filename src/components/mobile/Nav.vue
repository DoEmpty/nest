<template>
  <div class="nav">
    <logo />
    <span class="blank"></span>
    <i
      :class="isMenuShow ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      class="icon-menu"
      @click="toggleMenu"
    />
    <van-popup v-model="isMenuShow" position="top">
      <ul class="nav-menu">
        <li>发现</li>
        <li>写文章</li>
        <li>搜索</li>
      </ul>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";

@Component({
  components: {
    Logo
  }
})
export default class Nav extends Vue {
  isMenuShow: boolean = false;

  toggleMenu() {
    this.isMenuShow = !this.isMenuShow;
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.nav {
  box-shadow: 0px 1px 2px #eee;
  background: #fff;
  font-size: $menuSize;
  color: $lightColor;
  display: flex;
  padding: 0.1rem 0;
  .icon-menu {
    font-size: $logoSize;
  }
  .nav-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    background: #fff;
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
