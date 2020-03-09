<template>
  <div class="container">
    <Nav />
    <div class="home-container">
      <div class="left">
        <article-summary
          v-for="article in articles"
          v-bind:key="article.id"
          :article="article"
        />
        <p v-show="isLoading">
          <i class="el-icon-loading" />
          加载中...
        </p>
        <p v-if="loadFinished">没有更多了</p>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/pc/Nav.vue";
import ArticleSummary from "@/components/pc/ArticleSummary.vue";
import { IArticle, IQuery } from "@/tsConstraint/interface";
import { getArticles } from "@/apis/articleApi";
import { registScrollEvent } from "@/utils/util";

@Component({
  components: {
    ArticleSummary,
    Nav
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
    registScrollEvent(scrollParam => {
      if (
        Math.abs(
          scrollParam.scrollTop +
            scrollParam.windowHeight -
            scrollParam.scrollHeight
        ) < 10 &&
        !this.loadFinished
      ) {
        console.log("到页面底部了");
        this.queryArticle();
      }
    });
  }

  queryArticle() {
    if (this.isLoading || this.loadFinished) {
      return;
    }
    this.isLoading = true;
    getArticles(this.query).then(res => {
      this.isLoading = false;
      if (this.articles.length >= res.totalCount || res.data.length === 0) {
        this.loadFinished = true;
        return;
      }
      this.query.pageNum = (this.query.pageNum as number) + 1;
      this.articles = this.articles.concat(res.data);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.home-container {
  margin: 0.8rem auto 0 auto;
  display: flex;
  p {
    text-align: center;
    color: $lightColor;
    margin: 0.1rem 0;
  }
}
</style>
