<template>
  <div class="container">
    <!-- <ArticleSummary
      v-for="article in articles"
      v-bind:key="article.id"
      :article="article"
    /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticleSummary from "@/components/ArticleSummary.vue";
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

  mounted() {
    this.queryArticle();
  }

  queryArticle() {
    getArticles(this.query).then(res => (this.articles = res));
  }
}
</script>

<style lang="scss" scoped></style>
