<template>
<div class="h-button-group">
 <slot></slot>
</div>
</template>

<script>
export default {
  name: 'HButtonGroup',
  props:{
  },
  data() {
    return {}
  },
  mounted(){
    for (let node of this.$el.children){
      if((node.nodeName).toLowerCase!=='button'){
        console.warn('插入异常')
      }
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
   .h-button-group{
      display: inline-flex;
      vertical-align: middle;
   }
</style>