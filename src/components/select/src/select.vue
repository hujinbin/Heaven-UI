<template>
   <div></div>
</template>

<script>
export default {
  name: "HSelect",
  props: {
    label: Number | String,
    value: Number | String,
    disabled: {
      type: Boolean,
      default: false
    },
    name: "",
    size: {
      type: Number
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>

</style>
