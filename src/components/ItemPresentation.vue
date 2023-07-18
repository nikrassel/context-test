<template>
  <div class="item-presentation">
    <div class="title">
      <span>List {{ listNumber }}</span>
      <button @click="sorting">Сортировать</button>
    </div>
    <div
      v-for="item in Object.values(list).filter((elem) => elem.show)"
      :key="item.id"
    >
      <div
        v-for="box in item.numberOfItems"
        class="box"
        :style="{ backgroundColor: item.color }"
        :key="box"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sort: false,
    combineArray: [],
  }),
  props: {
    list: {
      required: true,
      type: Object,
    },
    listNumber: {
      required: true,
      type: Number,
    },
  },
  computed: {
    sorting: function () {
      for (let item in this.list) {
        if (this.list[item].show) {
          for (let i = 0; i < this.list[item].numberOfItems; i += 1) {
            this.combineArray.push(this.list[item].color);
          }
        }
      }
      console.log(this.combineArray);
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
