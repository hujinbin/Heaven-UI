<template>
  <div>
  </div>
</template>

<script>
let columnIdSeed = 1;

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
      columnId:'',
    };
  },
  created(){
    console.log(this)
    let parent = this.$parent;
    console.log(this.$attrs)
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;
    console.log(this.$parent)
  },
  methods: {},
};
</script>

<style lang="scss">
</style>