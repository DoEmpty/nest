<template>
  <div class="container">
    <van-pull-refresh v-model="refreshLoading" @refresh="loadRefresh">
      <van-list
        v-model="moreLoading"
        :finished="moreFinished"
        finished-text="没有更多了"
        @load="loadMore">
        <ArticleSummary
          v-for="article in articles"
          v-bind:key="article.id"
          :article="article"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticleSummary from "@/components/mobile/ArticleSummary.vue";
import { IQuery, IArticle, IResponse } from "@/tsConstraint/interface";
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
  moreFinished: boolean = false;
  moreLoading: boolean = false;
  refreshLoading: boolean = false;

  mounted() {}

  loadRefresh() {
    this.refreshLoading = false;
    this.query.pageNum = 1;
    this.articles = [];
    getArticles(this.query).then(res => {
      this.articles = res.data;
      this.query.pageNum = this.query.pageNum as number + 1;
    });
  }

  loadMore() {
    getArticles(this.query).then(res => {
      this.moreLoading = false;
      if(this.articles.length >= res.totalCount || res.data.length === 0){
        this.moreFinished = true;
        return;
      }
      this.query.pageNum = this.query.pageNum as number + 1;
      this.articles = this.articles.concat(res.data);
    });
  }
}
</script>

<style lang="scss" scoped></style>
