<template>
  <div class="container">
    <div class="article">
      <div class="summary">
        <h4 class="title">{{ article.title }}</h4>
        <div class="content">{{ article.content }}</div>
      </div>
      <van-image
        :src="article.imgUrl"
        fit="contain"
        class="img"
        v-if="article.imgUrl"
        @click="previewImg"
      ></van-image>
    </div>
    <div class="meta">
      <span class="praise divider">
        <i class="el-icon-star-off" />
        {{ article.praiseCount || 0 }}
      </span>
      <span class="divider">
        <i class="el-icon-chat-line-round" />
        {{ article.commentCount || 0 }}
      </span>
      <span class="divider">阅读{{ article.readCount || 0 }}</span>
      <span>{{ article.author || "佚名" }}</span>
      <span class="blank" />
      <span>{{ article.createTime }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IArticle } from "@/tsConstraint/interface";
import { ImagePreview } from "vant";

@Component
export default class ArticleSummary extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  article: IArticle;

  previewImg() {
    ImagePreview({
      images: [this.article.imgUrl as string],
      startPosition: 0
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.container {
  width: 100%;
  padding: 0.2rem 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  .article {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .summary {
      line-height: 0.24rem;
      flex-grow: 1;
      .title {
        font-size: $titleSize;
        color: $darkColor;
      }
      .content {
        font-size: $contentSize;
        color: $lightColor;
        max-height: 0.7rem;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .img {
      flex-shrink: 0;
      margin-left: 0.1rem;
      width: 1.5rem;
      line-height: 0.24rem;
    }
  }
  .meta {
    color: $lightColor;
    font-size: $metaSize;
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-top: 0.05rem;
    .praise {
      color: $primaryColor;
    }
    .divider {
      border-right: 0.01rem solid #DCDFE6;
      padding-right: 0.05rem;
      margin-right: 0.05rem;
    }
  }
}
</style>
