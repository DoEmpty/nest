import axios from "axios";
import { rewriteMessage } from "@/utils/util";

// create an axios instance
let service: any = {};
if (process.env.NODE_ENV === "development") {
  service = axios.create({
    baseURL: "/api",
    timeout: 5000 // request timeout
  });
}

// request interceptor
service.interceptors.request.use(
  config => {
    // const token = getToken();
    // if (token) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    // config.headers['token'] = getToken()
    // }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    if (+response.status !== 201) {
      rewriteMessage("请求失败", "error");
    }
    return response.data;
  },
  error => {
    console.log("err" + error); // for debug
    rewriteMessage(error.message, "error");
    return Promise.reject(error);
  }
);

export function Post(url: String, data?: any, config: any = {}) {
  return service({
    url,
    method: "post",
    data: data || {},
    config: {
      headers: {
        "Content-Type": "application/json"
      },
      ...config
    }
  });
}

export function Put(url: String, data?: any, config: any = {}) {
  return service({
    url,
    method: "put",
    data: data,
    config: {
      headers: {
        "Content-Type": "application/json"
      },
      ...config
    }
  });
}

export function Get(url: String, params = {}, config: any = {}) {
  return service({
    url,
    method: "get",
    params,
    config: {
      headers: {
        "Content-Type": "application/json"
      },
      ...config
    }
  });
}

export default service;
