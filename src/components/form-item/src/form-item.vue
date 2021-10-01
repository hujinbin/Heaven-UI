<template>
  <div class="h-form-item">
    <div class="h-form-item-label" :style="{width:(labelWidth || 'auto')}">
      {{label}}
    </div>
    <div class="h-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HFormItem",
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
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    .h-form-item-label{
      text-align: right;
      vertical-align: middle;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
   }
   .h-form-item-content{
      flex: 1;
   }
}
</style>
