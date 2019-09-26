import { SET_MASK_VISIBLE } from "../actionType";

const common = {
  state: {
    showMask: false
  },
  getters: {
    showMask: state => state.showMask
  },
  actions: {},
  mutations: {
    [SET_MASK_VISIBLE](state: any, visible: boolean) {
      state.showMask = visible;
    }
  }
};

export default common;
