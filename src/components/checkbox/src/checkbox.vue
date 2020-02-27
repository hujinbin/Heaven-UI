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
        @change="$emit('change',$event.target.value)"
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
  props: {
    value: Number || String,
    label: Number || String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    size: {
      type: Number
    }
  },
  computed: {
    // 选中的值
    model: {
      get() {
        console.log(this.value)
        return this.value;
      },
      set(val) {
        console.log(val)
        this.$emit("input", val);
      }
    },
    // 是否选中状态
    isChecked() {
      return this.model
    },
  }
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
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        position: absolute;
        display: block;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-in;
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
