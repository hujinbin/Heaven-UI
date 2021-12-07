<template>
  <main class="h-main">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: 'HMain',
    componentName: 'HMain'
  };
</script>

<style lang="scss" scoped>
.h-main{
  display: block;
  flex: 1;
  flex-basis: auto;
}
</style>