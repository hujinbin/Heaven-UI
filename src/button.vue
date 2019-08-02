<template>
    <button class="h-button" @click="$emit(click)">
      <h-icon v-if="icon && !loading" :name="icon"><h-icon>
         <h-icon v-if="loading" name="loading"><h-icon>
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'button',
  props:{
    icon:String, //图标
    loading:{ // 加载状态
      type:Boolean,
      default:false,
    },
    size:{  // 按钮大小
      type:String,
      default:'normal', //尺寸	String	small, normal, large
    },	
    type:{
      type:String,
      default:'primary'
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
 .h-button{
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    border: 1px solid #C9C9C9;
    background-color: #fff;
    color: #555;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
 }
</style>