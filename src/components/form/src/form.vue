<template>
  <form class="h-from" :class="{'h-form-inline': inline }">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "HFrom",
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
.h-from {
  &.h-form-inline {
  }
}
</style>
