<template>
  <div>
    <el-input placeholder="输入昵称" v-model="nickName">
      <template v-slot:prepend>
        <i class="el-icon-user" />
      </template>
    </el-input>
    <el-input placeholder="输入密码" type="password" v-model="password">
      <template v-slot:prepend>
        <i class="el-icon-key" />
      </template>
    </el-input>
    <el-button size="medium" type="primary" round>登录</el-button>
    <el-divider>社交帐号登录</el-divider>
    <div class="ic-social">
      <img v-for="(item, index) in socialIcons" :key="index" :src="item.icon" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Login extends Vue{
  socialIcons: Array<any> = [
    {
      name: "weibo",
      icon: require("@/assets/weibo.svg")
    },
    {
      name: "wechat",
      icon: require("@/assets/wechat.svg")
    },
  ];

  nickName: String = "";
  password: String = "";
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.el-input{
  font-size: $titleSize;
  margin-top: 0.2rem;
}
.el-button{
  font-size: $titleSize;
  width: 100%;
  margin-top: 0.2rem;
}
.el-divider__text{
  font-size: $metaSize;
  color: $lightColor;
}
.ic-social{
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  img{
    width: 0.5rem;
  }
}
</style>