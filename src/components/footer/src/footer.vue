<template>
  <footer class="h-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'HFooter',

    componentName: 'HFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>

<style lang="less" scoped>

</style>