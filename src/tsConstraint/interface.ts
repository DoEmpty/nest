import { Position } from "./enum";

export interface IArticle {
  id: String | Number;
  title: String;
  content: String;
  imgUrl: String;
  praiseCount?: Number;
  readCount?: Number;
  commentCount?: Number;
  author: String;
  authorAvatar?: String;
  createTime: String;
}

export interface IQuery {
  pageNum: Number;
  pageSize: Number;
}

export interface IResponse<T> {
  pageNum: Number;
  pageSize: Number;
  totalCount: Number;
  data: T;
}
