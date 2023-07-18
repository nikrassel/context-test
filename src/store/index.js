import { createStore } from "vuex";

export default createStore({
  state: {
    allLists: {
      listOne: {
        itemOne: {
          numberOfItems: 5,
          color: "#BF2B45",
          id: "1",
          show: true,
        },
        itemTwo: {
          numberOfItems: 5,
          color: "#1A4784",
          id: "2",
          show: true,
        },
        itemThree: {
          numberOfItems: 5,
          color: "#00A351",
          id: "3",
          show: true,
        },
        itemFour: {
          numberOfItems: 5,
          color: "#CB6423",
          id: "4",
          show: true,
        },
      },
    },
  },
  getters: {
    allLists: (s) => s.allLists,
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
