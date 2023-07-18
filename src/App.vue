<template>
  <div class="wrapper">
    <div class="list">
      <details class="list-one">
        <summary>
          <input type="checkbox" />
          List 1
        </summary>
        <div>
          <input type="checkbox" />
          Item 1
          <input type="number" />
          <input type="color" />
        </div>
        <div>
          <input type="checkbox" />
          Item 2
          <input type="number" />
          <input type="color" />
        </div>
      </details>
    </div>
    <div class="item">
      <div class="table-one">
        <div class="title">
          <span>List 1</span>
          <button @click="onClick">Сортировать</button>
        </div>
        <div>
          <div
            v-for="box in listOne.numberOfItems"
            class="box"
            :style="{ backgroundColor: listOne.itemColor }"
            :key="box.color"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["listOne"]),
    onClick() {
      console.log(this.listOne);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  border: 2px solid black;
  justify-content: space-between;
}
.list {
  border: 2px solid black;
  margin: 10px;
  display: inline-block;
  width: 40%;
}
.item {
  border: 2px solid black;
  margin: 10px;
  display: inline-block;
  width: 40%;
}
.list-one {
  margin: 15px 0 10px 10px;
}
.table-one {
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
