<template>
  <form class="h-form" :class="{'h-form-inline': inline }">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "HForm",
  provide() {
      return {
        HForm: this
      };
  },
  props: {
    model: Object,
    rules: Object,
     labelPosition: String,
    labelWidth: String,
    inline: {
      default: false,
      type: Boolean
    },
    showMessage: {
        type: Boolean,
        default: true
      },
  },
  watch: {
    // 监听规则
      rules() {
        
      }
    },
  data() {
    return {};
  },
  computed: {},
  methods: {
    resetFields() {
        if (!this.model) {
          console.warn('表单model是必填的.');
          return;
        }
    },
  }
};
</script>

<style lang="scss" scoped>
.h-form {
  &.h-form-inline {
  }
}
</style>
