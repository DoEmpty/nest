<template>
  <div class="author">
    <el-avatar :size="50" shape="circle" :src="authorAvatar" />
    <div class="middle">
      <div class="middle-top">
        <span class="author">{{ author }}</span>
        <span v-if="attentionPos === 1" class="btn">关注</span>
      </div>
      <p class="middle-bottom">
        <slot />
      </p>
    </div>
    <span v-if="attentionPos === 5" class="btn">关注</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Position } from "@/tsConstraint/enum";

@Component
export default class AuthorAttention extends Vue {
  @Prop({ default: Position.top }) attentionPos: Position;
  @Prop({ type: String }) authorAvatar: String;
  @Prop({ type: String, required: true }) author: String;
}
</script>

<style lang="scss" scoped>
.author {
  display: flex;
  align-items: center;
  .middle {
    margin-left: 0.1rem;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    overflow: hidden;
    .middle-top {
      display: flex;
      .author {
        font-size: 0.16rem;
        flex-grow: 1;
      }
      .btn {
        font-size: 0.12rem;
      }
    }
    .middle-bottom {
      color: #969696;
      font-size: 0.13rem;
    }
  }
  > .btn {
    font-size: 0.14rem;
  }
  .btn {
    border: 1px solid #ec7259;
    border-radius: 0.14rem;
    padding: 0.02rem 0.1rem;
    color: #ec7259;
    cursor: pointer;
    margin-left: 0.1rem;
    white-space: nowrap;
  }
}
</style>
