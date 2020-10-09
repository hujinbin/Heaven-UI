<template>
  <div
    class="h-switch"
    :class="{ 'is-disabled': disabled, 'is-checked': checked }"
    @click.prevent="switchChange"
  >
    <input
      ref="input"
      type="checkbox"
      @change="handleChange"
      class="h-switch-input"
    />
    <span v-if="inactiveText">{{ inactiveText }}</span>
    <span class="h-switch-core"></span>
    <span v-if="activeText">{{ activeText }}</span>
  </div>
</template>

<script>
export default {
  name: "HSwitch",
  components: {},
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeText: String, // 开启显示的文字
    inactiveText: String, // 关闭显示的文字
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    }, // 开启的值
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    }, // 关闭的值
  },
  data() {
    return {};
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    },
  },
  methods: {
    // 复选框选中事件
    handleChange(event) {
      const val = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit("input", val);
      this.$emit("change", val);
      this.$nextTick(() => {
        this.$refs.input.checked = val;
        console.log(this.checked);
      });
    },
    // 复选框点击事件
    switchChange() {
      !this.switchDisabled && this.handleChange();
    },
  },
};
</script>

<style lang="scss" scoped>
.h-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .h-switch-input {
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
  }
  .h-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #d7d7db;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #d7d7db;
    cursor: pointer;
    vertical-align: middle;
    &:after {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked {
    .h-switch-core {
      border-color: #0c80f9;
      background-color: #0c80f9;
      &:after {
        content: "";
        right: 0;
        left: auto;
        transition: all 0.3s;
      }
    }
  }
}
</style>
