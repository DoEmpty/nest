<template>
  <div class="container">
    <Nav class="nav" :class="{ 'nav-out': showArticleNav }" />
    <div class="article-nav" :class="{ 'article-nav-act': showArticleNav }">
      <div>
        <h3>{{ article.title }}</h3>
        <author-attention
          :attentionPos="5"
          :authorAvatar="article.authorAvatar"
          :author="article.author"
        />
      </div>
    </div>
    <div class="article-container" v-loading="isLoading">
      <div class="content">
        <h2>{{ article.title }}</h2>
        <author-attention
          :attentionPos="1"
          :authorAvatar="article.authorAvatar"
          :author="article.author"
          class="detail-author"
          ref="author"
        >
          {{ article.createTime | parseTime }} 阅读{{ article.readCount }}
        </author-attention>
        <div v-if="isHtmlArticle" v-html="article.content"></div>
        <mavon-editor
          v-else
          :value="article.content"
          defaultOpen="preview"
          :editable="false"
          :subfield="false"
          :toolbarsFlag="false"
          :shortCut="false"
        />
      </div>
      <div class="side-menu">
        <div class="side-top">
          <author-attention
            :attentionPos="5"
            :authorAvatar="article.authorAvatar"
            :author="article.author"
            class="side-author"
          >
            总资产0(约0元)
          </author-attention>
          <div
            class="side-art"
            v-for="item in recommendAuthorArticles"
            :key="item.title"
          >
            {{ item.title }}
            <span>阅读 {{ item.readCount }}</span>
          </div>
        </div>
        <div
          class="side-bottom"
          :class="{ 'side-bottom-fix': fixSideRecommend }"
          ref="recommend"
        >
          <span class="side-title">推荐阅读</span>
          <div
            class="side-art"
            v-for="item in recommendAuthorArticles"
            :key="item.title"
          >
            {{ item.title }}
            <span>阅读 {{ item.readCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Nav from "@/components/pc/Nav.vue";
import AuthorAttention from "@/components/pc/AuthorAttention.vue";
import { registScrollEvent, parseDateToString } from "@/utils/util";
import { getArticleById } from "@/apis/articleApi";
import { IArticle } from "@/tsConstraint/interface";

@Component({
  components: { Nav, AuthorAttention },
  filters: {
    parseTime(time) {
      return parseDateToString(time, "yyyy.MM.dd HH:mm");
    }
  }
})
export default class ArticleDetail extends Vue {
  @Prop({
    type: String,
    required: true
  })
  id: string;

  isLoading: boolean = false;
  isHtmlArticle: boolean = false;
  showArticleNav: boolean = false;
  fixSideRecommend: boolean = false;
  article: IArticle = {
    id: "",
    title: "",
    content: "",
    imgUrl: "",
    author: "",
    createTime: ""
  };
  recommendAuthorArticles: any = [
    { title: "Vue知识点零摘", readCount: 2 },
    { title: "大前端才是王道", readCount: 999 },
    { title: "我爱我的祖国", readCount: 100 }
  ];

  mounted() {
    this.queryArticle();
    //@ts-ignore
    const authorEl = this.$refs.author.$el,
      sideRecommendEl = this.$refs.recommend;
    //@ts-ignore
    const authorTop = authorEl.offsetTop + authorEl.clientHeight;
    //@ts-ignore
    const recommendTop = sideRecommendEl.offsetTop;
    registScrollEvent(scrollParam => {
      this.showArticleNav = scrollParam.scrollTop >= authorTop;
      this.fixSideRecommend = scrollParam.scrollTop >= recommendTop;
    });
  }

  async queryArticle() {
    this.isLoading = true;
    const resp = await getArticleById(this.id);
    this.article = resp.data;
    this.isHtmlArticle =
      resp.data.content.includes("<div>") || resp.data.content.includes("<p>");
    this.isLoading = false;
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.container {
  .nav {
    transition: top 0.5s;
  }
  .nav-out {
    top: -0.6rem;
  }
  .article-nav {
    box-shadow: 0px 1px 2px #eee;
    background: #fff;
    top: 0.6rem;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    height: 0.6rem;
    font-size: $menuSize;
    color: $lightColor;
    position: fixed;
    z-index: -1;
    opacity: 0;
    transition: top 0.5s;
    > div {
      margin: 0 auto;
      padding: 0 0.1rem;
      display: flex;
      align-items: center;
      height: 100%;
      @media (min-width: 1080px) {
        width: 960px;
      }
      @media (max-width: 1080px) {
        width: 760px;
      }
      h3 {
        white-space: nowrap;
        color: #000;
        margin-right: 0.1rem;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .article-nav-act {
    top: 0;
    opacity: 1;
    z-index: $maskZIndex + 2;
  }
  .article-container {
    margin: 0.7rem auto 0 auto;
    display: flex;
    flex-direction: row;
    .content {
      padding: 0.05rem;
      background: #fff;
      flex-grow: 1;
      .detail-author {
        margin: 0.2rem;
      }
      .markdown-body {
        z-index: 0 !important;
      }
    }
    .side-menu {
      margin-left: 0.1rem;
      @media (max-width: 1080px) {
        display: none;
      }
      .side-top,
      .side-bottom {
        width: 2.6rem;
        margin-bottom: 0.1rem;
        padding: 0.1rem;
        background: #fff;
        .side-author {
          padding-bottom: 0.2rem;
          border-bottom: 1px solid #eee;
        }
        .side-title {
          font-size: 0.16rem;
          margin-bottom: 0.2rem;
          border-left: 0.04rem solid #ec7259;
          padding-left: 0.1rem;
        }
        .side-art {
          margin: 0.2rem 0.1rem;
          display: flex;
          flex-direction: column;
          font-size: 0.14rem;
          cursor: pointer;
          span {
            margin-top: 0.05rem;
            color: #969696;
            font-size: 0.12rem;
          }
        }
      }
      .side-bottom-fix {
        position: fixed;
        top: 0.6rem;
      }
    }
  }
}
</style>
<style lang="scss">
body {
  background: #f9f9f9 !important;
}
</style>
