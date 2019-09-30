<template>
  <div class="nav">
    <div
      class="nav-header"
      style="min-width:780px"
    >
      <logo />
      <div class="item" :class="'home'===routeName?'active':''">
        <i class="el-icon-discover"></i>
        <span>首页</span>
      </div>
      <div class="item" :class="'writer'===routeName?'active':''">
        <i class="el-icon-edit"></i>
        <span>写文章</span>
      </div>
      <div class="item">
        <el-input
          placeholder="请输入要搜索的内容"
          suffix-icon="el-icon-search"
          step="1"
          v-model="searchKey"
          size="small"
        />
      </div>
      <span class="blank"></span>
      <nav-avatar />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";
import NavAvatar from "../pc/NavAvatar.vue";

@Component({
  components:{
    Logo,
    NavAvatar
  }
})
export default class Nav extends Vue {
  searchKey: String = "";

  get routeName() {
    return this.$route.name;
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
    font-size: $menuSize;
    color: $lightColor;
    padding: 0.1rem 0;
    position: relative;
    z-index: $maskZIndex + 2;
    background: #fff;
    .item {
      margin-left: 0.4rem;
      cursor: pointer;
      span {
        margin-left: 0.05rem;
      }
    }
    .active {
      color: $primaryColor;
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
