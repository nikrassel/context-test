import { createStore } from "vuex";

export default createStore({
  state: {
    allLists: [
      {
        itemOne: {
          numberOfItems: 5,
          color: "#BF2B45",
          id: "1",
          show: true,
        },
        itemTwo: {
          numberOfItems: 0,
          color: "#1A4784",
          id: "2",
          show: false,
        },
        itemThree: {
          numberOfItems: 0,
          color: "#00A351",
          id: "3",
          show: false,
        },
        itemFour: {
          numberOfItems: 0,
          color: "#CB6423",
          id: "4",
          show: false,
        },
      },
      {
        itemOne: {
          numberOfItems: 0,
          color: "#BF2B45",
          id: "1",
          show: false,
        },
        itemTwo: {
          numberOfItems: 4,
          color: "#1A4784",
          id: "2",
          show: true,
        },
        itemThree: {
          numberOfItems: 0,
          color: "#00A351",
          id: "3",
          show: false,
        },
        itemFour: {
          numberOfItems: 0,
          color: "#CB6423",
          id: "4",
          show: false,
        },
        itemFive: {
          numberOfItems: 0,
          color: "#009FAC",
          id: "5",
          show: false,
        },
      },
      {
        itemOne: {
          numberOfItems: 0,
          color: "#BF2B45",
          id: "1",
          show: false,
        },
        itemTwo: {
          numberOfItems: 0,
          color: "#1A4784",
          id: "2",
          show: false,
        },
        itemThree: {
          numberOfItems: 3,
          color: "#00A351",
          id: "3",
          show: true,
        },
        itemFour: {
          numberOfItems: 0,
          color: "#CB6423",
          id: "4",
          show: false,
        },
      },
      {
        itemOne: {
          numberOfItems: 0,
          color: "#BF2B45",
          id: "1",
          show: false,
        },
        itemTwo: {
          numberOfItems: 0,
          color: "#1A4784",
          id: "2",
          show: false,
        },
        itemThree: {
          numberOfItems: 0,
          color: "#00A351",
          id: "3",
          show: false,
        },
        itemFour: {
          numberOfItems: 2,
          color: "#CB6423",
          id: "4",
          show: true,
        },
        itemFive: {
          numberOfItems: 0,
          color: "#009FAC",
          id: "5",
          show: false,
        },
      },
      {
        itemOne: {
          numberOfItems: 0,
          color: "#BF2B45",
          id: "1",
          show: false,
        },
        itemTwo: {
          numberOfItems: 0,
          color: "#1A4784",
          id: "2",
          show: false,
        },
        itemThree: {
          numberOfItems: 0,
          color: "#00A351",
          id: "3",
          show: false,
        },
        itemFour: {
          numberOfItems: 0,
          color: "#CB6423",
          id: "4",
          show: false,
        },
        itemFive: {
          numberOfItems: 1,
          color: "#009FAC",
          id: "5",
          show: true,
        },
        itemSix: {
          numberOfItems: 0,
          color: "#65AC3B",
          id: "6",
          show: false,
        },
      },
    ],
  },
  getters: {
    allLists: (s) => s.allLists,
  },
  mutations: {
    setNumber(state, listIndex, item, newNumber) {
      state.allLists[listIndex][item].numberOfItems = newNumber;
    },
    setColor(state, listIndex, item, newColor) {
      state.allLists[listIndex][item].color = newColor;
    },
  },
  actions: {
    changeNumber({ commit }, listIndex, item, newNumber) {
      commit("setNumber", listIndex, item, newNumber);
    },
    changeColor({ commit }, listIndex, item, newNumber) {
      commit("setColor", listIndex, item, newNumber);
    },
  },
  modules: {},
});
