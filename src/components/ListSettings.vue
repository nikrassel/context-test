<template>
  <details class="list-settings">
    <summary>
      <input
        type="checkbox"
        @change="selectAll()"
        v-model="allActive"
        :class="checkSelection"
      />
      List {{ listNumber }}
    </summary>
    <ul>
      <li
        class="item-settings"
        v-for="item in Object.values(list)"
        :key="item.id"
      >
        <input type="checkbox" v-model="item.show" />
        Item {{ item.id }}
        <input
          type="number"
          :min="0"
          v-model.number="item.numberOfItems"
          :style="{ width: '45px' }"
        />
        <input class="color-control" type="color" v-model="item.color" />
      </li>
    </ul>
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
    },
  },
  computed: {
    checkSelection() {
      const inactiveItems = Object.values(this.list).filter(
        (elem) => !elem.show
      );
      if (inactiveItems.length === 0) {
        this.allActive = true;
        return "";
      } else if (inactiveItems.length != Object.values(this.list).length) {
        this.allActive = false;
        return "half-selected";
      } else {
        this.allActive = false;
        return "";
      }
    },
  },
  methods: {
    selectAll() {
      const inactiveItems = Object.values(this.list).filter(
        (elem) => !elem.show
      );
      if (this.allActive && inactiveItems.length > 0) {
        for (let item in this.list) {
          this.list[item].show = true;
        }
      } else if (!this.allActive && inactiveItems.length === 0) {
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
  margin: 15px 0 5px 10px;
}
.item-settings {
  margin: 0 0 5px 0;
  list-style-type: none;
}
.color-control {
  width: 25px;
  margin-left: 10px;
}
.half-selected {
  box-shadow: 0px 0px 0px 5px rgba(44, 104, 254) inset;
}
</style>
