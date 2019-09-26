import * as httpService from "@/utils/httpService";
import { IQuery } from "@/interface/interface";

export const getArticles = (query: IQuery): Promise<any> => {
  return httpService.Get("/getArticleList", query).then(res => {
    console.log(res);
    return res.data;
  });
};
