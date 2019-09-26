<template>
  <div class="container">
    <ArticleSummary
      v-for="article in articles"
      v-bind:key="article.id"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ArticleSummary from "@/components/ArticleSummary.vue";
import { IArticle, IQuery } from "@/interface/interface";
import { getArticles } from "@/apis/articleApi";

@Component({
  components: {
    ArticleSummary
  }
})
export default class Home extends Vue {
  articles: Array<IArticle> = [
    {
      id: 1,
      title: "初来上海，怎么办？",
      content:
        "1. “你必须非常努力，才能看起来毫不费力。”我看很多人把这句话当成座右铭，不知是否理解了其中的深意。 我刚来上海时，本想跟着好友Tommy工作1. “你必须非常努力，才能看起来毫不费力。”我看很多人把这句话当成座右铭，不知是否理解了其中的深意。 我刚来上海时，本想跟着好友Tommy工作",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      author: "小嘟嘟",
      createTime: "20180-01-01 12:00"
    }
  ];
  query: IQuery = {
    pageNum: 1,
    pageSize: 10
  };

  mounted() {
    this.queryArticle();
  }

  queryArticle() {
    getArticles(this.query).then(res => {
      console.log("aaa", res);
    });
  }
}
</script>

<style lang="scss" scoped></style>
