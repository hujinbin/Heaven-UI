<template>
  <header class="h-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'HHeader',

    componentName: 'HHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
