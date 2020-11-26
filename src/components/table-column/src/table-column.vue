<template>
  <div></div>
</template>

<script>
export default {
  name: "HTableColumn",
  components: {},
  props: {
    type: {
      type: String,
      default: "default"
    },
    label: String,
    className: String,
    labelClassName: String,
    prop: String
  },
  data() {
    return {
      columns: []
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>