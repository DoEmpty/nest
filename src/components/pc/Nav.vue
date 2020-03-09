<template>
  <div class="nav">
    <logo class="nav-logo" />
    <div class="nav-items">
      <div
        class="item"
        :class="'home' === routeName ? 'active' : ''"
        @click="handleToHome"
      >
        <i class="el-icon-discover"></i>
        <span>首页</span>
      </div>
      <div class="item" :class="'writer' === routeName ? 'active' : ''">
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
    </div>
    <nav-avatar class="nav-group" v-if="isLogin" v-bind="$attrs" />
    <el-button-group class="nav-group" v-else>
      <el-button type="primary" @click="handleLogin">登录</el-button>
      <el-button type="success" @click="handleRegist">注册</el-button>
    </el-button-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Logo from "../Logo.vue";
import NavAvatar from "../pc/NavAvatar.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Logo,
    NavAvatar
  },
  computed: {
    ...mapGetters({ isLogin: "user/isLogin" })
  }
})
export default class Nav extends Vue {
  searchKey: String = "";

  get routeName() {
    return this.$route.name;
  }

  handleLogin() {
    this.$router.push({
      name: "login"
    });
  }

  handleRegist() {
    this.$router.push({
      name: "regist"
    });
  }

  handleToHome() {
    if (this.routeName === "home") {
      window.location.reload();
    } else {
      this.$router.push({
        name: "home"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.nav {
  box-shadow: 0px 1px 2px #eee;
  background: #fff;
  top: 0;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  height: 0.6rem;
  font-size: $menuSize;
  color: $lightColor;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  z-index: $maskZIndex + 2;
  position: fixed;
  .nav-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    .item {
      margin-right: 0.4rem;
      cursor: pointer;
      span {
        margin-left: 0.05rem;
      }
    }
    .active {
      color: $primaryColor;
    }
  }
  .nav-logo {
    position: absolute;
  }
  .nav-group {
    position: absolute;
    top: 0.05rem;
    right: 0.5rem;
  }
  > * {
    transition: top 0.5s;
  }
}
@media (min-width: 1080px) {
  .nav-items {
    width: 960px;
  }
}
@media (max-width: 1080px) {
  .nav-items {
    width: 760px;
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
