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
    inline: {
      default: false,
      type: Boolean
    }
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
