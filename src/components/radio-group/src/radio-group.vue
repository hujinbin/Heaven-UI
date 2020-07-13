<template>
   <div class="h-radio">
       <slot></slot>
   </div>
</template>

<script>
export default {
 name: 'hRadioGroup',
  props:{
    value: {},
  },
}
</script>

<style lang="scss" scoped>
.h-radio-group{
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
}
</style>