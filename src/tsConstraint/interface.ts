import { Position } from "./enum";

export interface IArticle {
  id: Number;
  title: String;
  content: String;
  imgUrl: String;
  praiseCount?: Number;
  readCount?: Number;
  commentCount?: Number;
  author: String;
  createTime: String;
}

export interface IQuery {
  pageNum: Number;
  pageSize: Number;
}
