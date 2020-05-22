<template>
   <div class="h-option"
    @click.stop="selectOption"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled,
    }">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
   </div>
</template>

<script>
export default {
  name: "HOption",
  props: {
      value: {
        required: true
      },
      label: [String, Number],
      created: Boolean,
      disabled: {
        type: Boolean,
        default: false
      }
  },
  computed: {
    isObject() {
        return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },
    // 当前选中的展示信息
     currentLabel() {
        return this.label || (this.isObject ? '' : this.value);
      },
      // 当前是否选中
     itemSelected() {
        // if (!this.select.multiple) {
        //   return this.isEqual(this.value, this.select.value);
        // } else {
        //   return this.contains(this.select.value, this.value);
        // }
      },
  },
  methods: {
    selectOption(){
      this.dispatch('HSelect', 'on-select-selected', this.value);
      this.$emit('selectOption',this.value)
    },
  }
};
</script>

<style lang="scss" scoped>
  .h-option{
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #5E5E66;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      color: #ffffff;
      background: #0c80f9;
    }
  }
</style>
