<template>
   <div class="h-checkbox-group">
      <slot></slot>
   </div>
</template>

<script>
export default {
  name: "h-checkbox-group",
  componentName: 'HCheckboxGroup',
   props: {
      value: {},
      disabled: Boolean,
      size: String,
   },
}
</script>

<style lang="scss" type="text/scss" scoped>

</style>
