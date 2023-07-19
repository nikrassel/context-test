<template>
  <div class="wrapper">
    <div class="list-table">
      <ListSettings
        v-for="(list, index) in listArray"
        :list="list"
        :listNumber="index + 1"
        :key="index"
      />
    </div>
    <div class="item-table">
      <ItemPresentation
        v-for="(list, index) in listArray"
        :list="list"
        :listNumber="index + 1"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import ListSettings from "./components/ListSettings.vue";
import ItemPresentation from "./components/ItemPresentation.vue";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    listArray: [],
  }),
  components: {
    ListSettings,
    ItemPresentation,
  },
  computed: {
    ...mapGetters(["allLists"]),
  },
  mounted() {
    this.listArray = this.allLists;
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
