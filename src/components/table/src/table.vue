<template>
  <div class="h-table">
    <div class="hidden-columns" ref="hiddenColumns">
      <slot></slot>
    </div>
    <table class="h-table-header"
     cellspacing="0"
        cellpadding="0"
        border="0">
        <!-- <colgroup>
        </colgroup> -->
         <thead></thead>
    </table>
    <div class="h-table-body">
      <div
        v-if="!data || data.length === 0"
        class="h-table-empty"
        ref="emptyBlock"
      >
        <span class="h-table-empty-text">
          <slot name="empty">{{ emptyText }}</slot>
        </span>
      </div>
       <tr v-for="(item,index) in data" :key="index" class="h-table__row">
      <td class="h-table__cell" v-for="(value, key) in item" :key="key">
        <div class="cell">{{value}}</div>
      </td>
    </tr>
    </div>
  </div>
</template>

<script>
let tableIdSeed = 1;

export default {
  name: "HTable",
  components: {},
  props: {
    data: Array,
    emptyText: {
      type: String,
      default: "暂无数据",
    },
  },
  created(){
    this.tableId = 'h-table_' + tableIdSeed++;
  },
  methods: {},
};
</script>

<style lang="scss">
.h-table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  background: #fff;
  font-size: 14px;
  color: #1b1c33;
  .h-table__row{
    width: 100%;
  }
  .h-table__cell{
    padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
  }
}
</style>