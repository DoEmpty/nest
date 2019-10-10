<template>
  <div class="account-container">
    <el-tabs :value="tabName" @tab-click="handleTabClick" stretch>
      <el-tab-pane label="登录" name="login" />
      <el-tab-pane label="注册" name="regist" />
    </el-tabs>
    <router-view v-loading="loading"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Account extends Vue {
  loading: Boolean = true;

  get tabName(){
    return this.$route.name;
  }

  handleTabClick(tab){
    this.$router.replace({ name: tab.name });
  }
  
  mounted() {
    this.loading = false;
  }
}
</script>

<style lang="scss">
@import "@/style/variable.scss";
.container{
  background: #f1f1f1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0!important;
  .account-container{
    background: #fff;
    width: 4rem;
    padding: 0.5rem;
    border-radius: 0.04rem;
    box-shadow: 0 0 0.08rem rgb(0,0,0,.1);
    .el-tabs__item{
      font-size: $menuSize;
      font-weight: bold;
    }
  }
  @media (max-width: 780px) {
    .account-container{
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
}
</style>