<template>
   <label class="h-checkbox">
        <span class="h-checkbox-input">
           <span class="h-radio-inner"></span>
           <input type="checkbox" class="h-checkbox-original" :value="value" @change="$emit('change',$event.target.value)">
        </span>
       <span class="h-checkbox-label">
           <slot></slot>
       </span>
   </label>
</template>

<script>
export default {
 name: 'h-checkbox',
  props:{
    value: Number || String,
     label: '',
     disabled:{ 
      type:Boolean,
      default:false,
    },
    name:'',
    size:{ 
      type:Number,
    },
  },
}
</script>

<style lang="scss" scoped>
.h-checkbox{
  cursor: pointer;
  color: #5E5E66;
  .h-checkbox-input{
      white-space: nowrap;
       cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
     .h-radio-inner{
      display: inline-block;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
     }
     .h-checkbox-original{
        position: absolute;
        opacity: 0;
     }
  }
}
</style>