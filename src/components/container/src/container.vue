<template>
  <section class="h-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'HContainer',

    componentName: 'HContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'h-header' || tag === 'h-footer';
          })
          : false;
      }
    }
  };
</script>

<style lang="scss" scoped>
.h-container{
  display: flex;
  flex: auto;
  flex-direction: column;
}
</style>
