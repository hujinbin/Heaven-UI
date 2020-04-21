<template>
   <div class="h-option"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled,
    }">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
   </div>
</template>

<script>
export default {
  name: "HOption",
  props: {
      disabled: {
        type: Boolean,
        default: false
      }
  },
  computed: {
     itemSelected() {
        // if (!this.select.multiple) {
        //   return this.isEqual(this.value, this.select.value);
        // } else {
        //   return this.contains(this.select.value, this.value);
        // }
      },
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
  .h-option{

  }
</style>
