<template>
  <div>
    <tr v-for="(item,index) in data" :key="index" class="h-table__row">
      <td class="h-table__cell" v-for="(value, key) in item" :key="key">
        <div class="cell">{{value}}</div>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "HTableColumn",
  components: {},
  props: {
    type: {
      type: String,
      default: "default",
    },
    label: String,
    className: String,
    labelClassName: String,
    prop: String,
  },
  data() {
    return {
      columns: [],
      data:[],
    };
  },
  created(){
    this.data = this.$parent.data;
    console.log(this.$parent)
    console.log(this.data)
    console.log(this.prop)
    console.log(this.$parent.$el)
  },
  methods: {},
};
</script>

<style lang="scss">
</style>