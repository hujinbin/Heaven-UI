<template>
   <span class="h-tag" @click="handleClick">
      <slot></slot>
      <HIcon v-if="closable"
      name="close"
      @click="handleClose"></HIcon>
   </span>
</template>

<script>
import HIcon from '../../icon'

export default {
   name: 'HTag',
   components:{
    HIcon
   },
   props: {
      text: String,
      type: String,
      color: String,
      size: String,
      closable:Boolean, //	标签是否可以关闭
      checkable:Boolean, //	标签是否可以选择
      checked:Boolean, //	标签的选中状态
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
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