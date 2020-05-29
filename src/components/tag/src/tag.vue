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
    background-color: #ecf5ff;
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    color: #0c80f9;
    border: 1px solid #d9ecff;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
  }
</style>