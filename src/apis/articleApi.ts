import * as httpService from "@/utils/httpService";
import { IQuery, IArticle } from "@/tsConstraint/interface";
import { apiFilter4Code, parseDateToString } from "@/utils/util";

export const getArticles = (query: IQuery): Promise<Array<IArticle>> => {
  return httpService
    .Get("/getArticleList", { ...query, state: 1 })
    .then(res => {
      return apiFilter4Code(res, 0);
    })
    .then(res => {
      return res.list.map(x => {
        return {
          id: x._id,
          title: x.title,
          content: x.desc,
          imgUrl: x.img_url.replace(/\?[\w|\W]*/, ""),
          authro: "",
          createTime: parseDateToString(x.create_time, "yyyy/MM/dd HH:mm")
        };
      });
    });
};
