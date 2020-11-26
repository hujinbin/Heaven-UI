<template>
  <div class="h-table">
    <div class="hidden-columns" ref="hiddenColumns">
      <slot></slot>
    </div>
    <div class="h-table-header"></div>
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
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  background: #fff;
  font-size: 14px;
  color: #1b1c33;
}
</style>