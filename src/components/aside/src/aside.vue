<template>
  <aside class="h-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'HAside',

    componentName: 'HAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>

<style lang="scss" scoped>
.h-aside{
  flex-shrink: 0;
}
</style>
