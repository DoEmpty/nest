<template>
  <el-dropdown>
    <el-avatar size="large" shape="circle" :src="avatarSrc" />
    <el-dropdown-menu>
      <el-dropdown-item icon="el-icon-user-solid">我的主页</el-dropdown-item>
      <el-dropdown-item icon="el-icon-star-on">喜欢的文章</el-dropdown-item>
      <el-dropdown-item icon="el-icon-s-tools">设置</el-dropdown-item>
      <el-dropdown-item icon="el-icon-remove">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Vue, Component} from "vue-property-decorator";
@Component
export default class NavAvatar extends Vue{
  avatarSrc: String = require("@/assets/logo.png");
  
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.el-dropdown-menu{
  .el-dropdown-menu__item{
    font-size: $titleSize;
  }
    i{
      color: $primaryColor;
    }
}
</style>

