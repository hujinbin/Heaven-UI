<template>
  <label
    class="h-radio"
    :class="[
      { 'disabled': disabled },
      { 'checked':model === label}
    ]"
  >
    <span class="h-radio-input">
      <span class="h-radio-inner"></span>
      <input
        type="radio"
        class="h-radio-original"
        :value="label"
        v-model="model"
        @change="handleChange"
      />
    </span>
    <span class="h-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "HRadio",
  props: {
    label: Number || String,
    value: Number || String,
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
      isGroup() {
        let parent = this.$parent;
        if (parent.$options.name !== 'hRadioGroup') {
           return true;
        }
        return false;
      },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        if(this.disabled === false){
          this.$emit("input", val);
        }
      }
    }
  },
  methods: {
    handleChange($event) {
      if(this.disabled === false){
        this.$emit("change", $event.target.value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.h-radio {
  color: #606266;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  font-size: 14px;
  margin-right: 20px;
  .h-radio-input {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .h-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background: #fff;
      position: relative;
      display: inline-block;
      box-sizing: border-box;
    }
    .h-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
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
