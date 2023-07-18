<template>
  <details class="list-settings">
    <summary>
      <input type="checkbox" @change="selectAll" v-model="allActive" />
      List {{ listNumber }}
    </summary>
    <div v-for="item in Object.values(list)" :key="item.id">
      <input type="checkbox" v-model="item.show" />
      Item {{ item.id }}
      <input type="number" v-model.number="item.numberOfItems" />
      <input type="color" v-model="item.color" />
    </div>
  </details>
</template>

<script>
export default {
  data: () => ({
    allActive: false,
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
    selectAll: function () {
      const inactiveItems = Object.values(this.list).filter(
        (elem) => !elem.show
      );
      if (this.allActive && inactiveItems.length > 0) {
        for (let item in this.list) {
          this.list[item].show = true;
        }
      } else if (!this.allActive && inactiveItems.length < 1) {
        for (let item in this.list) {
          this.list[item].show = false;
        }
      }
    },
  },
};
</script>

<style lang="scss">
.list-settings {
  margin: 15px 0 10px 10px;
}
</style>
