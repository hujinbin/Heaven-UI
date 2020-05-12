<template>
   <div class="h-option"
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
  }
};
</script>

<style lang="scss" scoped>
  .h-option{

  }
</style>
