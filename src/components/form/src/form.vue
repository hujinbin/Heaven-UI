<template>
  <form class="h-form" :class="{'h-form-inline': inline }">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "HForm",
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
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.h-form {
  &.h-form-inline {
  }
}
</style>
