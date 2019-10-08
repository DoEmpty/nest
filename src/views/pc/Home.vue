<template>
  <div class="home-container">
    <ArticleSummary
      v-for="article in articles"
      v-bind:key="article.id"
      :article="article"
    />
    <p v-if="isLoading">
      <i class="el-icon-loading"/>
      加载中...
    </p>
    <p v-if="loadFinished">没有更多了</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticleSummary from "@/components/pc/ArticleSummary.vue";
import { IArticle, IQuery } from "@/tsConstraint/interface";
import { getArticles } from "@/apis/articleApi";

@Component({
  components: {
    ArticleSummary
  }
})
export default class Home extends Vue {
  articles: Array<IArticle> = [];
  query: IQuery = {
    pageNum: 1,
    pageSize: 10
  };
  loadFinished: boolean = false;
  isLoading: boolean = false;

  mounted() {
    this.queryArticle();
    window.onscroll = (e) => {
      // console.log("getScrollTop()",this.getScrollTop());
      // console.log("getWindowHeight()",this.getWindowHeight());
      // console.log("getScrollHeight()",this.getScrollHeight());
      if(this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight() - 10 && !this.loadFinished){
        console.log("到页面底部了");
        this.queryArticle();
      }
    }
  }

  // 获取滚动高度
  getScrollTop() {
    const bodyScrollTop = document.body.scrollTop;
    const eleScrollTop = document.documentElement.scrollTop;
    return bodyScrollTop || eleScrollTop;
  }

  //获取文档总高度
  getScrollHeight() {
    const bodyScrollHeight = document.body.scrollHeight;
    const eleScrollHeight = document.documentElement.scrollHeight;
    return bodyScrollHeight - eleScrollHeight > 0 ? bodyScrollHeight : eleScrollHeight; 
  }

  //获取窗口高度
  getWindowHeight() {
    if(document.compatMode === "CSS1Compat"){
      return document.documentElement.clientHeight;
    }
    return document.body.clientHeight;
  }

  queryArticle() {
    if(this.isLoading || this.loadFinished){
      return;
    }
    this.isLoading = true;
    getArticles(this.query).then(res => {
      this.isLoading = false;
      if(this.articles.length >= res.totalCount || res.data.length === 0){
        this.loadFinished = true;
        return;
      }
      this.query.pageNum = this.query.pageNum as number + 1;
      this.articles = this.articles.concat(res.data);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.home-container{
  flex-grow: 1;
  p{
    text-align: center;
    color: $lightColor;
    margin: 0.1rem 0;
  }
}
</style>
