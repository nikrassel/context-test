<template>
  <div class="wrapper">
    <div class="list-table">
      <ListSettings :list="listOne" :listNumber="1" />
    </div>
    <div class="item-table">
      <ItemPresentation :list="listOne" :listNumber="1" />
    </div>
  </div>
</template>

<script>
import ListSettings from "./components/ListSettings.vue";
import ItemPresentation from "./components/ItemPresentation.vue";
export default {
  data: () => ({
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
        show: false,
      },
      itemThree: {
        numberOfItems: 5,
        color: "#00A351",
        id: "3",
        show: false,
      },
      itemFour: {
        numberOfItems: 5,
        color: "#CB6423",
        id: "4",
        show: false,
      },
    },
  }),
  components: {
    ListSettings,
    ItemPresentation,
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  border: 2px solid rgb(0, 0, 0);
  justify-content: space-between;
}
.list-table {
  border: 2px solid black;
  margin: 10px;
  display: inline-block;
  width: 40%;
}
.item-table {
  border: 2px solid black;
  margin: 10px;
  display: inline-block;
  width: 40%;
}
</style>
