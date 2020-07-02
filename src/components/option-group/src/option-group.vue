<template>
   <div class="h-option-group-wrap">
     <div class="h-option-group-title">{{ label }}</div>
     <div class="h-option-group">
        <slot></slot>
    </div>
   </div>
</template>

<script>
export default {
  name: "HOptionGroup",
  props: {
     label: String,
      disabled: {
        type: Boolean,
        default: false
      }
  },
   data() {
      return {
        visible: true
      };
    },
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
