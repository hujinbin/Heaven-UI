<template>
    <i class="h-icon" :class="`h-icon-${name}`" :style="{fontSize:size}"></i>
</template>

<script>
export default {
  name: 'HIcon',
  props:{
    name:String,
    size:{
      type:Number,
      default:14,
    }
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
  @import '//at.alicdn.com/t/font_1343551_0vtaqdeweopn.css'; 
  .h-icon{
    font-style: normal;
  }
</style>