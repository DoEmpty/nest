import { TOKEN_KEY } from "@/utils/config";
import { SET_TOKEN } from "../actionType";

// user store注册了独立的命名空间
export default {
  namespaced: true,
  state: {
    token: ""
  },
  getters: {
    isLogin: state => !!state.token
  },
  actions: {
    //初始打开，从本地缓存中提取登录token以检查登录状态
    checkLogin({ state, commit, rootState }) {
      const token = localStorage.getItem(TOKEN_KEY);
      commit(SET_TOKEN, token);
    },
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
    login(context) {
      const token = "wodenglula";
      localStorage.setItem(TOKEN_KEY, token);
      context.commit(SET_TOKEN, token);
    },
    logout({ commit }) {
      localStorage.removeItem(TOKEN_KEY);
      commit(SET_TOKEN, "");
    }
  },
  mutations: {
    [SET_TOKEN](state, token) {
      state.token = token;
    }
  }
};
