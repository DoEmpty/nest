<template>
  <el-dropdown @command="handleMenuClick">
    <el-avatar size="large" shape="circle" :src="avatarSrc" />
    <el-dropdown-menu class="avatar-menu">
      <el-dropdown-item icon="el-icon-user-solid">我的主页</el-dropdown-item>
      <el-dropdown-item icon="el-icon-star-on">喜欢的文章</el-dropdown-item>
      <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
      <el-dropdown-item icon="el-icon-remove" command="logout">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import store from "../../stores";

@Component({
  methods: {
    ...mapActions("user", ["logout"])
  }
})
export default class NavAvatar extends Vue {
  get avatarSrc() {
    return this.$store.getters["user/userInfo"]("avatar");
  }

  handleMenuClick(command) {
    if (command === "logout") {
      // @ts-ignore
      this.logout();
    }
  }
}
</script>

<style lang="scss">
@import "@/style/variable.scss";
.avatar-menu {
  * {
    font-size: $titleSize;
  }
  i {
    color: $primaryColor;
    margin-right: 0.2rem;
  }
}
</style>
