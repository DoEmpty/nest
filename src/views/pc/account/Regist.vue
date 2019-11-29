<template>
  <el-form
    :model="registForm"
    :rules="registFormRules"
    ref="regist-form"
    class="regist-container"
    label-width="0"
    :inline-message="false"
  >
    <el-form-item prop="nickName">
      <el-input placeholder="输入昵称" v-model.trim="registForm.nickName">
        <template v-slot:prepend>
          <i class="el-icon-user" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="mobile">
      <el-input placeholder="输入手机号码" type="text" v-model.number="registForm.mobile">
        <template v-slot:prepend>
          <i class="el-icon-mobile-phone" />
        </template>
        <template v-slot:append>
          <el-button :disabled="smsBtnDisable">获取验证码</el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="smsCode">
      <el-input placeholder="输入验证码" type="text" v-model.number="registForm.smsCode">
        <template v-slot:prepend>
          <i class="el-icon-message" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input placeholder="输入密码" type="password" v-model="registForm.password">
        <template v-slot:prepend>
          <i class="el-icon-key" />
        </template>
      </el-input>
    </el-form-item>
    <el-button size="medium" type="success" round class="reg-btn" @click="handleRegist">注册</el-button>
    <el-divider>社交帐号注册</el-divider>
    <div class="ic-social">
      <img v-for="(item, index) in socialIcons" :key="index" :src="item.icon" alt />
    </div>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Regist extends Vue {
  socialIcons: Array<any> = [
    {
      name: "weibo",
      icon: require("@/assets/weibo.svg")
    },
    {
      name: "wechat",
      icon: require("@/assets/wechat.svg")
    }
  ];

  smsBtnDisable: Boolean = false;
  registForm: any = {
    nickName: "",
    mobile: "",
    smsCode: "",
    password: ""
  };

  registFormRules: any = {
    nickName: [
      { required: true, message: "请输入昵称", trigger: "blur" },
      { min: 3, max: 10, message: "昵称为3到5位字符", trigger: "blur" }
    ],
    mobile: [
      {
        //使用正则表达式做匹配是，key应为pattern而不是type
        pattern: new RegExp("^1[3,4,5,7,8,9]{1}[0-9]{9}"),
        message: "请输入正确的手机号码",
        trigger: "blur"
      },
      { required: true, message: "请输入手机号码", trigger: "blur" }
    ],
    smsCode: [
      {
        pattern: /^[0-9]{6}$/g,
        message: "请输入正确的验证码",
        trigger: "blur"
      },
      { required: true, message: "请输入验证码", trigger: "blur" }
    ],
    password: [
      {
        pattern: /^[a-zA-Z0-9]*$/,
        message: "请输入正确的密码",
        trigger: "blur"
      },
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 6, max: 10, message: "请输入6到10位的密码", trigger: "blur" }
    ]
  };

  async handleRegist() {
    let form: any = this.$refs["regist-form"];
    form.validate().then(res => {
      if (!res) {
        return;
      }
      //去注册
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.regist-container {
  .el-input {
    font-size: $titleSize;
  }
  .reg-btn {
    font-size: $titleSize;
    width: 100%;
    margin-top: 0.2rem;
  }
  .el-divider__text {
    font-size: $metaSize;
    color: $lightColor;
  }
  .ic-social {
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    img {
      width: 0.5rem;
    }
  }
  .el-input-group__append {
    .el-button {
      font-size: 0.13rem;
      padding: 0 0.05rem;
    }
  }
}
</style>
<style lang="scss">
.el-form-item__error {
  margin-left: 0.56rem;
}
</style>
