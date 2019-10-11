<template>
  <div class="regist-container">
    <el-input placeholder="输入昵称" v-model="nickName">
      <template v-slot:prepend>
        <i class="el-icon-user" />
      </template>
    </el-input>
    <el-input placeholder="输入手机号码" type="text" v-model="mobile">
      <template v-slot:prepend>
        <i class="el-icon-mobile-phone" />
      </template>
      <template v-slot:append>
        <el-button :disabled="smsBtnDisable">获取验证码</el-button>
      </template>
    </el-input>
    <el-input placeholder="输入验证码" type="number" v-model="smsCode">
      <template v-slot:prepend>
        <i class="el-icon-message" />
      </template>
    </el-input>
    <el-input placeholder="输入密码" type="password" v-model="password">
      <template v-slot:prepend>
        <i class="el-icon-key" />
      </template>
    </el-input>
    <el-button size="medium" type="primary" round class="reg-btn">注册</el-button>
    <el-divider>社交帐号注册</el-divider>
    <div class="ic-social">
      <img v-for="(item, index) in socialIcons" :key="index" :src="item.icon" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Regist extends Vue{
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
  mobile: String = "";
  smsCode: String = "";
  smsBtnDisable: Boolean = false;
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.regist-container{
  .el-input{
    font-size: $titleSize;
    margin-top: 0.2rem;
  }
  .reg-btn{
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
  .el-input-group__append{
    .el-button{
      font-size: 0.13rem;
      padding: 0 0.05rem;
    }
  }
}
</style>