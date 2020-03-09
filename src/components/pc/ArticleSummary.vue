<template>
  <div class="art-item-container">
    <div class="article">
      <div class="summary">
        <h4 class="title" @click="handleTitleClick">{{ article.title }}</h4>
        <div class="content">{{ article.content }}</div>
      </div>
      <el-image
        :src="article.imgUrl"
        :data-src="article.imgUrl"
        fit="contain"
        lazy
        :preview-src-list="[article.imgUrl]"
        class="img"
        v-if="article.imgUrl"
      ></el-image>
    </div>
    <div class="meta">
      <span class="praise">
        <i class="el-icon-star-off" />
        {{ article.praiseCount || 0 }}
      </span>
      <el-divider direction="vertical" />
      <span>
        <i class="el-icon-chat-line-round" />
        {{ article.commentCount || 0 }}
      </span>
      <el-divider direction="vertical" />
      <span>阅读{{ article.readCount || 0 }}</span>
      <el-divider direction="vertical" />
      <span>{{ article.author || "佚名" }}</span>
      <span class="blank" />
      <span>{{ article.createTime }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IArticle } from "@/tsConstraint/interface";

@Component
export default class ArticleSummary extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  article: IArticle;

  handleTitleClick() {
    this.$router.push({ path: `/article/${this.article.id}` });
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";
.art-item-container {
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
        cursor: pointer;
      }
      .content {
        margin-top: 0.1rem;
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
  }
}
</style>
