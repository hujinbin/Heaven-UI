<template>
  <div class="h-form-item">
    <div class="h-form-item-label">
      {{label}}
    </div>
    <div class="h-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HFromItem",
  props: {
      label: String,
      labelWidth: String,
  },
  data(){
    return{}
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.h-form-item {
    margin-bottom: 22px;
    .h-form-item-label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
}
</style>
