import * as httpService from "@/utils/httpService";
import { IQuery, IArticle, IResponse } from "@/tsConstraint/interface";
import { apiFilter4Code, parseDateToString } from "@/utils/util";

export const getArticles = (
  query: IQuery
): Promise<IResponse<Array<IArticle>>> => {
  return httpService
    .Get("/getArticleList", { ...query, state: 1 })
    .then(res => {
      return apiFilter4Code(res, 0);
    })
    .then(res => {
      const resp: IResponse<Array<IArticle>> = {
        ...query,
        totalCount: res.count,
        data: res.list.map(x => {
          return {
            id: x._id,
            title: x.title,
            content: x.desc,
            imgUrl: x.img_url.replace(/\?[\w|\W]*/, ""),
            authro: "",
            createTime: parseDateToString(x.create_time, "yyyy/MM/dd HH:mm"),
            praiseCount: x.meta.likes,
            readCount: x.meta.views,
            commentCount: x.meta.comments
          };
        })
      };
      return resp;
    });
};

export const getArticleById = (id: string): Promise<IResponse<IArticle>> => {
  return httpService
    .Post("/getArticleDetail", { id })
    .then(res => {
      return apiFilter4Code(res, 0);
    })
    .then(res => {
      return {
        data: {
          id: res._id,
          title: res.title,
          content: res.content,
          imgUrl: res.img_url,
          praiseCount: res.meta.likes,
          readCount: res.meta.views,
          commentCount: res.meta.comments,
          author: res.author,
          authorAvatar:
            "http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583983486&t=f297e9712df0380a261c2278caf5630e",
          createTime: res.create_time
        }
      };
    });
};
