<template>
  <label
    class="h-checkbox"
    :class="[
      { 'disabled': disabled },
      { 'checked': isChecked}
    ]"
  >
    <span class="h-checkbox-input">
      <span class="h-radio-inner"></span>
      <input
        type="checkbox"
        class="h-checkbox-original"
        :name="name"
        :value="label"
        v-model="model"
        @change="valueChange"
      />
    </span>
    <span class="h-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "h-checkbox",
  componentName: 'HCheckbox',
  props: {
    value: Boolean || Number || String,
    label: Boolean || Number || String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    size: {
      type: Number
    }
  },
  data() {
      return {
      };
  },
  computed: {
    // 选中的值
    model: {
      get() {
        return this.value;
      },
      set(val) {
        if(this.disabled === false){
          this.$emit("input", val);
        }
      }
    },
    // 是否选中状态
    isChecked() {
      return this.model
    },
    // 是否多选框组
    isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'HCheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },
  },
  methods:{
//    当选框选中事件
    valueChange($event){
      if(this.disabled === false){
        this.$emit('change',$event.target.value)
      }
    }
  },
};
</script>

<style lang="scss" type="text/scss" scoped>
.h-checkbox {
  cursor: pointer;
  color: #5e5e66;
  .h-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .h-radio-inner {
      display: inline-block;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
    }
    .h-checkbox-original {
      position: absolute;
      opacity: 0;
    }
  }
   &.checked {
    .h-radio-inner {
      background: #0c80f9;
      border-color: #0c80f9;
      &::after {
        content: "";
        box-sizing: content-box;
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 5px;
        position: absolute;
        top: 2px;
        transform: rotate(45deg) scaleY(1);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
  }
  &.disabled {
    cursor: not-allowed;
    .h-radio-inner {
      background: #78797d;
      border-color: #78797d;
    }
  }
}
</style>
