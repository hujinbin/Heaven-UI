<template>
   <span class="h-tag">
      <slot></slot>
   </span>
</template>

<script>
export default {
   name: 'HTag',
   props: {
      text: String,
      type: String,
      color: String,
      size: String,
    },
}
</script>

<style lang="scss" scoped>
  .h-tag{
     
  }
</style>