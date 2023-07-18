import { createStore } from "vuex";

export default createStore({
  state: {
    listOne: {
      numberOfItems: 10,
      itemColor: "red",
    },
  },
  getters: {
    listOne: (s) => s.listOne,
  },
  mutations: {
    setNumber(state, newNumber) {
      state.listOne.numberOfItems = newNumber;
    },
    setColor(state, newColor) {
      state.listOne.itemColor = newColor;
    },
  },
  actions: {
    changeNumber({ commit }, newNumber) {
      commit("setNumber", newNumber);
    },
    changeColor({ commit }, newColor) {
      commit("setColor", newColor);
    },
  },
  modules: {},
});
