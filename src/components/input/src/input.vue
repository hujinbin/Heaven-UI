<template>
  <div class="h-input"
    :class="[
    {'h-input-mini':size === 'mini'}
    ]">
    <textarea
      v-if="type === 'textarea'"
      :value="value"
      :placeholder="placeholder"
      :style="`height:${rows ? rows * 30 : 60}`"
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
    <template v-else>
      <input
        :type="type"
        disabled:disabled
        :value="value"
        :placeholder="placeholder"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
      />
    </template>
    <template v-if="error">
      <span class="error-text">{{ error }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "HInput",
  props: {
    type: {
      type: String,
      default: "text", // 类型 Number textarea
    },
    value: {
      type: String | Number, //绑定值
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rows: {
      //文本域默认行数，仅在 textarea 类型下有效
      type: Number,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
    error: {
      type: String,
    },
    size: String, //输入框大小
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.h-input {
  display: inline-block;
  position: relative;
  width: 100%;
  font-size: 14px;
  > input {
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #78797d;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 10px;
    width: 100%;
    &:focus {
      border: 1px solid #0c80f9;
    }
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  > textarea {
    width: 100%;
    padding: 0 10px;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #78797d;
    display: inline-block;
    font-size: inherit;
    height: 60px;
    line-height: 1.5;
    padding: 5px 10px;
    &:focus {
      border: 1px solid #0c80f9;
    }
  }
  &.h-input-mini{
    > input {
       height: 30px;
      line-height: 30px;
    }
  }
  .error-text {
    color: red;
  }
}
</style>