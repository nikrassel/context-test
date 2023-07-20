<template>
  <div class="item-presentation">
    <div class="title">
      <span>List {{ listNumber }}</span>
      <button @click="changeState()">
        {{ sorted ? "Перемешать" : "Сортировать" }}
      </button>
    </div>
    <div v-if="sorted">
      <div
        v-for="item in Object.values(list).filter((elem) => elem.show)"
        :key="item.id"
      >
        <div
          v-for="box in item.numberOfItems"
          class="box"
          :style="{ backgroundColor: item.color }"
          :key="box"
          @click="removeBox(item)"
        ></div>
      </div>
    </div>
    <div v-else>
      <div
        v-for="(box, index) in shuffleBoxes()"
        class="box"
        :style="{ backgroundColor: box.color }"
        :key="index"
        @click="removeBox(box)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sorted: true,
  }),
  props: {
    list: {
      required: true,
      type: Object,
    },
    listNumber: {
      required: true,
    },
  },
  methods: {
    removeBox(item) {
      Object.values(this.list).map((elem) => {
        if (elem.id === item.id) {
          elem.numberOfItems -= 1;
        }
        return elem;
      });
    },
    changeState() {
      this.sorted = !this.sorted;
    },
    shuffleBoxes() {
      let shuffledArray = [];
      for (let item in this.list) {
        if (this.list[item].show) {
          for (let i = 0; i < this.list[item].numberOfItems; i++) {
            shuffledArray.push({
              color: this.list[item].color,
              id: this.list[item].id,
            });
          }
        }
      }
      return shuffledArray.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style>
.item-presentation {
  margin: 15px 10px 10px 10px;
  border: 2px solid black;
}
.title {
  justify-content: space-between;
  display: flex;
  padding: 5px;
}
.box {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 2px;
}
</style>
