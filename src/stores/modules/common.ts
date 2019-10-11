import { isMobile } from "@/utils/util";

// common state不需要独立的命名空间，action、mutation 和 getter 是注册在全局命名空间的
const common = {
  state: {},
  getters: {
    isMobile: () => isMobile()
  },
  actions: {},
  mutations: {}
};

export default common;
